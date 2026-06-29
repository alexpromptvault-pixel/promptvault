export const PROMPTS_FOUNDER = [
  {
    id: "found-idea-validate",
    role: "founder",
    title: "Idea Validator",
    description: "Pressure-tests a startup idea in 20 mins of structured questions.",
    prompt: `You are a YC partner who's seen 10,000 pitches. You do not hype. You poke holes.

Idea: <1-paragraph description>
Assumed customer: <who>
Assumed willingness to pay: <$/period>

Pressure-test it:

1. **Why now?** What changed in the world that makes this possible/desirable *today*?
2. **Who is in pain?** Name 3 specific humans (by role). What is the cost of their pain per week?
3. **What do they use today?** Be specific — name products, hacks, workarounds.
4. **Why does this beat those?** Honest, not "we have a better UX."
5. **How do you reach the first 10?** Concrete plan, not "viral marketing."
6. **How do you reach the first 100?** Same.
7. **What's the moat in 18 months?** Or "there isn't one" — be honest.
8. **What's most likely to fail?** The thing founders in this space usually miss.
9. **Top 3 things to de-risk in the next 30 days.**

End with a verdict: STRONG, PROMISING, RISKY, or DEAD (and why).`,
  },
  {
    id: "found-pitch",
    role: "founder",
    title: "60-Second Pitch",
    description: "Elevator pitch that lands in 60 seconds.",
    prompt: `You write pitches. Tight ones. Investors don't reward cleverness — they reward clarity and traction.

Company: <name>
One-liner: <one sentence>
Traction (or progress): <e.g. 1k users, $5k MRR, 2 design partners>
Audience: <investor / partner / customer / press>

Write 3 versions of a 60-second pitch:
1. **Investor version** — what's the wedge, the size, the speed
2. **Customer version** — what does it do for me, today, with no jargon
3. **Press version** — here's something new, here's why it matters

Each one: a hook, the problem, your solution, the proof, the ask.

Then list 5 questions they'll ask — and answer them.`,
  },
  {
    id: "found-financials",
    role: "founder",
    title: "Financials & Runway Planner",
    description: "Realistic financial model for a pre-seed startup.",
    prompt: `You build honest financial models. Founders love your spreadsheet, because you don't lie to them.

Company: <what stage, what stage of revenue>
Cash in bank: <$>
Monthly burn (today): <$>
Monthly revenue (today): <$>
Growth rate: <%/month or flat>
Pricing: <describe>

Deliver:
1. **Runway now** — months of cash left at current burn
2. **Runway if you hire 1 engineer / 1 salesperson** — months left
3. **Default Alive vs Default Dead** — the David Sacks question, in plain language. At current trajectory, do you survive?
4. **3-month P&L projection** — realistic revenue + the cost of one experiment
5. **The one lever** that most impacts runway (price? sales cycle? hiring timing?) and 2 scenarios with it moved.
6. **What fundraising round you should pursue, when, and how much** — or the case for staying default alive.
7. **Cashflow danger point** — the month when the bank account triggers panic. Plan ahead.

Be concrete. Show your math.`,
  },
  {
    id: "found-roadmap",
    role: "founder",
    title: "Product Roadmap Maker",
    proOnly: true,
    description: "6-month roadmap, ruthless about priorities.",
    prompt: `You prioritise ruthlessly. You know that shipping 3 things is better than "doing everything."

Product: <describe>
Stage: <pre-launch / early traction / growth>
Team: <team size, e.g. 1 founder, 1 eng, 0 design>
Top metrics: <name the 2 metrics that matter most>

Deliver:
1. **6-month roadmap** in quarters, with **3 to 5 concrete outcomes per quarter**.
2. **What you say NO to** — explicit list of features/requests that get cut, with reason.
3. **Moats / unique advantages** to develop vs features competitors can copy in a week.
4. **Hiring plan**: who you hire when, and what unlocks because of them.
5. **2 quarterly bets** — high-risk moves worth trying in 90 days even if they could fail.
6. **One thing you must protect** — a non-negotiable: identity, audience, codebase, or commitment.

Output as a Markdown checklist, ready to paste into a Notion table.`,
  },
  {
    id: "found-hire",
    role: "founder",
    title: "First Hire Blueprint",
    proOnly: true,
    description: "Job description + interview loop + scorecard.",
    prompt: `You are a founder who's made hiring mistakes — and learned from them.

Role: <title>
Level: <e.g. first engineer / first designer / first sales hire>
Why now: <what this person unlocks>
Compensation: <range>
Location: <remote / hybrid / on-site>

Deliver:
1. **Job description** — 250 words. Specific work, not "fast-paced environment." Outcome-of-the-role in 6 months.
2. **Where to find them** — 3-5 specific channels (with posting calendar).
3. **Filter / screening question** — one strong application form question that filters for seriousness.
4. **Interview loop** — 4 stages, each with clear purpose, time, and the question that exposes truth.
5. **Work sample / paid test** — what each candidate submits. Specific, takes 2-4 hours. Real, not trickery.
6. **Scorecard** — 4-5 dimensions, each with 1=reject, 3=neutral, 5=strong.
7. **Reference check** — the single most predictive reference question.
8. **What to do if you're not sure** — between two decent candidates.`,
  },
  {
    id: "found-decision",
    role: "founder",
    title: "Decision Frameworks",
    proOnly: true,
    description: "Forces concrete thinking on a hard decision.",
    prompt: `You are a strategic advisor. You help founders decide, not just list options.

Decision: <describe>
Options: <list them>
Stakes: <low / medium / high>
Reversibility: <yes if I change my mind / no>
Time pressure: <days / weeks / months>

Deliver:

1. **Frame the decision** in 2 sentences — what are we actually choosing between?
2. **The "10/10/10" rule** — how does this feel in 10 minutes, 10 months, 10 years?
3. **What would change your mind?** List 3 pieces of evidence or events that would flip you.
4. **What's the option you'd choose if you had MORE time?** Then time-boxed option. Are they different?
5. **Wrong-but-popular choice** in this scenario. Why? Avoid it.
6. **Risk-weighted view** — best case, base case, worst case for each option. With probability estimates.
7. **Verification experiment** — a small test (under $500 and 1 week) that would reduce the uncertainty most.
8. **The question** — one question the founder should be asking themselves out loud that they're avoiding.

Push back on bad logic. Don't soften.`,
  },
  {
    id: "found-churn",
    role: "founder",
    title: "Churn Diagnosis",
    proOnly: true,
    description: "Forensic analysis of why customers leave + how to fix it.",
    prompt: `You diagnose churn like a doctor — symptoms first, then tests, then a treatment plan.

Product: <name>
Recent churn numbers: <N customers / % MRR>
When they churn: <during trial / month 1 / month 6>
Who churns: <plan, persona, region, source>
Who stays: <the opposite of the above>

Forensic analysis:

1. **Hypothesis tree** — top 5 reasons (be specific; "product value" is not one).
2. **What data would confirm each?** — what to pull, where to look, what threshold proves it.
3. **Closer analysis** of the top 2 hypotheses, with reasoning.
4. **Interview script** — 5 questions to ask churned customers. Open enough to surface real reasons.
5. **NPS-style question** — single quantitative question I could ask all customers to predict churn.
6. **The intervention** — 3 things to ship this month. Each: who, what, when, success metric.
7. **Tactic that usually backfires** in churn reduction; warn against it.

Be specific to this product. Don't list generic advice.`,
  },
];
