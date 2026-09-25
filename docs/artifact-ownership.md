# Artifact ownership

| Artifact | Path | Owner skill |
| --- | --- | --- |
| Scope | `docs/scope/` | `scope` |
| Specs | `docs/specs/` | `architect` |
| Context | `AGENTS.md` (+ thin `CLAUDE.md` pointer) | `audit` (created), `sync` (maintains) |
| Design system | `design.md` | `develop` |
| Review findings | `docs/reviews/` | `check` |
| Tests | project test dirs | `test` |
| App code | source tree | `develop` / `debug` |
| Human docs | PR body, `CHANGELOG.md`, `docs/releases/`, `docs/postmortems/` | `document` |

If `docs/` is a published docs site, move workflow state to `.workflow/` so it does not ship with the site.
