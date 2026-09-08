// Cloudflare Pages Function - relay browser conversion events to Meta's
// Conversions API server-side, using the account's access token (stored as
// an encrypted Pages secret, never shipped to the client). Deployed
// automatically alongside the static site on every push to main.
//
// Called from the same origin (nuralive.id/api/capi) - no CORS needed.
// The browser should also fire the matching `fbq('track', ...)` pixel call
// with the SAME event_id so Meta dedupes the two into one event.

const PIXEL_ID = "2623066174816231";
const GRAPH_API_VERSION = "v21.0";

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid JSON body" }, { status: 400 });
  }

  const { event_name, event_id, event_source_url, fbp, fbc, custom_data } = body || {};

  if (!event_name || !event_id) {
    return Response.json({ error: "event_name and event_id are required" }, { status: 400 });
  }

  const userData = {
    client_ip_address: request.headers.get("CF-Connecting-IP") || undefined,
    client_user_agent: request.headers.get("User-Agent") || undefined,
    fbp: fbp || undefined,
    fbc: fbc || undefined,
  };

  const payload = {
    data: [
      {
        event_name,
        event_id,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: event_source_url || request.headers.get("Referer") || undefined,
        user_data: userData,
        ...(custom_data ? { custom_data } : {}),
      },
    ],
  };

  const metaRes = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${env.META_CAPI_TOKEN}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  const metaJson = await metaRes.json().catch(() => null);

  if (!metaRes.ok) {
    return Response.json({ error: "meta_rejected", detail: metaJson }, { status: 502 });
  }

  return Response.json({ ok: true, meta: metaJson });
}
