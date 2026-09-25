# Naga Codex Engineering Workflow Skills

A set of [Agent Skills](https://agentskills.io) that take a change from a vague idea to
shipped, verified, documented code, for any AI coding agent. One skill per phase.
Run only the ones a change needs.

**Adapted from** the [JSMastery Engineering Workflow](https://github.com/jsmastery-pro/skills)
(MIT). Not affiliated with JavaScript Mastery. See [ATTRIBUTION.md](./ATTRIBUTION.md).

State lives in files (`docs/scope/`, `docs/specs/`, `AGENTS.md`, tests), not in a chat session.

```
idea → /scope → /audit → /architect → /develop → /check verify → /test → /check review → /document → /sync
```

Run `/debug` anytime something breaks. Run bare `/scope` anytime to see where things stand.

## The skills

| Skill | What it does |
| --- | --- |
| `scope` | Turns a product idea into a living coarse scope in `docs/scope/`. |
| `audit` | Writes `AGENTS.md` context files every other skill reads. |
| `architect` | Records load bearing decisions as build specs in `docs/specs/`. |
| `develop` | Implements an approved specification. |
| `check` | `/check verify` runs the real app; `/check review` is fresh eyes review. |
| `test` | Writes and runs meaningful tests. |
| `document` | PR text, changelog, release notes, or postmortems from the real diff. |
| `sync` | Reconciles AGENTS.md, scope, and specs with the codebase. |
| `debug` | Finds root cause and hands a regression test to `/test`. |

## Install

> **Repository status:** public install works only after
> `https://github.com/Nagacash/naga-codex-skills` is published.
> Until then, install from this local path.

### Placeholder (after publish)

```bash
# All skills (Agent Skills compatible clients)
npx skills@latest add Nagacash/naga-codex-skills

# One skill
npx skills@latest add Nagacash/naga-codex-skills --skill scope
```

### Local path (available now)

```bash
npx skills@latest add /Volumes/MPC_CODE/coding/nagacodex/projects/naga-codex-skills
```

Verified clients: Cursor, OpenAI Codex (`.agents/skills`), OpenCode, Claude Code
(`-a claude-code`), and other [Agent Skills](https://agentskills.io/clients) clients.

## Where to start

- **Greenfield:** `/scope` → `/architect` (stack) → scaffold → `/audit` → feature loop.
- **Brownfield:** `/audit` first, then `/scope` the next slice.
- **Bug:** `/debug` then `/test`.

Workflow depth (suggested checking tail after `/develop`): Prototype, Alpha, Beta, GA.
See `docs/workflow-guide.md`.

## Security

Skills are instructions and may reference scripts. Inspect before installing.
Never commit secrets. Production deploy, DNS, credentials, and destructive actions
require explicit human approval. See `docs/permissions.md`.

## License

MIT. Copyright (c) 2026 Naga Codex / Maurice Holda.
Adapted portions retain Copyright (c) 2026 JavaScript Mastery (MIT).

Source commit used for adaptation: `43b69e44c9ca905fe3a3418ccdf4102255e20d40` (cloned 2026-09-25).
