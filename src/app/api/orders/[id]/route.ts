import { NextRequest, NextResponse } from "next/server";
import { updateOrderStatus, ORDER_STATUSES } from "@/lib/db";

// PATCH /api/orders/[id] — update status pesanan (admin).
export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const key = req.headers.get("x-admin-key");
  const expected = process.env.ADMIN_KEY ?? "nuralive-dev";
  if (key !== expected) {
    return NextResponse.json({ error: "Tidak diizinkan." }, { status: 401 });
  }

  const { id } = await ctx.params;
  let body: { status?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body tidak valid." }, { status: 400 });
  }

  const status = String(body.status ?? "");
  if (!ORDER_STATUSES.includes(status as (typeof ORDER_STATUSES)[number])) {
    return NextResponse.json(
      { error: `Status harus salah satu dari: ${ORDER_STATUSES.join(", ")}` },
      { status: 400 }
    );
  }

  const order = updateOrderStatus(id, status);
  if (!order) {
    return NextResponse.json({ error: "Pesanan tidak ditemukan." }, { status: 404 });
  }
  return NextResponse.json({ order });
}
