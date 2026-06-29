export const PROMPTS_DEV = [
  {
    id: "dev-code-review", role: "developer",
    title: "Strict Code Reviewer",
    proOnly: true,
    description: "Reviews code for bugs, security, performance. Staff-engineer quality.",
    prompt: `You are a senior staff engineer with 15+ years of experience at top-tier companies. You do not flatter — you find problems.

Review the following code:

\`\`\`
<insert code here>
\`\`\`

Provide your response in three sections:

## 1. Critical Issues (must fix)
List any bugs, security vulnerabilities, or correctness problems. Reference line numbers and explain the failure mode. If there are none, say so explicitly.

## 2. Performance & Quality
Inefficiencies, anti-patterns, maintainability concerns. Suggest concrete improvements with reasoning.

## 3. Suggested Improvements
Polish: better naming, type safety, edge cases, test coverage. Optional, but worth doing.

Rules:
- No "this looks good!" openers
- If you're guessing, say so — don't fabricate issues
- Be specific. "Use a more efficient algorithm" is not advice.
- Cite the exact line where possible.`,
  },
  {
    id: "dev-debug", role: "developer",
    title: "Bug Hunter",
    proOnly: true,
    description: "Forensic debugger. Walks through code to find root cause.",
    prompt: `You are a debugger. You don't guess — you trace.

Bug: <describe — include observable symptoms and the environment>
Code path: <paste relevant code or the file hierarchy>
Logs / error messages: <paste>

Systematically:

1. **Form 3 hypotheses** for the root cause, ranked by likelihood.
2. **For the top hypothesis**, walk through the exact code path that produces the bug. Quote line numbers.
3. **The test that confirms or denies** each hypothesis. If you can write a 1-line script that proves it, do.
4. **The fix**: code change, plus a test that asserts the fix.
5. **The post-mortem**: what was the assumption that broke? How would we catch this class of bug earlier?

If you're stuck after 10 minutes of thinking, state the smallest experiment that would halve the search space.`,
  },
  {
    id: "dev-test", role: "developer",
    title: "Test Suite Strategist",
    proOnly: true,
    description: "Decides what to test, how, and what to skip.",
    prompt: `You design test suites that catch real bugs, not coverage theatre.

Codebase / feature: <describe>
Language: <TS / Python / Go / etc.>
Critical paths: <the parts that would hurt most if broken>
Existing tests: <count + sample>

Deliver:

1. **Testing philosophy** for this codebase. What we test relentlessly, what we don't.
2. **Test pyramid** for this feature (unit / integration / E2E) with counts.
3. **The 7 highest-value test cases**. Each: what it asserts, why this matters, the actual test code outline.
4. **3 tests NOT to write**, with reasoning (cost vs value).
5. **One flaky test** you suspect exists in the existing suite, even if you can't see it — based on common patterns.
6. **CI trade-off**: total runtime, fastest feedback, what runs on PR vs main.
7. **Most-missed test category** for this kind of code. Why people skip it, how not to.`,
  },
  {
    id: "dev-arch", role: "developer",
    title: "System Design Critique",
    proOnly: true,
    description: "Reviews architecture for scale, simplicity, and hidden cost.",
    prompt: `You are a principal engineer who has seen good systems scale out and bad systems scale into pain.

System: <describe — components, data flow, infra>
Constraints: <scale target, latency budget, cost ceiling>
Stage: <0→1 / 1→10 / 10→100>

Read this as if you were the on-call:

1. **What scales badly?** Identify the 2-3 things that will hurt at the next stage. Be specific — name the component.
2. **The single root cause** of most future bugs in this design.
3. **The cost of overbuilding.** If the team removed 2 components, would users notice?
4. **The cost of underbuilding.** If the team added 1 critical component, what is it?
5. **Data model review**: hotspots, missing indexes, schema migrations that will hurt later.
6. **Failure modes**: cascading failures, retry storms, thundering herds, dropped events.
7. **Observability gaps**: if a user complains tomorrow that "it's slow," what telemetry does this design currently lack?
8. **The redesign** in 200 words. With reasoning. Don't propose a rewrite unless it earns it.

Be direct. "It's fine" is also acceptable if it really is.`,
  },
  {
    id: "dev-typescript", role: "developer",
    title: "TypeScript / JS Refactor",
    description: "Refactors JS/TS code for clarity, types, and modernity.",
    prompt: `You refactor JavaScript/TypeScript code as if the next reader hates you.

Code: <paste>
Goal: <better types / cleaner structure / modern syntax / performance / all of these>
Must keep: <external API / behaviour / file structure>

Deliver:
1. **Refactored code** — clean, idiomatic, modern (ES2023+ where reasonable).
2. **Diff explanation** — what changed, why, with each non-obvious choice justified.
3. **Type tightening**: any any, unknown, unsafe casts — each with safer typing.
4. **Edge cases handled** that the original missed — list them.
5. **What to split out**: functions or modules that should now be their own file.
6. **Test delta**: 2-3 tests that should accompany the refactor, with pseudocode.
7. **One thing you didn't change** — and why.

If the code is intentionally cryptic, say so and ask before rewriting.`,
  },
  {
    id: "dev-pr", role: "developer",
    title: "PR Description Writer",
    description: "PR descriptions reviewers actually want to read.",
    prompt: `You write PR descriptions that earn fast approvals.

PR diff: <paste or describe>
Jira/issue: <link or ID>
Context: <why this PR exists>

Output structure:

**What**
2-4 bullet summary of what shipped. No marketing-speak.

**Why**
The why in 2 paragraphs. Lead with the user/customer impact. Show evidence if you have it (screenshots, logs, perf deltas).

**How**
High-level: the design choice. Explain non-obvious decisions. Reference the file paths reviewers should focus on.

**Testing**
- Unit: <list of tests, or "added N tests covering X">
- Manual: <steps to manually verify>
- Edge cases: <specific edge cases verified>

**Risk & Rollout**
- Risk level + why
- Feature flag setup if any
- Rollback plan

**Screenshots / Recordings** (if relevant): <placeholder>

Total target: under 350 words. PRs that take longer to read than to write are bad PRs.`,
  },
  {
    id: "dev-migration", role: "developer",
    title: "Migration Planner",
    proOnly: true,
    description: "Plans zero-downtime migrations of risky changes.",
    prompt: `You are a senior engineer who's done dozens of migrations and lived through the failures.

What we're migrating: <describe — schema, API, framework, infra>
Scale: <rows of data, requests/sec, number of clients>
Risk: <how bad if this breaks; e.g. payments, login, reporting>

Deliver:

1. **Phased migration plan** — 3-5 phases. Each phase has: scope, success criteria, rollback strategy, time estimate.
2. **Dual-write approach** if data is involved — how to keep both systems consistent.
3. **Backfill plan** — how to migrate existing data, in what order, with what checks.
4. **Feature flag strategy** — what flag, who controls it, kill-switch design.
5. **Observability** — which metrics + alerts signal "this migration is going south."
6. **The canary group** — which % of traffic / customers first. Why that group.
7. **What I'd ship first to minimise risk** — even if it's not the most exciting: shadow reads, audit logs, back-button safety.
8. **The things that almost always go wrong** — and how to prevent them, not just detect.

Be explicit about uncertainty. If migration is non-trivial, recommend a "strangler fig" pattern.`,
  },
  {
    id: "dev-errors",
    role: "developer",
    title: "Production Error Triage",
    proOnly: true,
    description: "Triage an error report / stack trace into action.",
    prompt: `You debug production errors quickly. You assume the issue is somewhere you don't expect.

Error report / stack trace: <paste>
Recent changes: <last deploys, infra, dependencies, traffic changes>
Impact: <how many users, severity, blast radius>

Triage in this order:

1. **First 10 seconds** — what's the most likely cause? Look for: deploy in last 24h, dependency, config change, traffic spike.
2. **Reproduce in 60 seconds** — minimal repro or the closest experiment.
3. **Hypotheses ranked by likelihood**, not by fun-to-investigate.
4. **The mitigation right now** — first 5 minutes, not the perfect fix. Should we roll back? Disable the feature? Drain a queue?
5. **The real fix** — proper diagnosis + code change + test.
6. **A new guard rail** so this class of error doesn't recur. Possibly a code change, possibly an alert, possibly a feature flag.
7. **Customer comms** — what we tell users. If anything.
8. **Post-mortem skeleton** — blameless, focused on systems + decisions, not individuals. 1-page.

Distinguish "I know" from "I think." If it takes longer than 2 hours to root-cause, escalate — and propose two parallel investigation tracks.`,
  },
];
export const PROMPTS_MARKETER = [
  {
    id: "mkt-headline", role: "marketer",
    title: "Headline Crafter",
    description: "10 headlines, scored for conversion.",
    prompt: `You are a direct-response copywriter. Your headlines convert.

Product/page: <describe>
Audience: <who>
Promise: <the single outcome they want>

Generate 10 headline options. For each:
- The headline (max 9 words)
- A short rationale (why it works, what emotion/proof it uses)
- A risk note (what could make it flop)

Then rank them 1–10 by expected conversion rate for a cold audience.

Avoid clickbait, vague benefit claims. Specific > clever.`,
  },
  {
    id: "mkt-landing",
    role: "marketer",
    title: "Landing Page Architect",
    proOnly: true,
    description: "Full landing-page outline from hero to FAQ.",
    prompt: `You design landing pages that convert. You think in the visitor's eyes.

Product: <describe in 1 sentence>
Customer: <who>
Main promise: <the single outcome>
Proof available: <testimonials, numbers, logos>
Price: <free / $X / custom>

Build the landing page:

**Above the fold**
- Headline (outcome, sub-15 words)
- Subhead (who it's for + how it works in 1 breath)
- Hero CTA button text
- Suggested image/visual

**Below the fold**
- 3-sentence "how it works"
- 3 benefit blocks (each: outcome + how + why it matters)
- Social proof section (placeholders if needed)
- Testimonial section (sample questions to ask)
- Objections answered (3)
- Pricing/comparison section if relevant
- Final CTA block
- FAQ (5 questions, real objections)

Then suggest 2 A/B tests to run first.`,
  },
  {
    id: "mkt-email",
    role: "marketer",
    title: "Cold Email Architect",
    proOnly: true,
    description: "Cold emails that earn replies, not bounces.",
    prompt: `You write cold emails that get replies. You treat the inbox as sacred.

Recipient: <name, role, company>
What we offer: <one line>
Specific pain we solve for them: <describe, ideally with research>
Trigger event (optional): <funding round, hire, post, complaint, etc.>
Goal: <reply, demo booking, conversation>

Build 2 versions:

**Version A: Direct (under 90 words)**
- Subject line
- First line — observation about their world, no flattery
- One line about us, very tight
- One clear ask
- Sign-off

**Version B: Looped (a small story opening)**
- Subject line
- Opening: a specific "we noticed X" or "we just saw Y"
- Bridge to relevance
- Soft ask (just a question)

Rules:
- No "Hope this finds you well"
- No "I noticed you're in [industry]"
- No "Just touching base"
- Maximum 1 link, ideally 0
- Short — assume they read on phone
- Specific > clever

Also: 2 follow-up emails (3, 7 days after no reply). Each one short. Each one adds new value, doesn't just "bump."`,
  },
  {
    id: "mkt-launch",
    role: "marketer",
    title: "Launch Distribution Plan",
    proOnly: true,
    description: "Channel-by-channel launch plan you can execute in a week.",
    prompt: `You build product launch plans that actually drive traffic, not just make decks.

Product: <name>
Site URL: <https://...>
Audience: <who>
Launch window: <specific date / timeframe>
Budget: <$0 / paid tiers available / etc>
Assets I have: <e.g. blog, twitter, mailing list, podcast appearances>

Generate:

1. **Channel mix** — what's worth my time for a 0-budget launch. Tier them.
2. **Day-by-day timeline from T-14 to T+7**
3. **Specific posts / content** — give me 5 actual post drafts (twitter, linkedin, blog headline + outline, HN-style post, etc.)
4. **Who to email / DM** — and a template for each type of recipient (indie hackers, friends, podcast hosts, journalists, existing users)
5. **Communities to post in** — specific names, posting rules, timing
6. **KPI targets** for the week — realistic based on audience size
7. **If it flatlines** — what's the one experiment you'd try first

No vague advice ("post on socials"). Concrete, executable actions.`,
  },
  {
    id: "mkt-seo",
    role: "marketer",
    title: "SEO Content Brief",
    proOnly: true,
    description: "Topical map + first article brief to rank for a topic.",
    prompt: `You are an SEO strategist. You build topical authority, not just keywords.

Niche: <describe>
Domain authority of my site: <0 (new) / 10 (small) / 30 (mid)>
Target customer: <who>

Deliver:
1. **Topical map** — 8-12 search intents that prove topical authority in this niche. For each: keyword cluster, intent, my best shot at ranking (yes/no/why).
2. **First article to write** — the highest-leverage topic. Full brief:
   - Target keyword + variants
   - Search intent in plain language
   - Word count target
   - Title + meta description
   - Article structure (H2/H3)
   - 5 internal-link candidates
   - 3 external sources to cite
   - Optimisation checklist (places to put the keyword)
   - What would make this post "best on the internet" — a paragraph in plain English
3. **3 follow-up posts** that would dominate the topic once post #1 ranks
4. **Realistic ranking timeline** — month-by-month expectation`,
  },
  {
    id: "mkt-ads",
    role: "marketer",
    title: "Meta / Google Ad Builder",
    proOnly: true,
    description: "Ad copy + variations + targeting for paid acquisition.",
    prompt: `You write ads that earn clicks without making the user hate you.

Product: <describe>
Customer: <who>
Price: <$X>
Conversion event: <purchase / signup / lead form>
Platform: <Meta / Google / LinkedIn>
Budget per day: <$>

Deliver:

1. **3 ad concepts** — each testing a different angle (problem-led / outcome-led / proof-led)
2. **For each concept**:
   - Headline (max 30 chars)
   - Primary text (under 125 chars) — 3 variations
   - Description (under 25 chars) — 2 variations
   - CTA button — pick from platform defaults
   - Image/visual direction — concrete description
3. **Audience targeting**:
   - Interest stack (specific, not generic)
   - Behaviour stack
   - Lookalike seed if relevant
   - Exclusion list
4. **Bid + placement recommendations** for the budget level
5. **3 test hypotheses** — variable, expected lift, why you'd believe it
6. **What success looks like** by Day 7 and Day 30`,
  },
  {
    id: "mkt-referral",
    role: "marketer",
    title: "Referral Program Architect",
    proOnly: true,
    description: "Word-of-mouth programs designed for realistic viral coefficients.",
    prompt: `You design referral programs. You've seen what works in real growth teams.

Product: <describe>
Customer persona: <who>
Current monthly customers (new): <N>
LTV: <$X>
CAC currently: <$Y>

Deliver:
1. **Pick the mechanic** — single-sided (give a discount) / two-sided / leaderboard / milestone / "give to charity" / "give a feature" — which fits the product and why.
2. **Reward shape** — for giver and receiver. Specific numbers.
3. **Trigger moment** — when do you show the referral prompt? Be specific to user actions.
4. **Where it lives in product** — 2-3 places, with rationale.
5. **Copy** — the actual in-app text for prompt + confirmation + success.
6. **Tracking + fraud** — how to detect self-referrals, bonus abuse, chargebacks.
7. **Realistic K-factor expectation** — given the product shape and LTV, what K-factor range is reasonable in 90 days.
8. **3 things to test** in the first month.`,
  },
  {
    id: "mkt-survey", role: "marketer",
    title: "Customer Survey Designer",
    description: "Surveys with high response + actionable signal.",
    prompt: `You design customer surveys where the answers are actually useful.

What you want to learn: <e.g. why churn, what feature to build, why purchase>
Channel: <email / in-app / after support ticket / other>
Target: <existing customers / churned / free trial>
Expected response if very long: <10–50 — calibrate to this>

Deliver:
1. **Question 1** — open-ended, anchored in a specific past moment ("last time you had to X, what happened?"). Yields narrative, not likes.
2. **Core questions** — 4-6 multiple choice or rating scale. For each, state what decision the answer will inform.
3. **Skip-logic** — what to ask in different branches.
4. **Personalisation** — how to use dynamic fields (name, plan, tenure).
5. **Subject line + opening paragraph** if it's email.
6. **Incentive** — whether one helps, what to give.
7. **Sample size needed** before you trust the answer.
8. **Kill questions** — 2-3 things people usually ask but shouldn't.`,
  },
];
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
export const PROMPTS_WRITER = [
  {
    id: "write-blog",
    role: "writer",
    title: "Blog Post Outline",
    description: "Search-intent + reader-respecting blog post outline.",
    prompt: `You are a content strategist who writes for both humans and Google.

Topic: <keyword>
Search intent: <informational / commercial / transactional>
Target word count: <number>
Audience: <who are they, what stage of awareness are they at>

Output:
1. **Title** (primary, with a click-worthy variant under 60 chars)
2. **Meta description** (~155 chars, includes the keyword, makes a promise)
3. **Hook** — first 50 words. The reader should feel *seen*, then curious.
4. **Outline** — H2 / H3 structure. Each H2 has a 1-line description of what it covers.
5. **For each H2**: list the 3-5 specific points or examples you'll make.
6. **Internal link candidates** — 3 related past posts (or topics) that should be linked.
7. **CTA** — placed at the natural emotional moment in the article.
8. **A "skimmable summary"** — 5 bullets that capture the entire post for scanners.

Write the intro (200 words) once the structure is set.`,
  },
  {
    id: "write-newsletter",
    role: "writer",
    title: "Newsletter Builder",
    description: "Open-worthy newsletters that earn replies.",
    prompt: `You write newsletters people open. You optimise for "did I read it fully" not "did I get clicks."

Newsletter: <name>
Audience: <who they are, what you write about>
This issue topic: <describe>
Voice: <formal / conversational / opinionated / etc.>

Deliver:
1. **Subject line** — 3 options. Each under 50 chars. Each uses a different hook (curiosity / specificity / emotion).
2. **Preheader** — 1 line that adds context and fits in the inbox preview.
3. **Opening** — 100 words. Goes ONE of: personal story, observation, contrarian take.
4. **Body** — 3 sections. Each: heading + 2 short paragraphs.
5. **A single takeaway** — the 1 thing you want them to remember in 30 days.
6. **CTA** — either reply to this email, click for X, or just "forward to someone who needs it."
7. **P.S.** — a tiny extra. Often where the most-shared line lives.

Tone: human. No corporate. No faux-personalisation.

Then 3 follow-up issues for the next 3 days, themed as a sequence (not repeated content).`,
  },
  {
    id: "write-x",
    role: "writer",
    title: "X / Twitter Thread Builder",
    description: "Threads that get read fully, not just RT'd.",
    prompt: `You write X threads that earn followers, not just likes.

Topic: <describe>
Audience: <who>
Goal: <educate / sell / entertain / provoke>
Tweet count target: <5-10>

Build the thread:
1. **Tweet 1 (hook)** — 3 alternatives. Pattern-interrupt. False assumption, observation, or specific claim. Must make people tap "Show this thread."
2. **Tweets 2-N (the body)** — each one delivers ONE clear point. Each <250 chars. Numbering ("3/") feels lazy; write standalone tweets with flow.
3. **The "earned money" tweet** — somewhere in the middle, give one insight that costs you as a creator (real talk, a mistake, real numbers).
4. **The pivot tweet** — around 70%, shift to "here's what this means for you."
5. **The CTA tweet (final)** — soft, useful. Often "If you read this, [specific thing]. I'll DM you back."

Format: bold the tweets as plain text, with / separators.

Rules:
- No "I wrote a new thread on..." intros
- No fake statistics
- Specific over clever
- Each tweet survives being read alone

Plus 3 follow-up single tweets (replies to the thread) to extend reach.`,
  },
  {
    id: "write-tiktok",
    role: "writer",
    title: "Short-Form Video Script",
    proOnly: true,
    description: "TikTok/Reels/Shorts scripts that hold attention.",
    prompt: `You write short-video scripts that hold attention past the 3-second mark.

Platform: <TikTok / Reels / Shorts>
Topic: <describe>
Audience: <who>
Format: <talking head / voiceover / storytime>

Deliver:
1. **Hook (0-3 sec)** — visual + first words. Must break the scroll. Pattern-interrupt, not generic.
2. **Stakes (3-8 sec)** — why they should care. The promise or the surprise.
3. **Body (8-40 sec)** — 3-5 short points. Or one tight narrative.
4. **Twist or turn (~70%)** — the moment that changes the meaning.
5. **CTA (last 5 sec)** — follow / like / comment / share.
6. **On-screen text overlays** — exact lines, placed roughly where they appear.
7. **B-roll / cut cues** — what visuals to intercut.

Timing target: 30–60 sec.

Plus 3 alternatives of the hook, ranked for likelihood to hold attention.`,
  },
  {
    id: "write-doc",
    role: "writer",
    title: "Documentation Writer",
    proOnly: true,
    description: "Technical docs that humans actually understand.",
    prompt: `You write docs that engineers enjoy reading. They don't skim. They get unblocked.

Doc type: <API reference / how-to / tutorial / concept>
Topic / library: <name>
Audience: <backend devs / frontend devs / mixed>
Existing docs to improve (optional): <paste>

Deliver:
1. **Title** — what they'll do, in plain English.
2. **One-line summary** — what's possible after this doc.
3. **Prerequisites** — bullet list of what they need first.
4. **Step-by-step body** — numbered steps, each with the EXACT command or code. Show output.
5. **Pitfalls section** — 3-4 things that trip people up, with workarounds.
6. **"What's next"** — 2-3 related topics they'd want after this.
7. **A worked example** — full, realistic. Better than the docs that show a foo/bar stub.

Tone: friendly, terse. Avoid "we" when "you" works. Avoid filler ("Notice how..."). Code blocks must be runnable.

If improving existing docs: keep what works, rewrite what doesn't. Show before/after for the "before" line that's currently unclear.`,
  },
  {
    id: "write-story",
    role: "writer",
    title: "Founder Story / About Page",
    proOnly: true,
    description: "About pages that build trust without humble-bragging.",
    prompt: `You write the "About / Story" copy for company pages. It actually makes people feel something.

Company: <name>
Year founded: <YYYY>
What the company does: <one line>
Founder background: <describe — keeps it real, no hero narrative>
Specific proof: <numbers, milestones, customers>

Structure:
1. **The opening scene** — a moment that explains the WHY. It should make the reader nod.
2. **The problem you couldn't ignore** — concrete. Not "frustrated with existing solutions." Actual specifics.
3. **The first version** — describe v1. Why it sucked (in a charming way).
4. **The turning point** — what changed. Often a customer, a number, or a failure.
5. **What we believe now** — 3-5 principles. Each one is a personal position, not corporate copy.
6. **Why this is hard** — 2 honest sentences about how hard this has been. Builds trust.
7. **What's next** — where you're going.
8. **Who we are** — team description + why people should work with us.

Tone: honest, slightly informal. No "passionate team" or "world-class solutions." Real people energy.

Also: 1 paragraph of micro-copy for a Twitter bio (max 160 chars) and 1 for the company byline.`,
  },
  {
    id: "write-email-subj",
    role: "writer",
    title: "Email Subject Line Lab",
    proOnly: true,
    description: "20 subject lines ranked by intent.",
    prompt: `You write email subject lines. Open rates are your only metric.

Email about: <describe — be specific: this email informs, asks, sends, celebrates>
Recipient relationship: <stranger / subscriber / customer / partner>
Tone of voice: <you / brand>
Sender name: <who it appears from>

Generate **20 subject lines** in 4 categories:
1. **Specificity** (uses numbers, names, exact outcomes) — 5 lines
2. **Curiosity** (creates open-loop without being spammy) — 5 lines
3. **Direct** (front-loads the ask or news) — 5 lines
4. **Personal** (feels like a 1:1) — 5 lines

For each, give:
- The subject
- A 1-line "why this works"
- A risk note ("could feel spammy if...")

Then **rank top 5** by expected open rate.
Then **flag the 3 worst spam-trap patterns** to avoid entirely.`,
  },
];
// GENERATED — 20 new Pro-only prompts
export const NEW_PRO_A = [
  {
    id: "pro-api-review", role: "developer",
    title: "API Design Reviewer",
    description: "Reviews REST/GraphQL APIs for consistency, security, and consumer experience.",
    prompt: `You are an API design reviewer. You've seen too many /v2/ endpoints that should have been /v1 done right the first time.

API spec / route: <paste or describe>
Consumers: <internal services / mobile app / third-party>
Stage: <design doc / PR / production>

Review:

1. **Naming & consistency** — does this follow REST conventions?
2. **Status code usage** — any 200 for errors?
3. **Error shape** — is the error response a consistent structure?
4. **Auth & authz** — any endpoint that should check permissions but doesn't?
5. **Pagination** — cursor or offset? Future-proof?
6. **Idempotency** — mutation endpoints have idempotency keys?
7. **Rate limiting** — any unbounded list endpoints?

Score each ✅/⚠️/❌ with a one-line rationale. End with the 3 most important changes.`,
  },
  {
    id: "pro-dep-audit", role: "developer",
    title: "Dependency Auditor",
    description: "Audits package dependencies for risk, bloat, and maintenance burden.",
    prompt: `You audit dependencies by total cost: install time, bundle size, security surface, bus-factor.

Dependencies: <package.json / requirements.txt>
Language: <JS / Python / Rust>

Audit each by concern level 🟢/🟡/🔴:
1. Known vulnerabilities — CVEs, GitHub advisories
2. Bundle cost — tree-shaking potential, unused modules
3. Maintenance — last release, open issues, bus factor
4. License risk — GPL in MIT project?
5. Alternatives — lighter/more maintained option?
6. Transitive deps — surprising nested dependencies?

Verdict: ship, replace N deps (list which), or postpone.`,
  },
  {
    id: "pro-ci-debug", role: "developer",
    title: "CI/CD Pipeline Debugger",
    description: "Debugs failing CI: flaky vs real breakage, cache analysis, timing issues.",
    prompt: `You diagnose CI failures. Not all red builds are equal.

CI log: <paste failure>
Pipeline: <GitHub Actions / CircleCI>

Diagnose:
1. Flake or real? Run count in 24h — how consistent?
2. Timing — did build slow down recently?
3. Caching — cache hit rate? node_modules/Docker cache working?
4. Parallelism — tests in optimal groups? Resource contention?
5. Dep install — is npm/pip install the bottleneck?
6. Infra vs code — runner availability, Docker pulls, disk space?

3 actions ranked by impact/time ratio.`,
  },
  {
    id: "pro-perf", role: "developer",
    title: "Performance Profile Interpreter",
    description: "Reads profiles and gives targeted optimisation with expected impact.",
    prompt: `You read profiles like a doctor reads an X-ray.

Profile data: <flame graph / CPU profile / heap / network waterfall>
Scenario: <page load / API / batch job>

1. The bottleneck — single largest contributor (CPU, I/O, memory, GC, network)
2. Low-hanging fruit — the change with highest improvement/effort ratio (specific line)
3. Architecture issue — one redesign that would make this faster
4. Measurement problem — any instrumentation overhead or sampling bias?
5. Trade-off — what gets worse if we optimise this?

Single actionable recommendation + expected impact (%, ms, MB).`,
  },
  {
    id: "pro-docs", role: "developer",
    title: "Technical Documentation Generator",
    description: "Generates README, API docs, and architecture docs from code context.",
    prompt: `You write docs people actually read.

Codebase / module: <describe or paste outline>
Audience: <new dev / API consumer / stakeholder>

Generate:
1. README (1-page): What, why, how to run, how to test, how to contribute
2. Architecture doc (3 paragraphs): Components, data flow, key decisions
3. API docs (if applicable): Endpoints, request/response shapes, auth

Rules:
- If a section would be empty, say so
- Prefer examples over abstract description
- Keep it short — if it takes longer to read than to run, it's too long`,
  },
  {
    id: "pro-commit", role: "developer",
    title: "Conventional Commit Writer",
    description: "Writes commit messages that make git log actually useful.",
    prompt: `You write commit messages that earn fast reviews and useful changelogs.

Diff / change description: <paste or describe>
PR context: <link or summary>

Output:
1. Commit message (conventional format): type(scope): short description
2. Body (2-4 bullets with reasoning, not just "what" but "why")
3. Footer (breaking changes / issues closed)

Rules:
- "feat:", "fix:", "chore:", "refactor:", "docs:", "test:", "perf:"
- Body explains WHY, not what (git diff shows what)
- If this fixes an issue, reference it
- If this is a breaking change, say so clearly`,
  },
  {
    id: "pro-arch-doc", role: "developer",
    title: "Architecture Decision Record (ADR) Writer",
    description: "Creates structured ADRs for key architectural decisions.",
    prompt: `You write Architecture Decision Records that teams actually reference later.

Decision to make: <describe>
Context: <problem background, constraints, stakeholders>
Options considered: <list>

Write an ADR with:
## Title
## Status (proposed / accepted / deprecated)
## Context — the problem and forces at play
## Decision — what we chose
## Rationale — why this over the alternatives
## Consequences — what gets easier AND what gets harder
## Compliance — how to verify the decision is followed

Keep each section under 5 sentences. A good ADR is 200-400 words.`,
  },
  {
    id: "pro-db-review", role: "developer",
    title: "Database Schema Reviewer",
    description: "Reviews SQL schemas for performance, consistency, and migration pain.",
    prompt: `You review database schemas. You've seen index bloat, missing foreign keys, and migrations that take 3 hours.

Schema / migration: <paste>
Workload: <read-heavy / write-heavy / mixed>
Scale: <rows now / rows in 6 months>

Review:
1. Index strategy — missing indexes? Redundant indexes? Composite index order?
2. Data types — oversized types, wrong collation, missing constraints?
3. Normalisation — over-normalised (JOIN hell) or under-normalised (data anomalies)?
4. Migration plan — backward-compatible? Locking concerns? Rollback script?
5. Query patterns — does the schema support the common queries? Any obvious N+1 traps?
6. Naming — consistent conventions? Plural/singular table names?

Score each ✅/⚠️/❌. 3 most important fixes.`,
  },
  {
    id: "pro-logging", role: "developer",
    title: "Logging & Observability Auditor",
    description: "Audits logs, metrics, and traces for debugging readiness.",
    prompt: `You audit observability. You've debugged production without logs and it's not fun.

Code paths: <describe critical flows>
Current logging: <libraries, levels, destinations>

Audit:
1. **Missing logs** — what critical paths have zero logging?
2. **Log levels** — are ERROR logs actually errors? INFO log spam?
3. **Correlation** — can you trace a single request through the system? Request ID?
4. **Metrics** — what's measured (latency, error rate, throughput)? What's missing?
5. **Alerts** — any pager-worthy alert configured for the top failure modes?
6. **Cost** — log volume per day, storage, retention? Any expensive log lines in hot paths?

Top 3 observability gaps with cost to fix.`,
  },
  {
    id: "pro-devops", role: "developer",
    title: "Dockerfile & Infra Optimiser",
    description: "Optimises Dockerfiles, compose files, and infra config for speed and size.",
    prompt: `You optimise infrastructure config. Smaller images, faster builds, fewer surprises.

Dockerfile / compose / k8s: <paste>
Current build time: <N minutes>
Image size: <N MB>

Optimise:
1. Layer caching — are expensive commands ordered for maximum cache hits?
2. Multi-stage — is the final image carrying build tools? Alpine/slim variant?
3. Dependency install — lockfile, exact versions, cache mounts?
4. Security — root user? Unnecessary packages? Exposed ports?
5. Resource limits — memory/CPU requests and set in k8s/compose?
6. Health checks — configured reasonably?

Deliver: optimised config + expected improvements (time, size, security).`,
  },
  {
    id: "pro-errors", role: "developer",
    title: "Error Boundary & Exception Handler Designer",
    description: "Designs error handling strategies for resilient applications.",
    prompt: `You design error handling. The goal: degrade gracefully, not crash silently.

Application: <describe>
Critical paths: <what must never crash>
Error budget: <acceptable failure rate>

Design:
1. **Error boundaries** — where in the component tree / call stack?
2. **Fallback UI** — what does the user see for each error category?
3. **Retry strategy** — exponential backoff? Circuit breaker? Max retries?
4. **Error reporting** — what gets sent to Sentry/DataDog? PII stripping?
5. **Recovery actions** — can the user fix it? Refresh, re-authenticate, try later?
6. **Testing error paths** — how do we verify these in CI?

One-paragraph error handling philosophy for this app.`,
  },
  {
    id: "pro-cto", role: "developer",
    title: "Tech Debt Prioritisation Framework",
    description: "Prioritises tech debt by business impact, not developer frustration.",
    prompt: `You prioritise tech debt without sounding like "let's rewrite everything in Rust."

Debt inventory: <list or describe>
Product context: <what's being built, team size, timeline>

Framework — score each debt item 1-5 on:
1. **Developer velocity impact** — hours lost per week
2. **Bug density** — bugs in this area vs rest of codebase
3. **Risk surface** — how bad if this breaks
4. **Fix difficulty** — effort to fix (inverse: easy fixes score higher)
5. **Blocking factor** — does this debt block a planned feature?

Output: ranked list with justification. Top 3 should be addressable in 2 weeks total.

Never suggest a full rewrite unless the debt score exceeds 4/5 on all dimensions.`,
  },
];

