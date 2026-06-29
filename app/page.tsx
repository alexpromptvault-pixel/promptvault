"use client";
import { useState, useMemo } from "react";
import { FREE_PROMPTS as PROMPTS } from "./prompts-index";
import type { Role } from "./prompts-index";

const ROLE_META: Record<Role, { label: string; emoji: string; color: string }> = {
  developer: { label: "Developer", emoji: "👨‍💻", color: "from-emerald-500 to-teal-600" },
  marketer: { label: "Marketer", emoji: "📈", color: "from-pink-500 to-rose-600" },
  founder: { label: "Founder", emoji: "🚀", color: "from-amber-500 to-orange-600" },
  writer: { label: "Writer", emoji: "✍️", color: "from-violet-500 to-purple-600" },
};

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<Role | "all">("all");
  const [showProOnly, setShowProOnly] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return PROMPTS.filter((p) => {
      if (filter !== "all" && p.role !== filter) return false;
      if (showProOnly) return false;
      return true;
    });
  }, [filter, showProOnly]);

  const currentPrompt = selected !== null ? filtered[selected] : null;

  const handleCopy = async (id: string, text: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) { await navigator.clipboard.writeText(text); }
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white">P</div>
            <div>
              <h1 className="text-lg font-semibold">PromptVault</h1>
              <p className="text-xs text-zinc-500">AI workflows that ship</p>
            </div>
          </div>
          <div className="text-xs text-zinc-500">
            <span className="text-zinc-300 font-medium">{PROMPTS.length}</span> prompts · by Alex Fisher
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Intro */}
        <section className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tested prompts for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">real work</span>.
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            Each prompt is production-tested and copy-paste ready. Browse by role, click any prompt, paste into ChatGPT or Claude. Free preview below — the full 77+ library is on PromptVault Pro for £25.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-full text-sm transition ${
              filter === "all" ? "bg-zinc-100 text-zinc-900" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            All
          </button>
          {(Object.keys(ROLE_META) as Role[]).map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-3 py-1.5 rounded-full text-sm transition flex items-center gap-1.5 ${
                filter === r ? "bg-zinc-100 text-zinc-900" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <span>{ROLE_META[r].emoji}</span> {ROLE_META[r].label}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
            <input
              type="checkbox"
              checked={showProOnly}
              onChange={(e) => setShowProOnly(e.target.checked)}
              className="rounded"
            />
            Pro only
          </label>
        </section>

        {/* List */}
        {!currentPrompt ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelected(idx)}
                className="text-left p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs text-white bg-gradient-to-r ${ROLE_META[p.role].color}`}>
                    <span>{ROLE_META[p.role].emoji}</span>
                    <span>{ROLE_META[p.role].label}</span>
                  </div>
                  {p.proOnly && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      PRO
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-zinc-100 group-hover:text-white">{p.title}</h3>
                <p className="text-sm text-zinc-400 mt-1">{p.description}</p>
              </button>
            ))}
          </div>
        ) : (
          <article className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-6">
            <button
              onClick={() => setSelected(null)}
              className="text-sm text-zinc-400 hover:text-zinc-200 mb-4 inline-flex items-center gap-1"
            >
              ← Back to library
            </button>
            <div className="flex items-start gap-2 mb-3">
              <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs text-white bg-gradient-to-r ${ROLE_META[currentPrompt.role].color}`}>
                {ROLE_META[currentPrompt.role].emoji} {ROLE_META[currentPrompt.role].label}
              </span>
              {currentPrompt.proOnly && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  PRO · included in full library
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold">{currentPrompt.title}</h2>
            <p className="text-zinc-400 mt-1">{currentPrompt.description}</p>
            <div className="mt-4 relative">
              <pre className="bg-zinc-950 border border-zinc-800 rounded-md p-4 text-sm whitespace-pre-wrap font-mono text-zinc-200 overflow-x-auto">
                {currentPrompt.prompt}
              </pre>
              <button
                onClick={() => handleCopy(currentPrompt.id, currentPrompt.prompt)}
                className="absolute top-2 right-2 px-3 py-1.5 text-xs rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
              >
                {copied === currentPrompt.id ? "Copied ✓" : "Copy"}
              </button>
            </div>
            {currentPrompt.proOnly && (
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <p className="text-sm">
                  This prompt is part of the <strong>full PromptVault library</strong> — 77+ production-tested prompts for £25.
                </p>
                <a
                  href="/upgrade"
                  className="mt-3 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90"
                >
                  Get the full library →
                </a>
              </div>
            )}
          </article>
        )}

        {/* CTA footer */}
        {!currentPrompt && (
          <section className="mt-12 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <h3 className="text-xl font-semibold">Want the full 77+ library?</h3>
            <p className="text-zinc-400 mt-1 text-sm">
              Get every prompt — including 40+ Pro prompts — plus the "build-your-own" system prompt, in one file.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="/upgrade"
                className="px-5 py-2.5 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90"
              >
                Get PromptVault · £25
              </a>
              <span className="text-xs text-zinc-500">One-time payment. Lifetime updates.</span>
            </div>
          </section>
        )}
      </div>

      <footer className="border-t border-zinc-800 mt-12 py-6 text-center text-xs text-zinc-500">
        Built by Alex Fisher · © 2026 PromptVault
      </footer>
    </main>
  );
}
