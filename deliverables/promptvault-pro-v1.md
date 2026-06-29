# PromptVault Pro — Developer Prompts (Part 1)

## 1. Full-Stack Feature Spec
```
You are a senior product engineer. Given this feature request:

<feature description here>

Produce:
1. Technical breakdown (components, data flow, edge cases)
2. File-by-file implementation plan
3. Database schema changes (if any)
4. API contract (endpoints, request/response shapes)
5. Testing strategy

Assume a modern web stack (Next.js, Postgres, Tailwind). Be specific about component boundaries and state management.
```

## 2. Database Schema Audit
```
You are a DBA with 20 years of experience. Given this schema:

<insert schema here>

Evaluate for:
1. Normalisation violations (point out exact NF violations)
2. Indexing strategy (which queries are slow, suggest composite indexes)
3. Data type appropriateness (timestamp vs timestamptz, varchar lengths, etc.)
4. Migration hazards (backward compatibility concerns)
5. Concurrent access issues (deadlocks, race conditions, lock contention)

Rate the schema out of 10 and list the 3 most impactful fixes in priority order.
```

## 3. React Component Design
```
You are a React architect at a FAANG company. I need a <Component> that:

<describe requirements>

Design the component API following these constraints:
- TypeScript with proper generics
- Accessible (WCAG 2.1 AA minimum)
- Server-side rendering compatible
- Supports controlled and uncontrolled modes
- Loading, empty, error, and success states
- Proper error boundary wrapping

Provide: full code, usage examples, and edge cases you've handled.
```

## 4. Performance Optimisation
```
Profile this code snippet:

<code here>

Using Chrome DevTools / React DevTools profiling patterns, identify:
1. Unnecessary re-renders (point to exact lines)
2. Memory leaks (closures, event listeners, interval cleanup)
3. Bundle size issues (tree-shaking failures, duplicate dependencies)
4. Network waterfall (serial requests, missing caching headers)
5. Render-blocking resources

For each issue: why it's happening, how to fix it, and the expected performance gain.
```

## 5. Security Review
```
You are an application security engineer. Audit this code:

<code>

Check for OWASP Top 10:
1. Injection (SQL, NoSQL, XSS, SSTI) — trace untrusted input paths
2. Broken authentication — session handling, token expiry
3. Sensitive data exposure — logging secrets, HTTP vs HTTPS
4. Broken access control — missing authorisation checks
5. Security misconfiguration — CORS, CSP, headers
6. Known vulnerable dependencies

For each finding: severity (Critical/High/Medium/Low), exploit scenario, and fix.
```

## 6. API Design (REST)
```
You are designing a REST API for <describe domain>. Requirements:

<requirements>

Design the full API surface:
- Resource naming and nesting strategy
- Pagination (cursor-based)
- Error formatting (RFC 7807)
- Rate limiting headers
- Idempotency keys for mutating endpoints
- Partial responses (sparse fieldsets)
- Versioning approach

Provide example request/response pairs for every endpoint.
```

## 7. TypeScript Type Challenge
```
You are a TypeScript wizard. I need a type that:

<describe complex type requirement>

Implement it using advanced TypeScript features (conditional types, template literal types, mapped types, infer). If impossible, explain why and provide the closest workaround. Include comprehensive test cases using `expect-type` or similar.
```

## 8. Dockerfile Optimisation
```
Given this Dockerfile:

<dockerfile>

Optimise for:
1. Build speed (layer caching, ordering of COPY and RUN)
2. Image size (multi-stage, distroless, alpine)
3. Security (non-root user, pinned base image versions)
4. Caching efficiency (dependency installation before source copy)
5. CI speed (parallel stages, buildx)

Provide the optimised Dockerfile and explain each change's impact.
```

## 9. Git Workflow & CI Pipeline
```
Design a Git workflow and CI pipeline for <project description>:

Team: <size>
Deploy cadence: <daily/weekly>
Requirements:
- Code review enforcement
- Automatic staging deployment
- Production deployment with rollback
- E2E test suite
- Database migration safety

Provide:
1. Branch strategy (trunk-based vs GitFlow)
2. CI pipeline config (GitHub Actions or similar)
3. Review checklist automation
4. Rollback procedure
```

