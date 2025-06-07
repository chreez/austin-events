# Retrospective Task Format

This ruleset defines how verification tasks are written for phase retrospectives.
Each task includes:

1. **Title** – short summary of the step
2. **Context** – why this task matters
3. **Command** – copy-paste command to run
4. **Expected Output** – what success looks like
5. **Why It Helps the Future** – how the result informs next-phase plans

Example:

### ✅ Build the CLI

**Context**: Ensure packaging succeeds.

**Command**
```bash
npm run bundle
```

**Expected Output**: `dist/agentic` appears with no build errors.

**Why It Helps the Future**: Confirms the bundling process is stable for distributing future releases.

---
chris: codex-> fix the formatting
The following prompts help collect feedback for the next phase. Use discretion to adapt them per role:
  - **SDE2** → CLI or packaging wishes?
  - **SDE3** → architecture or integration ideas?
  - **TPM** → docs or onboarding gaps?
  - **CEO** → overall product or business direction?
