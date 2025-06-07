
# 📐 `plan-format.context.md`

## 🧱 Structure Overview

Project plans are divided by phase and follow a consistent nested hierarchy:

```
projectplan-${projectName}.p{N}.md
```

Each phase plan contains:

1. 🎯 MVPs
2. 🧱 Steps
3. 📘 Stories
4. ✅ Tasks
5. 🔨 Subtasks

---

## 🪜 Hierarchy Format

### 🎯 MVPs (High-level goals)
```markdown
## 🎯 MVPs
- [ ] ${projectName}.p{N} - MVP 1 – Clear statement of value
- [ ] ${projectName}.p{N} - MVP 2 – ...
```

---

### 🧱 Steps (Grouped functional goals)
Steps group related features. **A single step can contain multiple stories** that
collectively deliver the functionality for that area.
```markdown
## 🧱 ${projectName}.p{N} - Step 1 – Authentication Layer
```

---

### 📘 Stories (Narrative-driven outcomes)
A step may include **several stories**. Each story expands into tasks that drive
implementation.
```markdown
### 📘 ${projectName}.p{N} - Story 1.1 – "As a user, I want to log in securely"

- [ ] Task 1.1.a – Create login UI component
- [ ] Task 1.1.b – Implement backend login endpoint
- [ ] Task 1.1.c – Integrate with session manager
```

---

### ✅ Tasks (Atomic work units)
```markdown
- [ ] Task 1.1.a – Create login UI component
```

---

### 🔨 Subtasks (Optional if task is complex)
```markdown
  - [ ] Subtask 1.1.a.1 – Render HTML form
  - [ ] Subtask 1.1.a.2 – Connect to submit handler
```

---

## 🧾 Formatting Rules

- Always use markdown checkboxes `[ ]` / `[x]`
- Indent subtasks under their parent tasks
- Every item must have a unique hierarchical ID (e.g., `1.2.b.1`)
- Emojis are required for clarity and quick parsing
- Use active voice and action-oriented task descriptions

---

## 🚦 Status Tags (Optional)

Use inline tags to indicate metadata:

- `🏃‍♂️ Parallel` → Can be run concurrently
- `🔒 Blocked` → Requires dependency
- `🧪 Test` → Denotes test-focused tasks
- `📦 External` → Indicates third-party or infra-dependent

---

## 🧠 Example Block

```markdown
## 🎯 MVPs
- [ ] MVP 1 – Reliable Auth Flow

## 🧱 ${projectName}.p{N} - Step 1 – Auth Core

### 📘 ${projectName}.p{N} - Story 1.1 – Login Feature

- [ ] Task 1.1.a – Login UI
  - [ ] Subtask 1.1.a.1 – HTML form
  - [ ] Subtask 1.1.a.2 – Validation logic
- [ ] Task 1.1.b – API endpoint

### 📘${projectName}.p{N} - Story 1.2 – Signup Flow

- [ ] Task 1.2.a – Signup UI
- [ ] Task 1.2.b – Signup backend
```

---

## 📁 File Naming

Each project phase is saved in:
```
projects/${projectName}/plan.p{N}.md
```
For example:
- `projects/groceryaudit/plan.p0.md`
- `projects/agenticplatform/plan.p1.md`

---

## 🚀 Phase Releases
- Each phase results in a testable release.
- Finishing a phase triggers a review of all agent roles.
- Publish an announcement or changelog describing new features and usage.

## ✏️ Phase Kickoff Design
- Start every phase with a brief human-in-the-loop design stop.
- Document open questions as `Step 0 – Design Clarification` in the phase plan.
- Resume work only after Chris provides direction.
