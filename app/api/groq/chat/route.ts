import { NextRequest, NextResponse } from "next/server";

const FYOIA_API_URL = "https://my.lostingness.site/ani.php";

type ModelConfig = {
  id: string;
  temperature: number;
  top_p: number;
  max_tokens: number;
  thinking?: boolean;
};

const MODEL_MAP: Record<string, ModelConfig> = {
  "FYOIA-V1": {
    id: "openai/gpt-oss-120b",
    temperature: 1,
    top_p: 1,
    max_tokens: 8192,
  },
  "FYOIA-THINK": {
    id: "deepseek-ai/deepseek-r1-distil-qwen-32b",
    temperature: 0.6,
    top_p: 0.95,
    max_tokens: 4096,
    thinking: true,
  },
  "FYOIA-ULTRA": {
    id: "meta/llama-3.1-405b-instruct",
    temperature: 0.8,
    top_p: 0.95,
    max_tokens: 8192,
  },
  "FYOIA-CODE": {
    id: "qwen/qwen3-coder-480b-a35b-instruct",
    temperature: 0.6,
    top_p: 0.95,
    max_tokens: 8192,
  },
  "FYOIA-FAST": {
    id: "mistralai/mistral-small-4-119b-2603",
    temperature: 1,
    top_p: 1,
    max_tokens: 4096,
  },
};

export async function POST(req: NextRequest) {
  try {
    const { model: displayModel, messages, nowIso, timeZone } = await req.json();
    const cfg = MODEL_MAP[String(displayModel ?? "")];

    if (!cfg || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid model or messages" }, { status: 400 });
    }

    const now = nowIso ? new Date(nowIso) : new Date();
    const systemMessage = {
      role: "system",
      content:
        "You are Fyoia AI — an intelligent, helpful AI assistant.\n" +
        `Current datetime (ISO): ${now.toISOString()}\n` +
        `Timezone: ${typeof timeZone === "string" && timeZone ? timeZone : "local"}\n` +
        "If user asks day/date/time, answer using this realtime value.\n" +
        "If the user writes in Hinglish (Hindi + English mix), respond in the same Hinglish style unless asked otherwise.\n" +
        "Platform: Fyoia AI | Developer: @lostingness (instagram.com/lostingness)",
    };

    const normalized = messages.map((m: { role?: string; content?: unknown }) => ({
      role: m?.role === "assistant" ? "assistant" : "user",
      content: typeof m?.content === "string" ? String(m.content) : "",
    }));
    const toSend = normalized.filter((m: { content: string }) => m.content.length > 0);

    const body: Record<string, unknown> = {
      model: cfg.id,
      messages: [systemMessage, ...toSend],
      temperature: cfg.temperature,
      top_p: cfg.top_p,
      max_tokens: cfg.max_tokens,
      stream: false,
    };

    if (cfg.thinking) {
      body.chat_template_kwargs = { thinking: true };
    }

    const res = await fetch(FYOIA_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const text = await res.text();
    let json: any = null;
    try { json = text ? JSON.parse(text) : null; } catch { /* ignore */ }

    if (!res.ok) {
      const errMsg =
        typeof json?.error === "string" ? json.error :
        json?.error?.message ? String(json.error.message) :
        res.status === 429 ? "Too many requests. Try again in a moment." :
        `Fyoia API error (${res.status}). Try again.`;
      return NextResponse.json({ error: errMsg }, { status: res.status >= 500 ? 502 : res.status });
    }

    let content = String(json?.choices?.[0]?.message?.content ?? "").trim();
    let reasoning: string | undefined;

    if (cfg.thinking && content) {
      try {
        const thinkMatch =
          content.match(/\n*<think>([\s\S]*?)<\/think>\n*/i) ??
          content.match(/\n*<thinking>([\s\S]*?)<\/thinking>\n*/i);
        if (thinkMatch?.[1]) {
          reasoning = thinkMatch[1].trim();
          content = content
            .replace(/\n*<think>[\s\S]*?<\/think>\n*/gi, "")
            .replace(/\n*<thinking>[\s\S]*?<\/thinking>\n*/gi, "")
            .trim();
        } else {
          content = content
            .replace(/\n*<think>[\s\S]*?<\/think>\n*/gi, "")
            .replace(/\n*<thinking>[\s\S]*?<\/thinking>\n*/gi, "")
            .trim();
        }
      } catch { /* ignore */ }
    }

    return NextResponse.json(reasoning ? { content, reasoning } : { content });
  } catch (e) {
    console.error("Fyoia proxy error:", e);
    return NextResponse.json({ error: "Failed to call Fyoia API" }, { status: 500 });
  }
}
