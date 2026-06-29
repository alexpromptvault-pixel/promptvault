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
