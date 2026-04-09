"use client";

import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
            <User className="h-5 w-5 text-violet-400" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Guest Profile</h1>
            <p className="text-xs text-white/50">Fyoia AI — Free, no login required</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/50">Mode</span>
            <span className="text-green-400 font-medium">Free Access ✓</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/50">Login required</span>
            <span className="text-white/80">No</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/50">Chat history</span>
            <span className="text-white/80">Saved locally</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/50">Developer</span>
            <span className="text-violet-400">@lostingness</span>
          </div>
        </div>

        <p className="text-xs text-white/40 text-center">
          Fyoia AI is free and open — no account needed. Just chat! 🚀
        </p>
      </div>
    </div>
  );
}
