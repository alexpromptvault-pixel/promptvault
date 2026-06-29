(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4434:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>h,routeModule:()=>p,tree:()=>c}),o(908),o(1506),o(5866);var i=o(3191),r=o(8716),s=o(7922),a=o.n(s),n=o(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);o.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.bind(o,908)),"/home/workspace/Projects/promptvault/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(o.bind(o,1506)),"/home/workspace/Projects/promptvault/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,5866,23)),"next/dist/client/components/not-found-error"]}],h=["/home/workspace/Projects/promptvault/app/page.tsx"],d="/page",u={require:o,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5329:()=>{},3791:(e,t,o)=>{Promise.resolve().then(o.bind(o,5864))},4915:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2994,23)),Promise.resolve().then(o.t.bind(o,6114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,9671,23)),Promise.resolve().then(o.t.bind(o,1868,23)),Promise.resolve().then(o.t.bind(o,4759,23))},5864:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var i=o(326),r=o(7577);let s=[{id:"dev-code-review",role:"developer",title:"Strict Code Reviewer",description:"Reviews code for bugs, security, performance. Staff-engineer quality.",prompt:`You are a senior staff engineer with 15+ years of experience at top-tier companies. You do not flatter — you find problems.

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
- Cite the exact line where possible.`,proOnly:!0},{id:"dev-debug",role:"developer",title:"Bug Hunter",description:"Forensic debugger. Walks through code to find root cause.",prompt:`You are a debugger. You don't guess — you trace.

Bug: <describe — include observable symptoms and the environment>
Code path: <paste relevant code or the file hierarchy>
Logs / error messages: <paste>

Systematically:

1. **Form 3 hypotheses** for the root cause, ranked by likelihood.
2. **For the top hypothesis**, walk through the exact code path that produces the bug. Quote line numbers.
3. **The test that confirms or denies** each hypothesis. If you can write a 1-line script that proves it, do.
4. **The fix**: code change, plus a test that asserts the fix.
5. **The post-mortem**: what was the assumption that broke? How would we catch this class of bug earlier?

If you're stuck after 10 minutes of thinking, state the smallest experiment that would halve the search space.`},{id:"dev-test",role:"developer",title:"Test Suite Strategist",description:"Decides what to test, how, and what to skip.",prompt:`You design test suites that catch real bugs, not coverage theatre.

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
7. **Most-missed test category** for this kind of code. Why people skip it, how not to.`,proOnly:!0},{id:"dev-arch",role:"developer",title:"System Design Critique",description:"Reviews architecture for scale, simplicity, and hidden cost.",prompt:`You are a principal engineer who has seen good systems scale out and bad systems scale into pain.

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

Be direct. "It's fine" is also acceptable if it really is.`,proOnly:!0},{id:"dev-typescript",role:"developer",title:"TypeScript / JS Refactor",description:"Refactors JS/TS code for clarity, types, and modernity.",prompt:`You refactor JavaScript/TypeScript code as if the next reader hates you.

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

If the code is intentionally cryptic, say so and ask before rewriting.`},{id:"dev-pr",role:"developer",title:"PR Description Writer",description:"PR descriptions reviewers actually want to read.",prompt:`You write PR descriptions that earn fast approvals.

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

Total target: under 350 words. PRs that take longer to read than to write are bad PRs.`},{id:"dev-migration",role:"developer",title:"Migration Planner",description:"Plans zero-downtime migrations of risky changes.",prompt:`You are a senior engineer who's done dozens of migrations and lived through the failures.

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

Be explicit about uncertainty. If migration is non-trivial, recommend a "strangler fig" pattern.`,proOnly:!0},{id:"dev-errors",role:"developer",title:"Production Error Triage",description:"Triage an error report / stack trace into action.",prompt:`You debug production errors quickly. You assume the issue is somewhere you don't expect.

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

Distinguish "I know" from "I think." If it takes longer than 2 hours to root-cause, escalate — and propose two parallel investigation tracks.`},{id:"mkt-headline",role:"marketer",title:"Headline Crafter",description:"10 headlines, scored for conversion.",prompt:`You are a direct-response copywriter. Your headlines convert.

Product/page: <describe>
Audience: <who>
Promise: <the single outcome they want>

Generate 10 headline options. For each:
- The headline (max 9 words)
- A short rationale (why it works, what emotion/proof it uses)
- A risk note (what could make it flop)

Then rank them 1–10 by expected conversion rate for a cold audience.

Avoid clickbait, vague benefit claims. Specific > clever.`},{id:"mkt-landing",role:"marketer",title:"Landing Page Architect",description:"Full landing-page outline from hero to FAQ.",prompt:`You design landing pages that convert. You think in the visitor's eyes.

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

Then suggest 2 A/B tests to run first.`},{id:"mkt-email",role:"marketer",title:"Cold Email Architect",description:"Cold emails that earn replies, not bounces.",prompt:`You write cold emails that get replies. You treat the inbox as sacred.

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

Also: 2 follow-up emails (3, 7 days after no reply). Each one short. Each one adds new value, doesn't just "bump."`},{id:"mkt-launch",role:"marketer",title:"Launch Distribution Plan",description:"Channel-by-channel launch plan you can execute in a week.",prompt:`You build product launch plans that actually drive traffic, not just make decks.

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

No vague advice ("post on socials"). Concrete, executable actions.`},{id:"mkt-seo",role:"marketer",title:"SEO Content Brief",description:"Topical map + first article brief to rank for a topic.",prompt:`You are an SEO strategist. You build topical authority, not just keywords.

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
4. **Realistic ranking timeline** — month-by-month expectation`},{id:"mkt-ads",role:"marketer",title:"Meta / Google Ad Builder",description:"Ad copy + variations + targeting for paid acquisition.",prompt:`You write ads that earn clicks without making the user hate you.

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
6. **What success looks like** by Day 7 and Day 30`},{id:"mkt-referral",role:"marketer",title:"Referral Program Architect",description:"Word-of-mouth programs designed for realistic viral coefficients.",prompt:`You design referral programs. You've seen what works in real growth teams.

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
8. **3 things to test** in the first month.`},{id:"mkt-survey",role:"marketer",title:"Customer Survey Designer",description:"Surveys with high response + actionable signal.",prompt:`You design customer surveys where the answers are actually useful.

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
8. **Kill questions** — 2-3 things people usually ask but shouldn't.`},{id:"found-idea-validate",role:"founder",title:"Idea Validator",description:"Pressure-tests a startup idea in 20 mins of structured questions.",prompt:`You are a YC partner who's seen 10,000 pitches. You do not hype. You poke holes.

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

End with a verdict: STRONG, PROMISING, RISKY, or DEAD (and why).`},{id:"found-pitch",role:"founder",title:"60-Second Pitch",description:"Elevator pitch that lands in 60 seconds.",prompt:`You write pitches. Tight ones. Investors don't reward cleverness — they reward clarity and traction.

Company: <name>
One-liner: <one sentence>
Traction (or progress): <e.g. 1k users, $5k MRR, 2 design partners>
Audience: <investor / partner / customer / press>

Write 3 versions of a 60-second pitch:
1. **Investor version** — what's the wedge, the size, the speed
2. **Customer version** — what does it do for me, today, with no jargon
3. **Press version** — here's something new, here's why it matters

Each one: a hook, the problem, your solution, the proof, the ask.

Then list 5 questions they'll ask — and answer them.`},{id:"found-financials",role:"founder",title:"Financials & Runway Planner",description:"Realistic financial model for a pre-seed startup.",prompt:`You build honest financial models. Founders love your spreadsheet, because you don't lie to them.

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

Be concrete. Show your math.`},{id:"found-roadmap",role:"founder",title:"Product Roadmap Maker",description:"6-month roadmap, ruthless about priorities.",prompt:`You prioritise ruthlessly. You know that shipping 3 things is better than "doing everything."

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

Output as a Markdown checklist, ready to paste into a Notion table.`},{id:"found-hire",role:"founder",title:"First Hire Blueprint",description:"Job description + interview loop + scorecard.",prompt:`You are a founder who's made hiring mistakes — and learned from them.

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
8. **What to do if you're not sure** — between two decent candidates.`},{id:"found-decision",role:"founder",title:"Decision Frameworks",description:"Forces concrete thinking on a hard decision.",prompt:`You are a strategic advisor. You help founders decide, not just list options.

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

Push back on bad logic. Don't soften.`},{id:"found-churn",role:"founder",title:"Churn Diagnosis",description:"Forensic analysis of why customers leave + how to fix it.",prompt:`You diagnose churn like a doctor — symptoms first, then tests, then a treatment plan.

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

Be specific to this product. Don't list generic advice.`},{id:"write-blog",role:"writer",title:"Blog Post Outline",description:"Search-intent + reader-respecting blog post outline.",prompt:`You are a content strategist who writes for both humans and Google.

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

Write the intro (200 words) once the structure is set.`},{id:"write-newsletter",role:"writer",title:"Newsletter Builder",description:"Open-worthy newsletters that earn replies.",prompt:`You write newsletters people open. You optimise for "did I read it fully" not "did I get clicks."

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

Then 3 follow-up issues for the next 3 days, themed as a sequence (not repeated content).`},{id:"write-x",role:"writer",title:"X / Twitter Thread Builder",description:"Threads that get read fully, not just RT'd.",prompt:`You write X threads that earn followers, not just likes.

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

Plus 3 follow-up single tweets (replies to the thread) to extend reach.`},{id:"write-tiktok",role:"writer",title:"Short-Form Video Script",description:"TikTok/Reels/Shorts scripts that hold attention.",prompt:`You write short-video scripts that hold attention past the 3-second mark.

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

Plus 3 alternatives of the hook, ranked for likelihood to hold attention.`},{id:"write-doc",role:"writer",title:"Documentation Writer",description:"Technical docs that humans actually understand.",prompt:`You write docs that engineers enjoy reading. They don't skim. They get unblocked.

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

If improving existing docs: keep what works, rewrite what doesn't. Show before/after for the "before" line that's currently unclear.`},{id:"write-story",role:"writer",title:"Founder Story / About Page",description:"About pages that build trust without humble-bragging.",prompt:`You write the "About / Story" copy for company pages. It actually makes people feel something.

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

Also: 1 paragraph of micro-copy for a Twitter bio (max 160 chars) and 1 for the company byline.`},{id:"write-email-subj",role:"writer",title:"Email Subject Line Lab",description:"20 subject lines ranked by intent.",prompt:`You write email subject lines. Open rates are your only metric.

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
Then **flag the 3 worst spam-trap patterns** to avoid entirely.`}],a={developer:{label:"Developer",emoji:"\uD83D\uDC68‍\uD83D\uDCBB",color:"from-emerald-500 to-teal-600"},marketer:{label:"Marketer",emoji:"\uD83D\uDCC8",color:"from-pink-500 to-rose-600"},founder:{label:"Founder",emoji:"\uD83D\uDE80",color:"from-amber-500 to-orange-600"},writer:{label:"Writer",emoji:"✍️",color:"from-violet-500 to-purple-600"}};function n(){let[e,t]=(0,r.useState)(null),[o,n]=(0,r.useState)("all"),[l,c]=(0,r.useState)(!1),[h,d]=(0,r.useState)(null),u=(0,r.useMemo)(()=>s.filter(e=>("all"===o||e.role===o)&&!l),[o,l]),p=null!==e?u[e]:null,m=async(e,t)=>{try{"undefined"!=typeof navigator&&navigator.clipboard&&await navigator.clipboard.writeText(t),d(e),setTimeout(()=>d(null),1500)}catch(e){}};return(0,i.jsxs)("main",{className:"min-h-screen bg-zinc-950 text-zinc-100",children:[i.jsx("header",{className:"border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-10",children:(0,i.jsxs)("div",{className:"max-w-5xl mx-auto px-4 py-4 flex items-center justify-between",children:[(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white",children:"P"}),(0,i.jsxs)("div",{children:[i.jsx("h1",{className:"text-lg font-semibold",children:"PromptVault"}),i.jsx("p",{className:"text-xs text-zinc-500",children:"AI workflows that ship"})]})]}),(0,i.jsxs)("div",{className:"text-xs text-zinc-500",children:[i.jsx("span",{className:"text-zinc-300 font-medium",children:s.length})," prompts \xb7 by Alex Fisher"]})]})}),(0,i.jsxs)("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[(0,i.jsxs)("section",{className:"mb-8",children:[(0,i.jsxs)("h2",{className:"text-3xl md:text-4xl font-bold tracking-tight",children:["Tested prompts for ",i.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400",children:"real work"}),"."]}),i.jsx("p",{className:"mt-3 text-zinc-400 max-w-2xl",children:"Each prompt is production-tested and copy-paste ready. Browse by role, click any prompt, paste into ChatGPT or Claude. Free preview below — the full 100+ library is on Gumroad for \xa319."})]}),(0,i.jsxs)("section",{className:"mb-6 flex flex-wrap items-center gap-2",children:[i.jsx("button",{onClick:()=>n("all"),className:`px-3 py-1.5 rounded-full text-sm transition ${"all"===o?"bg-zinc-100 text-zinc-900":"bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`,children:"All"}),Object.keys(a).map(e=>(0,i.jsxs)("button",{onClick:()=>n(e),className:`px-3 py-1.5 rounded-full text-sm transition flex items-center gap-1.5 ${o===e?"bg-zinc-100 text-zinc-900":"bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`,children:[i.jsx("span",{children:a[e].emoji})," ",a[e].label]},e)),(0,i.jsxs)("label",{className:"ml-auto flex items-center gap-2 text-sm text-zinc-400 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:l,onChange:e=>c(e.target.checked),className:"rounded"}),"Pro only"]})]}),p?(0,i.jsxs)("article",{className:"bg-zinc-900/60 border border-zinc-800 rounded-lg p-6",children:[i.jsx("button",{onClick:()=>t(null),className:"text-sm text-zinc-400 hover:text-zinc-200 mb-4 inline-flex items-center gap-1",children:"← Back to library"}),(0,i.jsxs)("div",{className:"flex items-start gap-2 mb-3",children:[(0,i.jsxs)("span",{className:`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs text-white bg-gradient-to-r ${a[p.role].color}`,children:[a[p.role].emoji," ",a[p.role].label]}),p.proOnly&&i.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20",children:"PRO \xb7 included in full library"})]}),i.jsx("h2",{className:"text-2xl font-bold",children:p.title}),i.jsx("p",{className:"text-zinc-400 mt-1",children:p.description}),(0,i.jsxs)("div",{className:"mt-4 relative",children:[i.jsx("pre",{className:"bg-zinc-950 border border-zinc-800 rounded-md p-4 text-sm whitespace-pre-wrap font-mono text-zinc-200 overflow-x-auto",children:p.prompt}),i.jsx("button",{onClick:()=>m(p.id,p.prompt),className:"absolute top-2 right-2 px-3 py-1.5 text-xs rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200",children:h===p.id?"Copied ✓":"Copy"})]}),p.proOnly&&(0,i.jsxs)("div",{className:"mt-6 p-4 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20",children:[(0,i.jsxs)("p",{className:"text-sm",children:["This prompt is part of the ",i.jsx("strong",{children:"full PromptVault library"})," — 100+ production-tested prompts for \xa319."]}),i.jsx("a",{href:"/upgrade",className:"mt-3 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90",children:"Get the full library →"})]})]}):i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:u.map((e,o)=>(0,i.jsxs)("button",{onClick:()=>t(o),className:"text-left p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition group",children:[(0,i.jsxs)("div",{className:"flex items-start justify-between gap-2 mb-2",children:[(0,i.jsxs)("div",{className:`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs text-white bg-gradient-to-r ${a[e.role].color}`,children:[i.jsx("span",{children:a[e.role].emoji}),i.jsx("span",{children:a[e.role].label})]}),e.proOnly&&i.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20",children:"PRO"})]}),i.jsx("h3",{className:"font-semibold text-zinc-100 group-hover:text-white",children:e.title}),i.jsx("p",{className:"text-sm text-zinc-400 mt-1",children:e.description})]},e.id))}),!p&&(0,i.jsxs)("section",{className:"mt-12 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20",children:[i.jsx("h3",{className:"text-xl font-semibold",children:"Want the full 100+ library?"}),i.jsx("p",{className:"text-zinc-400 mt-1 text-sm",children:'Get every prompt — including 60+ Pro prompts — plus the "build-your-own" system prompt, in one file.'}),(0,i.jsxs)("div",{className:"mt-4 flex items-center gap-3",children:[i.jsx("a",{href:"/upgrade",className:"px-5 py-2.5 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90",children:"Get PromptVault \xb7 \xa319"}),i.jsx("span",{className:"text-xs text-zinc-500",children:"One-time payment. Lifetime updates."})]})]})]}),i.jsx("footer",{className:"border-t border-zinc-800 mt-12 py-6 text-center text-xs text-zinc-500",children:"Built by Alex Fisher \xb7 \xa9 2026 PromptVault"})]})}},1506:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s,metadata:()=>r});var i=o(9510);o(7272);let r={title:"PromptVault — AI Workflows That Ship",description:"Test production-grade AI prompts across dev, marketing, founder, and writing roles."};function s({children:e}){return i.jsx("html",{lang:"en",children:i.jsx("body",{className:"antialiased",children:e})})}},908:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i});let i=(0,o(8570).createProxy)(String.raw`/home/workspace/Projects/promptvault/app/page.tsx#default`)},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),i=t.X(0,[819],()=>o(4434));module.exports=i})();