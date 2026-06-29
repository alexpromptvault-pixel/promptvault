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
