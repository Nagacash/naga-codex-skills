# Context management

| Kind | Role |
| --- | --- |
| Project instructions | Facts and rules loaded frequently (`AGENTS.md`, rules) |
| Skills | Repeatable procedures loaded only when relevant |
| Sub-agents | Focused delegated investigations |
| Memory | Useful learned info; must not replace source of truth files |
| Plan mode | Read first planning before expensive implementation |

Use a fresh context when starting unrelated work.
Use compaction only when continuing the same task and context is cluttered.
Do not treat the maximum context window as a target.
Avoid unnecessary file reads and repeated output.
Inspect context usage where the runtime supports it.
