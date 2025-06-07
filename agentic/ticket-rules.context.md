# ticket-rules.context.md

## 🎯 Purpose
Define how Codex creates and manages tickets for tasks in the `agentic` workspace.

## 📁 File Naming
- Tickets live in `agentic/project/<projectName>/tickets/<year>/`.
- Filenames follow `${UTC-Date}-<short-title>.md` using the format `YYYY-MM-DD`.
- Example: `agentic/project/demo/tickets/2025/2025-06-06-fix-login.md`.

## 🔗 GitHub Issues
- If a ticket originates from a GitHub issue, include a link to the issue at the top of the file.
- Refer to `github.context.md` for how to use the GitHub CLI when manipulating issues.

## ✅ Resolution
- Once Chris (`chreez` on GitHub) confirms a fix, rename the ticket file by appending `.resolved` before the `.md` extension.
- Do **not** mark a ticket as resolved until that confirmation is received.

