import { NextRequest, NextResponse } from "next/server";
import { findOrder } from "@/lib/db";

// GET /api/lacak?id=NL-xxxxxx-XXXX&phone=1234
// Verifikasi ringan: ID pesanan + 4 digit terakhir nomor WA.
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") ?? "";
  const phone = req.nextUrl.searchParams.get("phone") ?? "";

  if (!id || phone.replace(/\D/g, "").length < 4) {
    return NextResponse.json(
      { error: "Isi ID pesanan dan 4 digit terakhir nomor WhatsApp." },
      { status: 400 }
    );
  }

  const order = findOrder(id, phone.slice(-4));
  if (!order) {
    return NextResponse.json(
      { error: "Pesanan tidak ditemukan. Periksa kembali ID dan nomor WhatsApp kamu." },
      { status: 404 }
    );
  }

  // Hanya kembalikan data yang aman ditampilkan.
  return NextResponse.json({
    order: {
      id: order.id,
      created_at: order.created_at,
      status: order.status,
      package_id: order.package_id,
      total: order.total,
    },
  });
}
