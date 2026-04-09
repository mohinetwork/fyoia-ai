import { NextRequest, NextResponse } from "next/server";

const CLAID_ENDPOINT = "https://api.claid.ai/v1/image/edit";

export async function POST(req: NextRequest) {
  try {
    const { imageUrl } = await req.json();
    if (!imageUrl || typeof imageUrl !== "string") {
      return NextResponse.json(
        { error: "Missing imageUrl" },
        { status: 400 },
      );
    }

    const apiKey = process.env.CLAID_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "CLAID_API_KEY is not configured on the server." },
        { status: 500 },
      );
    }

    const payload = {
      input: imageUrl,
      operations: {
        restorations: {
          upscale: "smart_enhance",
          polish: true,
        },
      },
      output: {
        format: {
          type: "jpeg",
          quality: 80,
          progressive: true,
        },
      },
    };

    const upstream = await fetch(CLAID_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await upstream.text();
    let json: unknown = null;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      // ignore
    }

    const parsed = json && typeof json === "object" ? json as Record<string, unknown> : null;

    if (!upstream.ok) {
      const errorMessage =
        (typeof parsed?.error_message === "string" && parsed.error_message) ||
        (typeof parsed?.error === "string" && parsed.error) ||
        "Failed to enhance image with Claid.";
      return NextResponse.json(
        { error: errorMessage, body: parsed ?? text },
        { status: upstream.status },
      );
    }

    const output =
      parsed &&
      typeof parsed === "object" &&
      parsed["data"] &&
      typeof parsed["data"] === "object" &&
      parsed["data"] !== null &&
      (parsed["data"] as Record<string, unknown>)["output"] &&
      typeof (parsed["data"] as Record<string, unknown>)["output"] === "object"
        ? (parsed["data"] as Record<string, unknown>)["output"] as Record<string, unknown>
        : null;

    const outputUrl =
      output && typeof output.tmp_url === "string"
        ? output.tmp_url
        : typeof output?.object_uri === "string"
          ? output.object_uri
          : typeof output?.object_key === "string"
            ? output.object_key
            : null;

    if (!outputUrl) {
      return NextResponse.json(
        { error: "Unexpected Claid response shape", body: parsed ?? text },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: outputUrl });
  } catch (err) {
    console.error("Claid enhance error:", err);
    return NextResponse.json(
      { error: "Unexpected error while enhancing image." },
      { status: 500 },
    );
  }
}

