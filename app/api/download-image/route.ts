import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url, filename } = (await req.json()) as { url?: string; filename?: string };
    if (!url || !filename) {
      return NextResponse.json({ error: "url and filename are required" }, { status: 400 });
    }

    if (url.startsWith("data:")) {
      const [header, base64Data] = url.split(",");
      if (!base64Data) {
        return NextResponse.json({ error: "Invalid data URL" }, { status: 400 });
      }
      const mimeMatch = header.match(/data:([^;]+)/);
      const mime = mimeMatch ? mimeMatch[1] : "image/png";
      const buffer = Buffer.from(base64Data, "base64");
      return new Response(buffer, {
        status: 200,
        headers: {
          "content-type": mime,
          "content-disposition": `attachment; filename="${filename}"`,
          "cache-control": "no-store",
        },
      });
    }

    const upstream = await fetch(url, { cache: "no-store" });
    if (!upstream.ok || !upstream.body) {
      return NextResponse.json({ error: "Failed to fetch image from provider" }, { status: 502 });
    }

    const contentType = upstream.headers.get("content-type") || "image/png";

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "content-type": contentType,
        "content-disposition": `attachment; filename="${filename}"`,
        "cache-control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Download failed" }, { status: 500 });
  }
}
