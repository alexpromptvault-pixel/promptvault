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