## 10. Technical Debt Assessment
```
You are taking over a codebase. Read this:

<code samples or repo structure>

Assess the technical debt by:
1. Architecture violations (layered architecture breaches)
2. Test coverage gaps (untested paths)
3. Duplication (copy-paste violations)
4. Dead code (unused exports, components, routes)
5. Dependency issues (circular imports, outdated packages, peer dep mismatches)

Quantify the debt in estimated engineering hours to fix. Prioritise by business risk.
```
## 11. Debugging Black-Box Issue
```
I have a production bug. Here's what I know:

<error logs, screenshots, user reports>

Act as a senior debugger. Walk through your thought process:
1. What's the most likely root cause (hypothesis)
2. What data would confirm/rule out this hypothesis
3. What instrumentation would you add for next time
4. What's the safest minimal fix vs the ideal fix
```

## 12. Code Migration Script
```
Write a migration script to go from <current state> to <target state>.

Requirements:
- Idempotent (safe to run multiple times)
- Dry-run mode (no destructive writes)
- Progress logging with timestamps
- Rollback capability
- Handle partial failures gracefully
- Rate-limit awareness (DB connections, API calls)

Language: <language/framework>
Data volume: <estimate rows or API calls>
```

## 13. System Design (FAANG-style)
```
Design <system name> to handle <scale>.

Requirements:
<functional requirements>
<non-functional requirements>

Cover:
1. High-level architecture (diagram in text)
2. Database choice and schema design
3. Caching strategy (layers, invalidation, hit rates)
4. Message queue / async processing
5. Scaling: read replicas, sharding, CDN
6. Failure modes: SPOFs, circuit breakers, degraded modes
7. Monitoring: key metrics, alert thresholds, SLOs
```

## 14. Code Generator Prompt
```
Given this schema/API/spec:

<input>

Generate a production-ready implementation in <language> with:
- Input validation
- Error handling (typed errors)
- Unit tests (happy path + edge cases + failure modes)
- Logging (structured, context-aware)
- Documentation (JSDoc/TSDoc)

Output the generated code with explanations for each section.
```

## 15. Integration Test Suite
```
Design an integration test suite for <system description>.

Services involved: <list of services>
Data flow: <description>

Cover:
1. Contract tests (service-to-service API compatibility)
2. State transition tests (happy path + failure modes)
3. Data consistency tests (eventual consistency verification)
4. Performance baseline tests
5. Recovery tests (service restart, DB failover)

Provide test structure, key assertions, and CI integration approach.
```

## 16. Refactoring Plan (Legacy to Modern)
```
We have a legacy <describe system> written in <legacy tech>.
We want to migrate to <target tech> without a big-bang rewrite.

Constraints:
- Zero downtime
- Incremental deployment
- No data loss
- Team size: <n> engineers
- Timeline: <estimate>

Design a strangler fig migration plan:
1. Identify seams and extraction points
2. Define the strangler facade pattern
3. Migration order (read paths first vs write paths)
4. Data synchronisation strategy
5. Feature flag and rollback plan per phase
6. Testing strategy for hybrid state
```

## 17. CI/CD Pipeline for Microservices
```
Design a CI/CD pipeline architecture for <n> microservices.

Requirements:
- Monorepo with shared packages
- Independent deployment per service
- Zero-downtime deploys (blue/green or canary)
- Version compatibility checks between services
- Secrets management
- Multi-environment (dev, staging, prod)

Provide pipeline YAML structure and deployment strategy per service type.
```

## 18. GraphQL Schema Design
```
Given these data requirements and access patterns:

<requirements>

Design a GraphQL schema covering:
1. Type definitions with proper nullability
2. Query and mutation design
3. Pagination (Relay connection spec)
4. Subscription model (if needed)
5. Authorization at field/resolver level
6. N+1 prevention strategy (dataloader, batching)
7. Schema versioning approach
```

## 19. Error Recovery & Resilience Patterns
```
Given <system description> with these failure scenarios:

<failure modes>

Design a resilience layer:
1. Retry strategy (backoff, jitter, circuit breaker thresholds)
2. Fallback mechanisms (cached data, degraded mode responses)
3. Bulkhead isolation between critical and non-critical paths
4. Timeout strategy per external dependency
5. Recovery automations (auto-scale, restart, failover)
6. Degraded user experience patterns

Provide concrete code examples for each pattern.
```

## 20. Test Data Factory
```
Design a test data generation system for <domain>.

Requirements:
- Realistic data distributions (not uniform random)
- Edge case injection (nulls, duplicates, boundary values)
- Foreign key consistency across generated entities
- Deterministic seeds for reproducible tests
- Volume scaling (10 to 1M records)
- Performance-testing data characteristics

Provide the core generator architecture and examples in <language>.
```

