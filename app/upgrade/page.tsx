// Updated checkout link – removed legacy &body param
import Link from "next/link";

export const metadata = { title: "PromptVault Pro — 77 Battle-Tested Workflows" };

export default function Upgrade() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-slate-400 hover:text-white text-sm">
          ← PromptVault
        </Link>

        <div className="mt-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          Pro Pack v1
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight tracking-tight">
          The 40+ pro prompts
          <br />
          <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            that close deals.
          </span>
        </h1>

        <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
          Tested in production. Used on real client work. Bought by founders
          doing £10k–£100k/month. Not LLM-written fluff. Builder-curated, evidence-backed.
        </p>

        <div className="mt-12 rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-8">
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-black">£25</span>
            <span className="text-slate-400 text-lg">one-time</span>
          </div>
          <p className="mt-2 text-slate-400 text-sm line-through">£40 launch price for first 100 buyers</p>
          <a
            href="https://buy.stripe.com/9B63cv585gg2e489sM9fW03"
            className="mt-6 block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg py-4 rounded-xl transition"
          >
            Buy PromptVault Pro — £25
          </a>
          <p className="mt-3 text-center text-xs text-slate-500">
            PayPal to alex.promptvault@gmail.com · Pack emailed within 1 hour
          </p>
        </div>

        <section className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold">What you get</h2>
          {[
            ["40+ pro prompts, real-money tested", "Each one used on a paying client project. No filler, no AI-fluff, no 'describe your morning routine' filler."],
            ["Pro-only workflows", "Sales-call extractor, contract-drafting prompt, invoice-chasing loop, compliance reviewer — workflows the free tier doesn't cover."],
            ["Copy-paste blocks", "Pre-filled context blocks so you don't re-write the system prompt each time. Drop in, ship."],
            ["Real receipts", "Every prompt includes which client it was used on, what they bought, and how long it took."],
            ["Free updates for life", "Add 10 prompts a month. Existing buyers get a one-click update email."],
          ].map(([title, body], i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-slate-400 mt-1">{body}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
          <h2 className="text-xl font-bold mb-4">If this doesn't ship you money back...</h2>
          <p className="text-slate-300 leading-relaxed">
            I'll refund every penny of the £25 if a single prompt doesn't save you at least 30 minutes
            in the first 7 days. Email alex.promptvault@gmail.com, money back, no questions.
          </p>
        </section>

        <section className="mt-16 text-center">
          <a
            href="https://buy.stripe.com/9B63cv585gg2e489sM9fW03"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg px-10 py-4 rounded-xl transition"
          >
            Get the Pro Pack — $24 (£19)
          </a>
        </section>
      </div>
    </main>
  );
}
