# Naga Codex Engineering Workflow Skills

![Naga Codex Skills](./assets/hero-banner.jpg)

A set of [Agent Skills](https://agentskills.io) that take a change from a vague idea to
shipped, verified, documented code, for any AI coding agent. One skill per phase.
Run only the ones a change needs.

MIT licensed. See [LICENSE](./LICENSE) and [ATTRIBUTION.md](./ATTRIBUTION.md) for copyright notices.

State lives in files (`docs/scope/`, `docs/specs/`, `AGENTS.md`, tests), not in a chat session.

```
idea → /scope → /audit → /architect → /develop → /check verify → /test → /check review → /document → /sync
```

Run `/debug` anytime something breaks. Run bare `/scope` anytime to see where things stand.

![Nine-phase workflow](./assets/workflow-pipeline.jpg)

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

Public repository: [Nagacash/naga-codex-skills](https://github.com/Nagacash/naga-codex-skills)

```bash
# All skills (Agent Skills compatible clients)
npx skills@latest add Nagacash/naga-codex-skills

# One skill
npx skills@latest add Nagacash/naga-codex-skills --skill scope

# Claude Code
npx skills@latest add Nagacash/naga-codex-skills -a claude-code
```

Verified clients: Cursor, OpenAI Codex (`.agents/skills`), OpenCode, Claude Code,
and other [Agent Skills](https://agentskills.io/clients) clients.

<p align="center">
  <img src="./assets/emblem.jpg" alt="Naga Codex Skills emblem" width="220" />
</p>

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
Copyright notices for upstream MIT portions are recorded in LICENSE and ATTRIBUTION.md.
