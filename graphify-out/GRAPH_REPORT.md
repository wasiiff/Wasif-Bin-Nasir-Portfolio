# Graph Report - src  (2026-05-05)

## Corpus Check
- Corpus is ~9,344 words - fits in a single context window. You may not need a graph.

## Summary
- 103 nodes · 57 edges · 1 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Rate Limiter & Auth Cookies|Rate Limiter & Auth Cookies]]

## God Nodes (most connected - your core abstractions)
1. `getUserId()` - 3 edges
2. `setUserTokenCookie()` - 2 edges
3. `setTokenExpiryCookie()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 2 - "Rate Limiter & Auth Cookies"
Cohesion: 0.6
Nodes (3): getUserId(), setTokenExpiryCookie(), setUserTokenCookie()

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._