## 21. Async Worker Queue
```
Design a reliable job queue for <use case>.

Constraints:
- At-least-once delivery (handle duplicates on consumer side)
- Job prioritization
- Delayed / scheduled jobs
- Retry with exponential backoff
- Dead letter queue for failed jobs
- Rate limiting at worker level
- Progress tracking per job

Compare implementation approaches: Bull/Redis, RabbitMQ, SQS. Recommend based on <requirements>.
```

## 22. Cross-Cutting Concern Audit
```
Audit this codebase for cross-cutting concern violations:

<repo or description>

Check:
1. Where business logic leaks into infrastructure code
2. Where infrastructure concerns leak into business logic
3. Inconsistent error handling patterns
4. Missing observability (logging, metrics, traces)
5. Hard-coded configuration
6. Scattered authorization checks
7. Duplicated validation logic

Suggest a refactoring plan to centralize each concern with concrete before/after examples.
```

## 23. Real-Time Feature Design
```
Design a real-time feature for <use case>.

Requirements:
- Sub-second delivery latency
- <n> concurrent users
- Connection resilience (reconnect, state sync)
- Message ordering guarantees
- Presence detection (who's online)
- Historical replay on connect

Compare: WebSocket, SSE, polling. Provide architecture and connection lifecycle management.
```

## 24. Database Query Optimisation
```
Given this slow query and schema:

<EXPLAIN ANALYZE output>
<schema>

Optimise the query:
1. Index recommendation (specific columns, order, partial)
2. Query rewriting (CTE optimisation, join ordering)
3. Materialised view strategy (if applicable)
4. Denormalisation trade-offs
5. Partitioning strategy

Show the optimised query and expected performance improvement with reasoning.
```

## 25. Monorepo Tooling Setup
```
Design a monorepo setup for <describe project>.

Tools to evaluate: Turborepo, Nx, pnpm workspaces
Packages: <number of packages>
Tech: <languages and frameworks>

Provide:
1. Workspace configuration
2. Build orchestration (dependency graph, caching)
3. Linting across packages (consistent rules)
4. Type sharing between packages
5. Release automation (versioning, changelogs, publishing)
6. CI strategy (affected package detection)
```
# PromptVault Pro — Marketer Prompts

## 1. Full Funnel Strategy
```
You are a CMO with a track record of scaling companies from $1M to $100M ARR.
Given this business:

<company description>
<current metrics>
<target market>

Design a full-funnel marketing strategy:
1. Top of funnel — channels, content types, acquisition cost targets
2. Middle of funnel — nurture sequences, content offers, webinar strategy
3. Bottom of funnel — sales enablement, case study roadmap, demo optimization
4. Retention — upsell triggers, customer marketing, advocacy program
5. Measurement — leading vs lagging indicators for each stage

Be specific: channel selection with rationale, budget allocation %, expected CAC and LTV.
```

## 2. Copywriting: Landing Page
```
Write landing page copy for <product/service>.

Target audience: <describe>
Key objection to overcome: <objection>
Desired action: <CTA goal>
Tone: <tone>

Provide:
1. Headline (5 options with rationale)
2. Subheadline
3. Hero section body (2-3 sentences)
4. Social proof section (testimonial structure, logo placement)
5. Feature list (benefit-driven, not feature-dump)
6. CTA button copy (3 options with A/B test hypothesis)
7. FAQ section (5 most common objections addressed)
```

## 3. SEO Cluster Strategy
```
Design a topic cluster strategy for <niche/industry>.

Seed keyword: <main keyword>
Current domain authority: <DA>
Competitors: <top 3>

Provide:
1. Pillar page outline (structure, internal linking)
2. 10-15 cluster topics (keyword + search intent + target volume)
3. Internal linking structure between pillar and clusters
4. Content format recommendation per cluster (blog, video, interactive, guide)
5. SERP feature opportunities (featured snippets, people also ask)
6. Content calendar (publishing cadence and prioritization)
```

## 4. Email Sequence: Cold Outreach
```
Write a 5-email cold outreach sequence targeting <ideal customer profile>.

Value proposition: <key value prop>
Previous attempts that failed: <what didn't work>

Emails must:
- Have a clear, low-friction CTA per email
- Provide value in every email (not just ask)
- Escalate in urgency naturally
- Include personalisation hooks
- Respect reply frequency limits

Write each email with subject line, body, CTA. Add a follow-up cadence and trigger-based branching.
```

