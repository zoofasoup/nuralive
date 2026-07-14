import { NextRequest, NextResponse } from "next/server";
import {
  PACKAGES,
  ORDER_BUMP,
  SHIPPING_ZONES,
  PAYMENT_METHODS,
  FREE_SHIPPING_MIN,
} from "@/lib/config";
import {
  insertOrder,
  generateOrderId,
  getStock,
  setStock,
  listOrders,
} from "@/lib/db";

// POST /api/orders — buat pesanan baru. Semua harga dihitung ulang di server;
// nilai dari client tidak pernah dipercaya.
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body tidak valid." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").replace(/\D/g, "");
  const address = String(body.address ?? "").trim();
  const zoneId = String(body.zone ?? "");
  const note = body.note ? String(body.note).trim().slice(0, 500) : null;
  const packageId = String(body.packageId ?? "");
  const bump = Boolean(body.bump);
  const payment = String(body.payment ?? "");

  if (name.length < 3 || name.length > 120) {
    return NextResponse.json({ error: "Nama belum lengkap." }, { status: 400 });
  }
  if (phone.length < 9 || phone.length > 15) {
    return NextResponse.json({ error: "Nomor WhatsApp tidak valid." }, { status: 400 });
  }
  if (address.length < 15 || address.length > 1000) {
    return NextResponse.json(
      { error: "Alamat terlalu singkat — lengkapi sampai kecamatan & kode pos." },
      { status: 400 }
    );
  }

  const pkg = PACKAGES.find((p) => p.id === packageId);
  const zone = SHIPPING_ZONES.find((z) => z.id === zoneId);
  const pay = PAYMENT_METHODS.find((m) => m.id === payment);
  if (!pkg || !zone || !pay) {
    return NextResponse.json({ error: "Pilihan paket/wilayah/pembayaran tidak dikenal." }, { status: 400 });
  }

  const bottles = pkg.bottles + (bump ? 1 : 0);
  const stock = getStock();
  if (stock < bottles) {
    return NextResponse.json(
      { error: "Maaf, stok batch ini baru saja habis. Hubungi CS untuk pre-order batch berikutnya." },
      { status: 409 }
    );
  }

  const subtotal = pkg.price + (bump ? ORDER_BUMP.price : 0);
  const freeShipping = pkg.freeShipping || subtotal >= FREE_SHIPPING_MIN;
  const shipping = freeShipping ? 0 : zone.cost;

  const order = insertOrder({
    id: generateOrderId(),
    name,
    phone,
    address,
    zone: zone.id,
    note,
    package_id: pkg.id,
    bump: bump ? 1 : 0,
    payment: pay.id,
    subtotal,
    shipping,
    total: subtotal + shipping,
  });

  setStock(stock - bottles);

  // TODO(payment-gateway): saat kunci Midtrans siap, buat Snap transaction di
  // sini dan kembalikan redirect_url — struktur respons sudah menampung itu.

  return NextResponse.json({ order }, { status: 201 });
}

// GET /api/orders — daftar pesanan untuk admin.
export async function GET(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  const expected = process.env.ADMIN_KEY ?? "nuralive-dev";
  if (key !== expected) {
    return NextResponse.json({ error: "Tidak diizinkan." }, { status: 401 });
  }
  return NextResponse.json({ orders: listOrders(), stock: getStock() });
}
