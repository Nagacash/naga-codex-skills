# Security rules

- Never read or commit `.env`, private keys, cloud credentials, API tokens, or database passwords.
- `.env.example` is allowed when it contains placeholders only.
- Ask before push, PR merge, deploy, DNS, firewall, migrations, destructive deletes, or spending money.
- Deny Docker socket and production deploy unless the human explicitly approved in this session.
- Do not exfiltrate secrets through logs, commits, URLs, or generated files.