## 5. A/B Test Design
```
Design an A/B test for <element to test>.

Current: <current state>
Goal metric: <primary KPI>
Traffic volume: <monthly visitors>
Current conversion rate: <baseline>

Provide:
1. Hypothesis (structured as: We believe that [change] will result in [impact] because [reason])
2. Variant designs (describe the changes in detail)
3. Sample size calculation (minimum detectable effect, statistical significance)
4. Test duration recommendation (accounting for day-of-week effects)
5. Success metrics (primary + guardrail metrics)
6. Segmentation plan (device, traffic source, new vs returning)
7. Decision framework (what % improvement justifies permanent change)
```

## 6. Social Media Content Calendar
```
Design a 30-day social media content calendar for <brand> on <platform>.

Brand voice: <description>
Goals: <awareness/engagement/conversion>
Posting cadence: <frequency>
Content pillars: <3-4 topics>

For each post provide:
1. Content format (carousel, video, text, image, poll)
2. Hook (first 1-2 lines)
3. Body / caption
4. CTA
5. Visual direction
6. Hashtag strategy (volume, mix)
7. Best time to post
```

## 7. Competitor Analysis
```
Analyse <competitor> for <our company>.

Areas to cover:
1. Positioning and messaging (their story vs ours — gaps and overlaps)
2. Pricing model and strategy
3. Content strategy (what topics, formats, publishing cadence)
4. SEO footprint (top keywords, backlink profile, domain authority)
5. Social media presence (platforms, engagement rates, follower growth)
6. Product gaps (features they have we don't, vice versa)
7. Review sentiment (what customers love and hate)

For each area: actionable recommendation for how we can compete or differentiate.
```

## 8. Product Hunt Launch
```
Plan a Product Hunt launch for <product>.

Key features: <list>

Provide a day-by-day plan from 14 days before to 7 days after launch:
1. Teaser strategy (social posts, newsletter, early access)
2. Maker profile optimisation (badges, past launches, bio)
3. Tagline options (5 variants, A/B test)
4. First comment draft (the story, not the feature list)
5. Hunters to approach (relevant, not mass-DM)
6. Launch day playbook (posting schedule, engagement strategy)
7. Post-launch follow-up (press, partnerships, retargeting)

Include specific metrics targets for each phase.
```

## 9. Pricing Page Strategy
```
Design the pricing page strategy for <product>.

Current pricing: <current>
Competitor pricing: <competitor info>
COGS: <cost to serve>

Provide:
1. Pricing model recommendation (usage-based, tiered, flat, per-seat) with rationale
2. Tier structure (number of tiers, feature breakdown, price anchoring)
3. Psychology tactics (decoy pricing, charm pricing, yearly discount)
4. Trial / freemium mechanics and conversion triggers
5. FAQ section (top pricing objections answered)
6. Upgrade triggers (what behaviour indicates readiness to upgrade)
7. Grandfathering / migration strategy for existing customers
```

## 10. Referral & Viral Program
```
Design a referral program for <product>.

Target customer: <ICP>
Current NPS: <score if known>

Structure:
1. Incentive design (double-sided, single-sided, tiered rewards)
2. Sharing mechanics (email, link, social, in-product)
3. Friction reduction (pre-filled messages, one-click share)
4. Tracking and attribution model
5. Launch strategy (existing customers, email blast, in-app prompt)
6. Fraud prevention (duplicate referrals, fake accounts)
7. Measurement framework (viral coefficient K-factor, referral CAC)

Include specific reward amounts and expected metrics.
```
# PromptVault Pro — Founder / Business Prompts

## 1. Business Model Validation
```
You are a venture partner at a top-tier VC firm. I'm considering:

<business idea>

Validate it:
1. Is this a feature, a product, or a platform? How do you know?
2. TAM/SAM/SOM estimate with methodology (top-down AND bottom-up)
3. Unit economics model (CAC, LTV, payback period, gross margin)
4. Key risks ranked by probability AND impact
5. Which metric must prove itself first before anything else matters?
6. Who would acquire this company and at what stage?
```

## 2. First 90 Days as a New Founder
```
You are a founder who has built and exited. I'm launching <business>.

Day 1-30:
1. What is the single most important thing to build/ship?
2. Who are the first 10 customers and how do you reach them?
3. What NOT to do (distractions to avoid)

Day 31-60:
1. Pricing feedback loop (how to test without commitment)
2. Hiring criteria for first employee (if needed)

Day 61-90:
1. Revenue milestone to hit before external funding
2. When to say no to a customer
```

