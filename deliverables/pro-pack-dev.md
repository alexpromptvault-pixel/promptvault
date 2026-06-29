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
