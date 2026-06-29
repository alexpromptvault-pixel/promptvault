import Link from "next/link";

export const metadata = { title: "Thanks — PromptVault Pro" };

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="text-7xl mb-6">📬</div>
        <h1 className="text-4xl md:text-5xl font-black mb-6">Order received.</h1>
        <p className="text-xl text-slate-300 mb-8">
          Send £25 via PayPal to{" "}
          <span className="font-mono text-amber-300">alex.promptvault@gmail.com</span>,
          then reply to the email with a screenshot or transaction ID.
        </p>
        <p className="text-slate-400 mb-12">
          I'll send the Pro Pack within 1 hour of the payment clearing. Most orders ship in under 10 minutes.
        </p>
        <Link href="/" className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg transition">
          ← Back to PromptVault
        </Link>
      </div>
    </main>
  );
}
