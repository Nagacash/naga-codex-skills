# Plan mode

## Use plan mode for

Database changes, authentication, authorization, migrations, payment systems,
production infrastructure, large refactors, multi subsystem changes, new external
providers, destructive operations, changes that are hard to undo.

## Do not require plan mode for

Obvious small changes: heading text, spacing, typos, isolated style fixes,
straightforward test updates.

## A useful plan includes

Current codebase understanding, proposed architecture, files expected to change,
data model changes, migration strategy, security considerations, verification
strategy, rollback or recovery, unresolved questions, assumptions.

The agent must not modify production source code while in read only planning mode.
Approval of a plan is clearly separated from implementation.
