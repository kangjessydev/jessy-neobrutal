<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:docs-check-rules -->
# MANDATORY: Always Check Documentation Before Writing Code

Before writing or modifying any code involving a framework, library, SDK, or API — **you MUST check the latest documentation first** using the **Context7 MCP server**.

## How to use Context7:
1. Call `mcp_context7_resolve-library-id` to get the correct library ID (e.g., "Next.js", "React", "Prisma").
2. Call `mcp_context7_query-docs` with the library ID and a specific query.
3. Only then write or modify the code based on the up-to-date docs.

## This applies to (but not limited to):
- **Next.js** — App Router, routing, server components, layouts, metadata API
- **React** — Hooks, context, server/client components
- **TypeScript** — Type utilities, generics, config
- **Prisma** — Schema, queries, migrations
- **Any other library used in this project**

> ⚠️ Your training data may be outdated. APIs change. Always verify before coding.
<!-- END:docs-check-rules -->
