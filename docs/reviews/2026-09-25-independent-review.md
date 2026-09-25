# Independent review — Naga Codex Skills (2026-09-25)

Reviewer stance: separate from the implementing agent. Scope: skills adaptation + website `/skills` page on `feature/naga-codex-skills`. Live production not modified.

## Findings

| ID | Area | Finding | Classification | Notes |
| --- | --- | --- | --- | --- |
| R1 | Licensing | Adapted skill bodies retain JSMastery structure; ATTRIBUTION + dual MIT notice present. Manual spot-check recommended before public publish. | Accept temporarily | Re-read `ATTRIBUTION.md` at publish time. |
| R2 | Permissions | `.claude/settings.json` Deny patterns are Claude Code oriented; Cursor enforcement differs. | Accept temporarily | Documented; not a substitute for host sandbox. |
| R3 | Token budgets | Portability check warns several hot paths >90% budget after Naga banner injection. | Defer | Shrink support files before they fail CI budgets. |
| R4 | Routing | React Router added; Hostinger SPA fallback via `.htaccess` / `_redirects` documented but untested on live Hostinger. | Accept temporarily | Verify on staging before prod. |
| R5 | Secrets | No secrets in new website files; `.env` gitignored. | False positive risk cleared | OK. |
| R6 | Accessibility | Skills page uses semantic sections, 44px targets, skip not needed on secondary page; FAQ as `dl`. Full axe run not automated. | Defer | Manual keyboard pass on preview before deploy. |
| R7 | Publish URL | Install commands use unpublished `Nagacash/naga-codex-skills`. | Accept temporarily | Intentionally placeholder until approval. |
| R8 | Unrelated WIP | Local `scripts/suggest-skill` and skill-picker rule remain unstaged outside this feature commit set. | Accept temporarily | Out of scope per plan. |

## Security / permissions / licensing / a11y / unintended changes

- No production deploy performed.
- SkillsManualModal / openSourceSkillsRegistry retained.
- No Hostinger credentials or private paths exposed on `/skills`.
- High-impact items (R3 shrink, live Hostinger rewrite test) deferred pending approval.

## Verdict

Safe to keep on feature branch for local preview. **Do not push, merge, or deploy** until human approval after preview check.