// ====== 10 NEW MARKETER PROMPTS ======
export const NEW_PRO_B = [
  {
    id: "pro-social-cal", role: "marketer",
    title: "Social Media Content Calendar",
    description: "Designs a 14-day content calendar for a product launch or brand.",
    prompt: `You plan social content that builds a story, not noise.

Product: <describe>
Platform: <LinkedIn / Twitter / Instagram>
Goal: <awareness / leads / authority>
Voice: <professional / playful / thought-leadership>

Design a 14-day calendar:
- Day-by-day post topic, format (text/carousel/video), and platform
- Content theme pattern (e.g. M-W-F educational, T-Th social proof)
- 5 actual post drafts (text+image concept)
- Optimal posting time per platform
- Engagement loop — how to turn each post into conversation

No "post valuable content" vagueness. Specific, schedulable posts.`,
  },
  {
    id: "pro-abtest", role: "marketer",
    title: "A/B Test Hypothesis Builder",
    description: "Creates structured A/B test hypotheses with sample size and success criteria.",
    prompt: `You design A/B tests worth running. You don't test button colour.

Goal: <increase conversion / reduce churn / boost engagement>
Current metric: <baseline number>
Page/flow: <describe>
Traffic: <visitors per day>

Output for each test:
1. Hypothesis — "If we X, then Y will happen because Z"
2. Variable — exactly what changes (show both control and variant)
3. Primary metric — exactly what you'll measure
4. Expected lift — minimum detectable effect
5. Sample size — how many visitors needed, at current traffic how many days
6. Segmentation — who sees this test (new vs returning, mobile vs desktop)
7. Risk — what if the hypothesis is wrong? Any downside?

3 test ideas ranked by expected ROI.`,
  },
  {
    id: "pro-case-study", role: "marketer",
    title: "Case Study Template & Writer",
    description: "Turns customer success into a persuasive case study.",
    prompt: `You write case studies that sales teams actually send to prospects.

Customer: <name/industry>
Problem they had: <describe>
Solution they used: <your product>
Results: <numbers if available>

Write:
1. **Headline** — problem + result in one sentence
2. **The hook** — opening paragraph (pain: make it visceral)
3. **Before state** — what they tried, what didn't work, cost of the problem
4. **The switch** — why they chose your solution, implementation timeline
5. **After state** — measurable results (numbers, %)
6. **Quote from customer** — what you want them to say (write both a draft and what to ask them)
7. **CTA** — what the reader should do next

Keep under 800 words. Specific numbers over adjectives.`,
  },
  {
    id: "pro-comp", role: "marketer",
    title: "Competitor Positioning Matrix",
    description: "Analyses competitors and finds your unique positioning angle.",
    prompt: `You analyse competitors to find gaps, not to copy them.

Product: <describe>
Market: <category, geography>
Competitors: <list 3-5 up to 1 sentence each>

Deliver:
1. **Positioning matrix** — 2x2 grid (your axes) with all players positioned
2. **Feature comparison** — 10 features, you vs each competitor (✅/⚠️/❌)
3. **Messaging gaps** — what each competitor says poorly that you can say well
4. **Pricing strategy** — how your pricing compares, perceived value gap
5. **Underserved segment** — one customer type that no competitor targets well
6. **Your unfair advantage** — one thing only you can credibly claim

One recommendation: positioning statement + target ICP to go after first.`,
  },
  {
    id: "pro-lead-magnet", role: "marketer",
    title: "Lead Magnet Concept & Copy",
    description: "Creates lead magnet ideas with landing page copy and email sequence.",
    prompt: `You create lead magnets that convert. A lead magnet without a clear call to action is just content.

Product: <describe>
ICP: <who>
Core value proposition: <one line>
Current conversion: <visitor to lead %>

Deliver for each lead magnet idea:
1. **Format** — PDF / checklist / template / video / calculator / quiz
2. **Title** — specific, outcome-promising
3. **Gate page hook** — headline + subhead (what they get + why they want it)
4. **Opt-in page copy** — 3 bullet benefits + CTA button text
5. **Delivery email** — subject + body + what to expect next
6. **Lead score** — how likely is a lead from this magnet to convert to paid

3 ideas ranked by conversion likelihood.`,
  },
  {
    id: "pro-newsletter", role: "marketer",
    title: "Newsletter Issue Architect",
    description: "Plans and writes a newsletter issue that gets opened and forwarded.",
    prompt: `You write newsletters people look forward to.

Topic: <describe>
Audience: <who>
Voice: <authoritative / conversational / provocative>
Goal of this issue: <teach / sell / build trust>

Structure:
1. **Subject line** (3 options, aim for curiosity + clarity)
2. **Preheader text** (the snippet in inbox preview)
3. **Opening** (hook — specific observation, story, or data point)
4. **Body** (3-4 sections with headers)
5. **Call to action** (one click, not five)
6. **PS** (the read-this-if-you-skimmed line)

For a newsletter: total word count target, estimated read time, ideal send day+time.`,
  },
  {
    id: "pro-prd", role: "marketer",
    title: "Product-Led Growth Funnel Designer",
    description: "Designs a PLG onboarding flow from signup to first value.",
    prompt: `You design product-led growth funnels. The first 5 minutes determine retention.

Product: <describe>
Core action: <the "aha moment" action>
Time to value: <current, in minutes>

Design:
1. **Signup flow** — what info you actually need (hint: less than you think)
2. **First screen** — what the user sees after signup (not "welcome to dashboard")
3. **Activation sequence** — the 3 steps to first value, in order, with triggers
4. **In-app guidance** — tooltips, checklists, or empty states? For each step, which type
5. **Email triggers** — what prompts an email versus staying in-app
6. **Referral loop** — when and how to ask for referral (post-aha, not pre-)
7. **Nudge cadence** — day 1, 3, 7 for users who haven't activated

Key metric: time-to-aha. Target under 5 minutes.`,
  },
  {
    id: "pro-ugc", role: "marketer",
    title: "User-Generated Content Campaign",
    description: "Designs a UGC campaign that gets real customers to create content.",
    prompt: `You design UGC campaigns. You don't ask "share a photo" — you make it easy and rewarding.

Product: <describe>
Customer base size: <N>
Channel: <TikTok / Instagram / LinkedIn / Twitter>

Campaign design:
1. **The ask** — specific, low-effort action. "Post a video of X doing Y" not "share your story"
2. **Incentive** — discount, feature request priority, social recognition, cash?
3. **Prompt examples** — 5 specific content ideas customers could post
4. **Submission mechanism** — hashtag, mention, form, dedicated landing page
5. **Review process** — who approves, IP rights, turnaround time
6. **Featured amplification** — how you'll repost and promote the best entries

Expected participation rate based on incentive + ask difficulty.`,
  },
  {
    id: "pro-press", role: "marketer",
    title: "Press Release / Launch Announcement",
    description: "Writes a launch announcement for Product Hunt, TechCrunch, or blog.",
    prompt: `You write launch announcements that journalists skim and users read.

Product: <name + one-liner>
Launch date: <date>
Target publication: <Product Hunt / blog / TechCrunch / newsletter>

Write:
1. **Headline** (<10 words, include company name + benefit)
2. **Subhead** (<20 words, who it's for + what it does differently)
3. **The problem** (1 paragraph, relatable)
4. **The solution** (2 paragraphs, features + why it's different)
5. **Social proof** (quote from alpha user or investor)
6. **Availability** (pricing, link, launch timing)
7. **Boilerplate** (about the company, 2 sentences)

For Product Hunt: also write the tagline, first comment, and 3 key features.`,
  },
  {
    id: "pro-ads", role: "marketer",
    title: "Ad Creative Brief Generator",
    description: "Writes creative briefs for ad agencies or in-house designers.",
    prompt: `You write ad creative briefs that prevent agencies from going in the wrong direction.

Product / campaign: <describe>
Platform: <Meta / Google / LinkedIn / TikTok>
Target audience: <demographic + psychographic>
Goal: <conversion / awareness / retargeting>

Write a brief with:
1. **Single message** — what you want the audience to think/feel/do
2. **Creative direction** — visual style, colour palette, motion reference, 3 reference examples
3. **Copy** — headline variations (3), body (2 versions), CTA (1)
4. **Asset specs** — dimensions, format, text overlay rules, platform requirements
5. **Must include** — logo, URL, disclaimer, offer details
6. **Must avoid** — colours of competitors, regulated claims, specific wording
7. **Success signal** — what makes this creative a winner (quantitative and qualitative)

This brief should take a designer 30 minutes to start, not 3 hours to decode.`,
  },
  {
    id: "pro-webinar", role: "marketer",
    title: "Webinar Script & Promotion Plan",
    description: "Structures a webinar from outline to script to promotion sequence.",
    prompt: `You plan webinars that have high attendance AND high conversion.

Topic: <describe>
Target audience: <who>
Format: <live / pre-recorded / hybrid>
Goal: <leads / sales / education / thought-leadership>

Deliver:
1. **Title & description** (title + 3-bullet description for registration page)
2. **Outline** (15-minute segments with timing)
3. **Script notes** — key talking points per segment, questions to ask audience
4. **Slides** — slide-by-slide description (not design, just content per slide)
5. **CTA strategy** — soft CTA mid-webinar, hard CTA at end
6. **Promotion** — email sequence (1 week before, 1 day before, 1 hour before, day after)
7. **Follow-up** — recording email, next step CTA, feedback survey

Expected attendance (based on registrants) and expected conversion %.`,
  },
  {
    id: "pro-cro", role: "marketer",
    title: "Conversion Rate Optimisation Audit",
    description: "Audits a page for conversion friction and gives ranked fixes.",
    prompt: `You audit pages for conversion. You assume every extra click loses 20% of users.

Page URL or description: <paste or describe>
Current conversion rate: <N%>
Goal: <signup / purchase / lead form>
Traffic source: <organic / paid / social / referral>

Audit (score 1-10 for each):
1. **Clarity** — in 5 seconds, can a visitor answer: what is this? what do I do?
2. **Friction** — form fields? Required account? Loading time? Distractions?
3. **Anxiety** — trust signals? Testimonials? Money-back? Security badges?
4. **Distraction** — navigation links? Multiple CTAs? Banner blindness?
5. **Urgency** — any reason to act now (or deferred)?
6. **Mobile** — does the mobile version convert equally?

Ranked fix list: quick wins first (1-2 hours) vs structural changes (1-2 weeks).`,
  },
];// GENERATED — 20 new Pro-only prompts (continued)
export const NEW_PRO_B = [
  {
    id: "pro-social", role: "marketer",
    title: "Social Media Content Calendar",
    description: "Plans 14 days of platform-specific posts with hooks and CTAs.",
    prompt: `You plan social content that drives traffic, not just likes.

Product / brand: <describe>
Platform: <Twitter / LinkedIn / both>
Goal: <traffic / leads / awareness>
Promo calendar for: <dates>

Generate 14 posts (2 weeks, M-F):
For each: hook (max 10 words), body (2 sentences), CTA, image idea

Then tag by purpose: value / story / promo / engagement
Mix: 40% value, 20% story, 20% promo, 20% engagement`,
  },
  {
    id: "pro-webinar", role: "marketer",
    title: "Webinar Script Builder",
    description: "30-minute webinar script with hook, transitions, and CTA.",
    prompt: `You write webinar scripts that keep 80% of viewers to the end.

Topic: <describe>
Audience: <who>
Speaker: <name, title>
Goal: <demo / sell / educate>

Script 30-minute structure:
0:00-2:00 Hook (problem they feel + why it hurts)
2:00-5:00 Agenda + credentials (fast)
5:00-15:00 Main content (3 segments, each: insight → example → takeaway)
15:00-25:00 Live demo / walkthrough (with contingency plan if tech fails)
25:00-28:00 Q&A prompts (pre-seed 2 questions in chat)
28:00-30:00 CTA + urgency + next step

Speaker notes in plain English (not read-from-page).`,
  },
  {
    id: "pro-case-study", role: "marketer",
    title: "Case Study Template",
    description: "Structured case study from customer interview notes.",
    prompt: `You write case studies that close deals.

Customer: <name / company>
Product used: <which>
Results: <numbers if available>
Interview notes: <paste>

Write:
## Title: formula = [Result] + [Timeframe] + [Customer name]
## The Before — situation before they used the product (be specific)
## The Trigger — what made them look for a solution
## The Decision — why they chose this over alternatives (quote if available)
## The Implementation — timeline, obstacles, how they overcame
## The Results — hard numbers first, quotes second
## The Future — what's next for them

3 social snippets (1 tweet, 1 LinkedIn post, 1 testimonial card text)`,
  },
  {
    id: "pro-compete", role: "marketer",
    title: "Competitive Positioning Matrix",
    description: "Compares your product against 3 competitors across 7 dimensions.",
    prompt: `You build competitive matrices that product teams actually use.

Your product: <name + 1-line description>
Competitors: <3 names>
Market: <niche>
Winning dimension: <what you're best at>

Build:
1. Feature comparison (10 rows, checkmarks / cross / partial)
2. Pricing comparison (monthly, annual, per-seat, hidden costs)
3. Positioning heat map (price vs capability quadrant)
4. The 3 arguments your sales team should never say — and what to say instead
5. Each competitor's weakness (the real one, not the spin version)
6. Your hidden advantage — the thing customers discover after 3 months`,
  },
  {
    id: "pro-pricing", role: "marketer",
    title: "Pricing Page Copywriter",
    description: "Writes pricing page copy that reduces comparison-shopping anxiety.",
    prompt: `You write pricing pages that nudge, not confuse.

Product: <describe>
Pricing tiers: <names + prices + features>
Target customer: <who>
Main objection to price: <what they say>

Write each tier's card:
- Name + tagline (who this is for, in 5 words)
- Price (clear, annual/monthly toggle if applicable)
- 3-5 bullet features per tier
- The 'why pick this tier' sentence
- CTA button text (not "Get Started" unless tested)

Below tiers: FAQ section answering 3 price objections
Below FAQ: comparison row expander
Below that: "Not sure?" — a recommendation quiz (2 questions)`,
  },
  {
    id: "pro-ab-hypothesis", role: "marketer",
    title: "A/B Test Hypothesis Generator",
    description: "Generates testable hypotheses with expected lift and sample size.",
    prompt: `You design A/B tests worth running. Each one has a clear winner criteria.

Page / flow: <describe what you're testing>
Current metric: <baseline conversion rate>
Traffic: <visitors/day>
Goal: <increase [metric] by [%]>

Generate 3 hypotheses, each with:
1. Observation — what you noticed or data that prompted this
2. Hypothesis — "If we [change], then [metric] will [direction] because [reason]"
3. Variation description — what the B version looks like
4. Expected lift — minimum detectable effect
5. Sample size needed — at 80% power, 95% confidence
6. Duration — days to statistical significance at current traffic
7. Secondary metrics — what else might move (good or bad)
8. One risk — a plausible reason this test could backfire`,
  },
  {
    id: "pro-roi-calc", role: "marketer",
    title: "ROI Calculator Script",
    description: "Creates ROI calculator copy and logic for lead generation.",
    prompt: `You write ROI calculator experiences that generate qualified leads.

Product: <what it saves / earns>
Target user: <who fills the calculator>
Input variables: <what they enter — e.g. employees, monthly spend, hours>

Design:
1. Calculator name (4 words max, benefit-led)
2. The 3-5 input fields with ranges (not free-text, to reduce friction)
3. The output: what they see (time saved / money saved / both)
4. Lead capture point — after they see the result, before they can customise variables
5. The "too good to be true" guard — show assumptions (e.g. "based on $150/hr blended rate")
6. Email deliverable — what they get in their inbox (not just "your number")

Actually write the lead email copy.`,
  },
  {
    id: "pro-newsletter", role: "marketer",
    title: "Newsletter Content Planner",
    description: "Plans 4-issue editorial calendar with topics, hooks, and CTAs.",
    prompt: `You plan newsletters subscribers open.

Newsletter: <name>
Audience: <who>
Pacing: <weekly / biweekly>
Upcoming promos / events: <list>

Plan 4 issues (1 month):
For each:
- Date
- Subject line (2 options, A/B ready)
- The opener (1 sentence — what they get from reading)
- Main segment (topic + angle + why now)
- Supporting segment (1 link + 1 sentence why it matters)
- CTA (not always "buy" — could be reply, survey, share)
- Smart preview text (max 80 chars, extends the subject line)

By issue 4: who should have converted and how to know`,
  },
  {
    id: "pro-lead-magnet", role: "marketer",
    title: "Lead Magnet Architect",
    description: "Designs lead magnets that convert cold traffic to email subscribers.",
    prompt: `You design lead magnets cold traffic converts on.

Core product: <describe>
Target reader: <who>
Their #1 frustration: <what>

Design a lead magnet:
1. Format choice (PDF checklist / email course / template / calculator / video) — justify
2. Title that gets the click: 3 options (specific benefit + timeframe + format)
3. Outline (what's inside, 5-7 items)
4. Landing page: headline, subhead, 3 bullet benefits, CTA, form fields (minimal)
5. Delivery email: subject, preview text, body, what to do next
6. The 3-day nurture sequence after they download

Size target: how long should it take them to consume? Rule: 5 min for checklist, 7 min for PDF, 3 min/day for course.`,
  },
];
// GENERATED — 24 new Pro-only prompts (continued)
export const NEW_PRO_C = [
  {
    id: "pro-investor", role: "founder",
    title: "Investor Update Writer",
    description: "Crafts concise monthly investor updates that build confidence.",
    prompt: `You write investor updates that earn trust, not just reads.

Company: <name>
Metrics this month: <revenue, users, burn, runway>
Key events: <what happened>
Asks: <what you need>
Tone: <confident / candid / urgent>

Write:
1. Subject line — the single most important number this month
2. TL;DR (3 bullets max)
3. Revenue & growth — actuals vs plan, with % change
4. Product — what shipped, what broke, what surprised you
5. Team — new hires, departures, key changes
6. Learnings — a mistake you made and what it taught (this is the most important section)
7. Asks — specific, with context
8. Forward look — next month's hard number

Under 400 words. Investors read on their phone.`,
  },
  {
    id: "pro-unit-econ", role: "founder",
    title: "Unit Economics Analyst",
    description: "Analyses CAC, LTV, payback period, and recommends pricing changes.",
    prompt: `You analyse unit economics like a seed-stage VC.

Revenue per customer: <monthly / annual>
CAC: <by channel if available>
Gross margin: <%>
Churn: <monthly %>
Average lifespan: <months>
Fully loaded cost to serve: <per customer per month>

Calculate:
1. LTV (simple + with discount rate)
2. CAC payback period (months)
3. LTV/CAC ratio
4. Time to recover CAC

Analyse:
- Is this ratio healthy for the business stage? If pre-product-market-fit, it's normal to be >18 months
- The channel with the best unit economics (even if small volume)
- The 1 pricing lever that would improve economics most
- What changes if we increase price 20%? 50%?
- A non-obvious risk (regulation, seasonality, cohort dilution)`,
  },
  {
    id: "pro-hiring", role: "founder",
    title: "Hiring Rubric Creator",
    description: "Designs role-specific hiring rubrics that reduce bias and bad hires.",
    prompt: `You design hiring rubrics that predict performance, not interview performance.

Role: <title>
Stage: <first hire / scaling team>
Reports to: <who>
Missing from current team: <which skill>

Design:
1. 5-7 competencies with weightings
   — For each: what good looks like, interview question to test, red flag
2. Scorecard template (1-5 scale per competency with anchor descriptions)
3. The 1 "must-pass" gate — if they don't meet this, no hire regardless of other scores
4. Take-home task design (under 4 hours, tests the #1 skill)
5. Reference check questions (3 specific, not "would you rehire?")
6. The hidden filter: what does this person believe about [core value of company]?

Weighted matrix template included.`,
  },
  {
    id: "pro-okr", role: "founder",
    title: "OKR Breaker",
    description: "Turns high-level goals into measurable, achievable OKRs.",
    prompt: `You break goals into OKRs that don't feel like homework.

Company goal: <describe>
Quarter: <Q1/Q2 etc>
Team stage: <early / growth / mature>
Limit: <max 3 objectives>

For each objective:
1. Objective (aspirational, qualitative, 1 sentence)
2. 2-4 Key Results that are:
   - Measurable (metric + number + timeframe)
   - Achievable but stretch
   - Owner-assignable
   - Leading (predicts success) or lagging (proves success) — label each
3. Confidence rating (0.3 / 0.5 / 0.7)
4. The one thing that could blow this KR up

Also: what to NOT pursue this quarter (the anti-OKR)`,
  },
  {
    id: "pro-customer-discovery", role: "founder",
    title: "Customer Discovery Script",
    description: "Interview scripts that surface real problems, not polite answers.",
    prompt: `You write customer discovery scripts that surface painful truths.

Product idea: <describe in 1 sentence>
Who to talk to: <target persona>
Hypothesis: <what you believe is the problem>

Write:
1. Recruitment message (DM/email template, <50 words, gets reply)
2. The screener (3 qualifying questions before the call)
3. Interview script (30 min):
   0-3: Context, permission to record, "I'm testing ideas, not selling"
   3-10: Their world — how do they currently solve the problem? What tools do they use?
   10-20: Problem deep dive — when was the last time this frustrated them? What did they do? How much did it cost them?
   20-25: Solution test — describe your approach in 2 sentences. What's missing?
   25-30: Priority — how urgent is this? What would they pay? What would they tell a friend?
4. Signals that tell you this is real (emotional energy, specific examples, unprompted requests to buy)`,
  },
  {
    id: "pro-pitch-review", role: "founder",
    title: "Pitch Deck Reviewer",
    description: "Reviews slide-by-slide with investor psychology in mind.",
    prompt: `You review pitch decks competitively. You know what makes an investor skip.

Pitch deck: <link or slide descriptions>
Stage: <pre-seed / seed / Series A>
Ask: <how much, what terms>
Current traction: <what you have>

Review each slide:
1. Problem slide — is it specific enough to hurt? Or generic?
2. Solution slide — do I understand the product in 5 seconds?
3. Market slide — TAM/SAM/SOM or just a giant number that means nothing?
4. Product slide — screenshots or architecture? (investors want screenshots)
5. Traction slide — what's the single best number here? Is it front-and-centre?
6. Team slide — why this team, not a different team?
7. Financial slide — are the assumptions reasonable or hockey-stick?
8. Ask slide — clear use of funds? Milestone-based?

For each: ✅ keep, ⚠️ needs work (with specific fix), ❌ remove

Overall: 3 changes that would most improve close rate.`,
  },
  {
    id: "pro-onboarding", role: "founder",
    title: "User Onboarding Sequence",
    description: "Designs the first-session-to-paid-customer workflow.",
    prompt: `You design onboarding flows that convert trial to paid, not just activation to dashboard.

Product: <describe>
Trial length: <days>
Key activation event: <the AHA moment>
Churn risk window: <when users typically leave>

Design:
1. Pre-activation (first 10 minutes)
   — What they should do, in order, in their first session
   — One metric: time-to-AHA
2. Day 1-3 sequence:
   — Email/tooltip/push? What content?
   — Who should they invite?
   — What data should they input?
3. Day 4-7:
   — Feature discovery (which ones convert to paid)
   — Usage threshold (how many actions before they're hooked)
4. Day 8-14 (trial end approaching):
   — What we tell them about their data so far
   — The "you'll lose X" message
   — Pricing reminder with case study
5. Post-expiry:
   — Grace period length
   — Reactivation offer
   -- What the reactivation email says`,
  },
  {
    id: "pro-flywheel", role: "founder",
    title: "Growth Flywheel Designer",
    description: "Designs a self-reinforcing growth loop from existing product behaviour.",
    prompt: `You design flywheels that compound, not funnels that leak.

Product: <describe>
Current user actions: <what users do>
Existing loop (if any): <describe>
Unit economics: <LTV, CAC>

Design a flywheel:
1. Input action — what user behaviour generates the loop
2. Output — what the product does in response
3. Acceleration — why this gets better with scale
4. Measurement — the one metric that tells you it's working
5. Leakage — what stops the flywheel from spinning (and how to fix)

Example flywheels for reference:
- Content → SEO → traffic → signups → content
- Network effect → more users → better experience → more users
- Data network → more data → better product → more data

Pick the one closest to your product. Map it.`,
  },
  {
    id: "pro-go-to-market", role: "founder",
    title: "GTM Motion Selector",
    description: "Helps pick the right go-to-market motion: PLG, sales-led, or hybrid.",
    prompt: `You help founders pick the right GTM motion, not the fashionable one.

Product: <describe>
Price point: <$XX>
Buyer: <end user / department / C-suite>
Sales cycle: <self-serve / days / weeks / months>
User count: <how many people need to adopt>

Analyse which motion fits:
1. Product-led (PLG) — when: low price, low friction, user is buyer. Best for SMB.
2. Sales-led — when: high price, multiple stakeholders, complex implementation.
3. Hybrid — when: free tier for adoption, sales for expansion.

Recommendation (specific to this product):
- The primary motion
- The secondary motion (for different segments)
- The biggest risk of picking this motion
- The trigger event that should prompt a motion shift
- The one metric that indicates the wrong motion was chosen

Include a table of: segment → motion → team → cost to acquire`,
  },
  {
    id: "pro-blog-edit", role: "writer",
    title: "Blog Post Editor",
    description: "Edits drafts for clarity, narrative flow, and reader retention.",
    prompt: `You edit blog content like a publishing house editor.

Blog draft: <paste>
Publication: <blog / LinkedIn / Medium>
Reader: <who>
Goal: <read time / shares / conversions>

Edit the draft:
1. Headline audit — does it make a promise the article keeps?
2. First paragraph — does it earn the read? Or warm up too slowly?
3. Structure — is the argument clear? Do sections flow logically?
4. Paragraph length — any >6 sentence paragraphs? Break them.
5. Sentence length — vary short and long. Remove filler: "it's worth noting", "importantly", "in order to"
6. Concreteness — swap 3 abstractions for specifics
7. Ending — does it land? Or fade? Rewrite the final 2 paragraphs.

Show edits as diff: ~~strikethrough removed~~ **added new** with rationale.`,
  },
  {
    id: "pro-thought-leadership", role: "writer",
    title: "Thought Leadership Draft",
    description: "Drafts opinion pieces that build authority, not noise.",
    prompt: `You write thought leadership that earns follows, not just claps.

Topic: <what you want to be known for>
Your contrarian take: <what most people get wrong>
Your credentials: <why you can say this>
Publication: <LinkedIn / industry blog / newsletter>

Write a short (~500 word) piece with:
1. Opening: state the conventional wisdom — then immediately say why it's wrong
2. Evidence: 1 specific story from your experience that proves your point
3. Framework: a simple mental model (2-3 parts) that replaces the old way of thinking
4. Call to action: what should the reader do differently tomorrow?

Tone: confident but not arrogant. Specific but not academic.`,
  },
  {
    id: "pro-tone-guide", role: "writer",
    title: "Brand Tone of Voice Guide",
    description: "Creates a short, practical tone guide for a brand's content.",
    prompt: `You create tone-of-voice guides writers actually use (and don't hate).

Brand: <name>
Industry: <sector>
Audience: <who>
Current tone problem: <describe>

Create a 1-page guide:
## Core personality (3 adjectives)
## Voice spectrum (formal ← neutral → casual) — show where this brand sits
## Do's and Don'ts (5 each, concrete)
## Sentence length preference + punctuation style
## Words to always use / never use (10 each)
## Example rewrites: take 3 generic sentences and rewrite them in this brand's voice
## The golden rule — the one question every writer should ask before publishing

Keep it under 300 words. A guide longer than a blog post won't be read.`,
  },
  {
    id: "pro-speech", role: "writer",
    title: "Speech / Script Writer",
    description: "Writes speeches and video scripts structured for spoken delivery.",
    prompt: `You write spoken content, not written content read aloud.

Topic: <describe>
Speaker: <name, personality>
Audience: <who, size>
Duration: <minutes>
Context: <stage / podcast / internal all-hands>

Write:
1. Opening: The first 10 seconds — a specific moment, question, or statement that demands attention
2. Setup: Context (30 seconds max) — what the audience needs to know
3. Body (3 points, each under 2 minutes):
   — Point → Story/example → Insight → Transition
4. Closer: 1 clear takeaway, 1 specific action, 1 memorable final sentence

Format:
- Mark pauses with [...]
- Mark emphasis with **bold**
- Mark slide/visual changes with (SLIDE)
- Keep sentences under 15 words on average
- Use contractions (it's, don't, we're) — speech is informal`,
  },
  {
    id: "pro-changelog", role: "writer",
    title: "Changelog / Release Note Writer",
    description: "Turns dev notes into customer-facing release notes that drive engagement.",
    prompt: `You write changelogs customers read — and get excited about.

Dev notes / PR summaries: <paste>
Product: <name>
Audience: <technical / non-technical / both>

Convert to customer-facing release notes:
## Title: "What's new" + the most exciting change
## Each change (ranked by customer impact, not engineering effort):
   — Feature name (what users will call it)
   — Why it exists (what customers asked for, or what problem it solves)
   — How it works (in 2 sentences)
   — Who it helps (power users / everyone / specific role)
## Bug fixes section (3-5 most impactful, in customer language)
## "Coming up" teaser (1 sentence)

Tone: excited but not hype. "We fixed a bug where exports would fail for large datasets" not "Fixed export bug where 500+ rows timed out"`,
  },
];
