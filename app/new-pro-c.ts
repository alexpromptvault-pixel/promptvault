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