## 3. Fundraising Pitch Deck Outline
```
Create a pitch deck outline for <business>.

Stage: <pre-seed/seed/Series A>
Ask: <amount>

Slide-by-slide plan:
1. Problem (1 slide — visceral, relatable)
2. Solution (1 slide — product demo / screenshot)
3. Market size (1 slide — top-down + bottom-up)
4. Product (1-2 slides — key features, magic moment)
5. Traction (1 slide — growth curve, revenue, retention)
6. Business model (1 slide — unit economics)
7. Competition (1 slide — 2x2 matrix or table)
8. Team (1 slide — why this team wins)
9. Financials (1 slide — 3-year projection)
10. Ask (1 slide — what you're raising, how it's spent)

For each slide: what to say, what to show, what questions to expect.
```

## 4. Customer Discovery Script
```
Write a customer discovery script for <problem space>.

Ideal interviewee profile: <description>

Structure:
1. Opening (build rapport, set expectations, no selling)
2. Problem exploration (their words, not yours)
3. Current solution (what do they use today, what do they hate)
4. Emotional impact (what's the cost of NOT solving this)
5. Willingness to pay (price sensitivity test)
6. Priority ranking (how urgent is this vs other problems)
7. Close (what to offer them, next steps)

Include specific questions for each section and red flags to listen for.
```

## 5. Growth Metrics Audit
```
Audit the growth metrics for <business>.

Current data: <available metrics>

Build a growth model:
1. North star metric recommendation
2. Input metrics (what drives the north star)
3. Counter-metrics (what breaks if you optimise the north star)
4. Funnel analysis (acquisition → activation → retention → revenue → referral)
5. Leading indicators (what predicts future growth)
6. Lagging indicators (what confirms the trend)
7. Weekly metric review cadence and dashboard structure

Identify the 3 metrics that matter most and what action they should trigger.
```

## 6. Pricing Experiment Framework
```
Design a pricing experiment for <product>.

Current pricing: <current>
Hypothesis: <what you want to test>

Structure:
1. Experiment design (A/B test, cohort analysis, survey-based)
2. Segmentation approach (new customers vs existing, usage tier)
3. Metrics to watch (revenue, conversion, churn, downgrade rate)
4. Statistical significance threshold and minimum sample
5. Duration and go/no-go criteria
6. Worst-case scenario planning (revenue dip, customer outcry)
7. Communication plan if changing pricing for existing customers
```

## 7. Hiring: First 5 Employees
```
You're hiring the first 5 employees for <business type>.

Current: <founder-only or current team>
Funding: <bootstrapped/seed/series>
Culture: <remote/office/hybrid>

For each hire:
1. Role definition (what success looks like in 6 months)
2. Hiring source (personal network, job board, recruiter)
3. Interview process (who interviews, what you're testing for)
4. Compensation strategy (equity vs salary, benchmark)
5. Onboarding plan (first 30 days deliverables)
6. How to know you hired the wrong person (early warning signs)
```

## 8. Churn Analysis & Prevention
```
Analyse churn for <business>.

Current churn rate: <rate>
Customer segment churning most: <segment>
Known reasons: <known issues>

1. Root cause analysis (surviving customers vs churned — what's different)
2. Leading churn indicators (usage drops, support tickets, feature adoption)
3. Intervention triggers (automated emails, human touchpoints) by severity
4. Win-back strategy (offers vs leaving gracefully)
5. Pricing-related churn: discount vs feature unlock approach
6. Exit survey design (max 3 questions, what to ask)
7. Churn prediction model (what data to collect, simple heuristic)
```
# PromptVault Pro — Writer / Content Prompts

## 1. Long-Form Article Writer
```
Write a comprehensive article on <topic> for <target publication>.

Format: <blog post/essay/thought leadership>
Tone: <voice>
Target length: <word count>
Reader persona: <who is reading this>

Structure:
- Hook (opening that creates a knowledge gap or emotional resonance)
- Problem framing (why this matters NOW)
- Evidence section (data, research, case studies with citations)
- Counter-argument / limitations (intellectual honesty)
- Actionable framework (what the reader can do immediately)
- Conclusion + CTA

Include subheadings and suggested pull quotes.
```

## 2. Twitter / X Thread
```
Write a 15-tweet thread on <topic>.

Strategy: <educational/controversial/storytelling>
Goal: <engagement/shares/new followers>

Each tweet:
- Hook tweet (stops the scroll, creates curiosity gap)
- Body tweets (insight + example per tweet)
- Structural variety (data tweet, story tweet, question tweet, list tweet)
- Media suggestions (screenshots, charts per tweet)
- Close tweet (CTA — what to do next)
- Quote tweet bait (what makes people hit retweet with comment)
```

