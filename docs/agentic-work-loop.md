# Agentic work loop

1. Gather relevant context.
2. Inspect existing code and conventions.
3. Decide whether the task is simple or needs planning.
4. Use `/scope` if the work is vague or larger than one small change.
5. Use `/architect` for database, auth, migrations, providers, integrations, large refactors, or multi system decisions.
6. Use plan mode when the approach is expensive or hard to undo.
7. Ask clarifying questions instead of inventing unresolved decisions.
8. Implement in small steps.
9. Run verification (`/check verify`).
10. Write tests (`/test`).
11. Request independent review (`/check review`).
12. Document the change (`/document`).
13. Synchronize context files (`/sync`).
14. Ask for approval before merge or deployment.
