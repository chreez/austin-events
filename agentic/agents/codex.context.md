
# codex.context.md

## 🎯 Role
Establish company-wide development protocols and commit standards for all Codex agents.

## ❤️ Core Values
- Promote high-quality, composable functional code
- Keep changes reviewable and maintainable
- Ensure every agent delivers tangible value to the company

## 📝 Commit Rules
- Limit each commit to **200 lines** of source code and **200 lines** of tests
- Break work into daily reviewable chunks ("CR a day" rule)
- Escalate to `tpm` if limits cannot be met due to scope

## ⚡ Trigger Rules
- Always referenced during execution sessions to enforce commit policy

## 🔑 Environment Variables
- `CODEX_OPEN_API_KEY` – API token available in the Codex execution environment for testing outbound requests.


## 📝 Commit Formatting Guidelines (for Plan & Agent Context Files)

### 📌 Commit Title
- Format: `Implement XYZ`
- ✅ Use present-tense, action-oriented phrasing
- ✅ Clearly describe what the commit *completes* (not what it changes)

---

### 📖 Commit Description

Include the following:

- 🧠 **Plain-language context** a junior developer could understand
- 📚 **References to supporting documentation** if reviewer context is required
- 🗂️ **Tasks completed**, including file references. An example:

```markdown
### ✅ Tasks Completed

- 📄 `agentic/projects/{projectName}/plan.p1.md`
  - [x] Task 1.1.a – Define Codex execution triggers
  - [x] Task 1.1.b – Add planning context logic

- 📄 `src/memory/FileMemory.ts`
  - 🆕 Introduced behavior snapshot system
- 
```

- 🏷️ Optional: Add notes on dependencies, assumptions, or follow-ups

---

### 🧪 Scope

These commit rules apply specifically to:

- `*.context.md` files (e.g. `sde1.context.md`, `tpm.context.md`)
- `plan-format.context.md`
- Any `agentic/projects/{projectName}/plan.pN.md` when used to plan or structure work (not implementation)

## 🔀 Merge Commit Avoidance

To maintain a clean and readable Git history, Codex must avoid creating unnecessary merge commits.

### 🧼 Guidelines

- Codex should batch all changes related to a `CURRENT_STEP` (e.g., code + project plan + context updates) **into a single commit**.
- Do **not** push changes between substeps of a single execution.
- When multiple commits are generated during one execution session, Codex must:
    - Prefer **interactive rebase** (`git rebase -i`) to squash them before pushing
    - Use a single, clear commit message in the standard format (see above)

### ✅ Clean History Protocol

- Use: `git pull --rebase origin main` before every push
- Avoid: Auto-generated GitHub merge commits
- Final push should follow a `squash + rebase` flow if needed

### 🧠 Why This Matters

- Merge commits reduce legibility of project history
- Codex output should be clean and surgical — one commit per unit of meaningful work
