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
