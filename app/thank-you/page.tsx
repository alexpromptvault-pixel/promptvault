export const metadata = { title: "Thanks — PromptVault Pro Pack" };

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-4xl md:text-5xl font-black mb-4">You&apos;re in.</h1>
        <p className="text-xl text-slate-300 mb-6">
          Your PromptVault Pro Pack is ready.
        </p>
        <a
          href="https://zo.pub/blackbox/promptvault-pro"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg px-8 py-4 rounded-xl transition transform hover:scale-105 mb-8"
        >
          ↓ Download Pro Pack (70 Prompts)
        </a>
        <p className="text-slate-400 text-sm mb-8">
          You&apos;ll also receive a copy by email within a few minutes.
        </p>
        <p className="text-slate-500 text-xs">
          Link expires in 72 hours. Save it now.
        </p>
      </div>
    </main>
  );
}