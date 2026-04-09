import { NextRequest, NextResponse } from "next/server";

const FYOIA_API_URL = "https://my.lostingness.site/ani.php";
const VISION_MODEL = "meta/llama-4-maverick-17b-128e-instruct";

export async function POST(req: NextRequest) {
  try {
    const { imageUrl, question, nowIso, timeZone } = await req.json();

    if (!imageUrl || typeof imageUrl !== "string" || !/^https?:\/\//.test(imageUrl)) {
      return NextResponse.json({ error: "Invalid imageUrl" }, { status: 400 });
    }

    const now = nowIso ? new Date(nowIso) : new Date();
    const tz = timeZone || "local";
    const system = `You are Fyoia AI. Current datetime: ${now.toISOString()}. Timezone: ${tz}.`;
    const prompt = typeof question === "string" && question.trim() ? question.trim() : "Describe this image in detail.";

    const res = await fetch(FYOIA_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: VISION_MODEL,
        temperature: 1,
        top_p: 1,
        max_tokens: 1024,
        stream: false,
        messages: [
          { role: "system", content: system },
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              { type: "image_url", image_url: { url: imageUrl } },
            ],
          },
        ],
      }),
      cache: "no-store",
    });

    const text = await res.text();
    let json: any = null;
    try { json = text ? JSON.parse(text) : null; } catch { /* ignore */ }

    if (!res.ok) {
      return NextResponse.json({ error: "Vision API error", body: json ?? text }, { status: res.status });
    }

    return NextResponse.json({ content: json?.choices?.[0]?.message?.content ?? "" });
  } catch (e) {
    console.error("Fyoia vision error:", e);
    return NextResponse.json({ error: "Failed to call vision model" }, { status: 500 });
  }
}
