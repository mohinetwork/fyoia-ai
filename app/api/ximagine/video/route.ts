import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 120;

const XIMAGINE_ENDPOINT =
  process.env.XIMAGINE_VIDEO_ENDPOINT ||
  "https://ximagine-2api-pro-cfwork.kines966176.workers.dev";
const XIMAGINE_API_KEY = process.env.XIMAGINE_VIDEO_API_KEY || "sk-9661";

function extractVideoUrl(content: string): string | null {
  const srcMatch = content.match(/src=["']?(https?:\/\/[^"'\s>]+\.mp4)[^"']*["']?/i);
  if (srcMatch) return srcMatch[1];
  const directMatch = content.match(/https?:\/\/[^\s"'<>\)]+\.mp4/i);
  if (directMatch) return directMatch[0];
  const proxyMatch = content.match(/url=(https?[^"'\s>]+\.mp4)/i);
  if (proxyMatch) return decodeURIComponent(proxyMatch[1]);
  return null;
}

async function generateVideo(prompt: string, referenceImageUrl?: string): Promise<string> {
  const contentPayload: Record<string, unknown> = {
    prompt,
    aspectRatio: "16:9",
    mode: "normal",
  };
  if (referenceImageUrl) contentPayload.imageUrl = referenceImageUrl;

  const res = await fetch(`${XIMAGINE_ENDPOINT}/v1/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${XIMAGINE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "grok-video-normal",
      messages: [{ role: "user", content: JSON.stringify(contentPayload) }],
      stream: false,
    }),
    cache: "no-store",
  });

  const text = await res.text();
  let fullContent = "";

  const lines = text.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data:")) continue;
    const jsonStr = trimmed.slice(5).trim();
    if (jsonStr === "[DONE]") continue;
    try {
      const parsed = JSON.parse(jsonStr);
      const delta = parsed?.choices?.[0]?.delta?.content;
      if (typeof delta === "string") fullContent += delta;
      const msg = parsed?.choices?.[0]?.message?.content;
      if (typeof msg === "string") fullContent += msg;
    } catch {
      fullContent += jsonStr;
    }
  }

  if (!fullContent) {
    try {
      const parsed = JSON.parse(text.trim());
      fullContent = parsed?.choices?.[0]?.message?.content || text;
    } catch {
      fullContent = text;
    }
  }

  const url = extractVideoUrl(fullContent);
  if (url) return url;
  throw new Error("No video URL found in response. Try again.");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
    if (!prompt) {
      return NextResponse.json({ error: "prompt is required" }, { status: 400 });
    }
    const referenceImageUrl =
      typeof body.referenceImageUrl === "string" &&
      body.referenceImageUrl.trim().startsWith("http")
        ? body.referenceImageUrl.trim()
        : undefined;

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        const send = (data: object) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        };

        try {
          send({ status: "generating", message: "Starting video generation..." });

          const keepAlive = setInterval(() => {
            controller.enqueue(encoder.encode(": keep-alive\n\n"));
          }, 5000);

          const videoUrl = await generateVideo(prompt, referenceImageUrl);
          clearInterval(keepAlive);

          send({ status: "done", url: videoUrl });
        } catch (e) {
          send({ status: "error", error: e instanceof Error ? e.message : "Video generation failed." });
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to generate video" },
      { status: 500 }
    );
  }
}
