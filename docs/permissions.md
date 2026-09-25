# Permissions baseline (Allow / Ask / Deny)

Project instructions guide the model. Permission rules, sandboxing, and hooks must
enforce hard restrictions where the agent runtime supports them.

## Allow (routine, low risk)

- Development server, build, test, lint, type check
- `git status`, `git diff`, `git log` (read only)
- Reading and editing normal source files
- Package install **only when the user explicitly requested it**

## Ask (human approval required)

- `git push`
- Creating or merging a pull request
- Deploying production
- Changing DNS or firewall rules
- Installing system packages
- Database changes or migrations
- Destructive commands and file deletes
- Sending external messages
- Spending money
- Accessing production infrastructure
- Reading credentials or secret stores
- Changing agent permissions
- Starting autonomous background agents

## Deny (blocked by default)

- `.env` and `.env.*` except safe examples such as `.env.example`
- Private keys, SSH keys, cloud credentials, API tokens, database passwords
- Production secrets
- Docker socket unless explicitly approved
- Destructive filesystem commands
- Unapproved production deployment
- Secret exfiltration through logs, commits, URLs, or generated files

See `.claude/settings.json` for the machine readable baseline.
