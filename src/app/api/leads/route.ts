import { NextRequest, NextResponse } from "next/server";
import { insertLead } from "@/lib/db";

// POST /api/leads — simpan nomor WA untuk pengiriman e-book / nurture.
export async function POST(req: NextRequest) {
  let body: { phone?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body tidak valid." }, { status: 400 });
  }

  const phone = String(body.phone ?? "").replace(/\D/g, "");
  if (phone.length < 9 || phone.length > 15) {
    return NextResponse.json({ error: "Nomor tidak valid." }, { status: 400 });
  }

  insertLead(phone, String(body.source ?? "unknown").slice(0, 50));
  return NextResponse.json({ ok: true }, { status: 201 });
}