## 3. Video Script (1-3 min)
```
Write a script for a <platform> video on <topic>.

Format: <talking head/screen recording/animation>
Audience: <describe>
Goal: <views/shares/subscribers>

Structure:
1. Hook (first 3 seconds — visual + verbal hook)
2. Problem introduction (relatable pain point)
3. Solution reveal (the insight or method)
4. Demonstration (quick example or walkthrough)
5. CTA (like, subscribe, comment prompt)

Include visual directions, on-screen text overlays, and pacing notes per section.
```

## 4. Thought Leadership Essay
```
Write a thought leadership piece on <topic> from the perspective of a <role> at <company>.

Thesis statement: <core argument>
Target publication: <outlet>
Word count: <target>

Style: Data-driven narrative. Start with a provocative statement or counter-intuitive observation.

Sections:
1. The conventional wisdom
2. Why it's wrong or incomplete (with evidence)
3. The new framework / perspective
4. Practical implications
5. What's next — the controversial prediction

Avoid: sales language, company plugs, buzzwords.
```

## 5. LinkedIn Profile Overhaul
```
Rewrite a LinkedIn profile for <persona>.

Current headline: <current>
Target audience: <recruiters/customers/investors/peers>

Provide:
1. Headline rewrite (5 options — keyword-rich, benefit-driven)
2. About section (narrative arc: before → transformation → now → future)
3. Experience section (results-focused bullet points, not responsibilities)
4. Featured section strategy (what to pin and why)
5. Content strategy (what to post, how often, engagement tactics)
6. Skills and endorsement strategy
7. Profile SEO (keywords per section, headline optimisation)
```

## 6. Case Study Framework
```
Write a case study structure for <customer type> using <product>.

Tone: <educational/testimonial/technical>

Structure:
1. Headline (result-focused or problem-focused)
2. Executive summary (1 paragraph — who, what, result)
3. The challenge (before state — specific metrics)
4. The solution (implementation overview, key decisions)
5. The results (before/after metrics, testimonials, quotes)
6. Lessons learned (what they'd do differently)
7. Next steps for the reader (related resources, consultation CTA)

Include quote prompts for the customer interview and data visualisation ideas.
```

## 7. Newsletter Edition
```
Write a newsletter edition for <publication name>.

Theme: <topic>
Format: <curated/original/hybrid>
Audience: <subscriber profile>

Structure:
1. Subject line (7 options with rationale)
2. Opening personal note (connects to reader's current reality)
3. Main essay (300-500 words — insight, not news)
4. Curated links (3-5 items with context per link)
5. Community section (reader wins, questions, shoutouts)
6. CTA (reply prompt, survey, referral ask)
7. Pre-header text
```

## 8. Sales Page (Long Copy)
```
Write a long-form sales page for <product/service>.

Target customer: <describe>
Price point: <price> (high or low consideration)
Objections: <key objections>

Structure:
1. Headline + subheadline (problem → promise)
2. The enemy / villain (what the customer is fighting)
3. The transformation (before vs after in visceral detail)
4. How it works (simple, 3-step explanation)
5. Social proof (testimonials with results)
6. Risk reversal (guarantee structure)
7. The offer (what's included, bonuses, scarcity)
8. FAQ (handling last objections)
9. Final CTA (urgency + action)
```

## 9. Press Release (Product Launch)
```
Write a press release for <product launch>.

Company: <name>
Target outlets: <publications>
Newsworthiness angle: <what makes this a story>

Format (AP style):
1. Headline and subheadline
2. Dateline + opening paragraph (who, what, when, where, why)
3. Problem statement (industry context)
4. Product description (key features, not a spec sheet)
5. Quote (founder/exec + beta customer/partner)
6. Availability and pricing
7. About company boilerplate
8. Contact and media assets
```

## 10. Personal Brand Voice Guide
```
Define a personal brand voice guide for <person name/role>.

Industry: <industry>
Target audience: <who follows them>
Platforms: <where they publish>

Provide:
1. Core tone axis (5 dimensions: formal/casual, earnest/ironic, specific/abstract, direct/storytelling, optimistic/skeptical)
2. Words to ALWAYS use (brand vocabulary)
3. Words to NEVER use (banned from vocabulary)
4. Sentence rhythm rules (short vs long, questions vs statements)
5. Platform-specific adaptations (LinkedIn vs X vs email)
6. Content categories they own
7. The one sentence that sums up their voice
```
