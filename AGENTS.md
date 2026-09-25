# AGENTS.md — naga-codex-skills repository

## What this repo is

Markdown Agent Skills for the Naga Codex Engineering Workflow. Not an application.

## Commands

- `npm run check` — portability checks
- `npm run validate:meta` — evaluation case presence
- `npm test` — check + validate

## Layout

- `skills/<name>/SKILL.md` — skill entry points
- `docs/` — workflow guide, permissions, plan mode, context
- `evaluations/` — eval cases per skill
- `.claude/settings.json` — Allow / Ask / Deny baseline for Claude Code

## Rules

- Do not invent a public GitHub URL if unpublished; keep placeholders honest.
- - Prefer small, reviewable edits to skill text.
- Never commit `.env`, keys, or production secrets.
