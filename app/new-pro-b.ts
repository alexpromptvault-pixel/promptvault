// GENERATED — 20 new Pro-only prompts (continued)
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
