
# 🚀 `execute.context.md`

## 🎯 Purpose

This file defines how to **initiate a coding or planning session** using Codex.  
It manages scoped work via **lever-based execution** and **role-aware context triggering**, ensuring modular and auditable progress.

## 📌 Current Project & Phase

Codex must keep track of the project and phase being worked on.

- **Project**: `austin-events`
- **Phase**: `p1`
- **Plan**: [projects/austin-events](./projects/austin-events/plan.p1.md)
---

## 🧩 Behavior Modes

Codex determines the type of session based on the user's intent.

### 🛠️ Execution Mode ("complete", "code", "implement")
- Performs code changes, testing, and file edits
- Always results in updates to:
  - `projectplan-${projectName}.p*.md`
  - Relevant source/test files
- Contexts are chosen based on what is needed to **complete** the `requestedWorkByChris`

### 🧠 Planning Mode ("plan", "define", "refactor phase/story/task")
- Focuses on idea development, scope setting, restructuring
- No implementation occurs
- Only modifies:
  - `projectplan-p*.md`
  - `*.context.md` files (including agents, e.g. `sde3.context.md`)
- Codex should decide context inclusion based on the scale of planning:
  - Plan phase → `tpm`, `sde3`, optionally `svp`
  - Plan story/task → `sde2`, `sde3`, `tpm`
  - Plan N+1/N+2 → `tpm`, `svp`, optionally `ceo`
  - When Phase N-1 is complete, plan across phases as:
    - Phase N: current, fully scoped
    - Phase N+1: definite possibilities, somewhat scoped
    - Phase N+2: cool ideas, wacky or creative
---

## 🌐 Agent Awareness

All agents are aware of `company.context.md` and must apply company **tenets** in decision-making.

Each `.context.md` file represents an **autonomous role** with scoped decision boundaries.  
They may reference each other, propose updates, or escalate feedback.
---

## 🧾 Input: `requestedWorkByChris`

This value scopes the work for the session. Valid granularities:
- `phaseN`
- `pX`, `sY`, `taZ`, `stW`
---

## 🪜 Lever System

Codex uses:

```
CURRENT_STEP = phaseN.pX.sY.taZ.stW
```
---

## 🧭 Session Type → Context Routing

| Session Type       | Triggers Contexts                               |
|--------------------|--------------------------------------------------|
| 🔧 Code/Execute     | `sde1`, `sde2`, `sde3`, (optionally `tpm`)       |
| 🧠 Plan Phase N     | `tpm`, `sde3`, `svp`                             |
| 🧠 Plan Phase N+1   | `tpm`, `svp`, (optionally `ceo`)                 |
| 🧠 Plan Story/Task  | `sde2`, `sde3`, (optionally `tpm`)               |
| 🧰 Agentic Behavior | `agents/codex.context.md`                        |
| 🎫 Ticket Management | `ticket-rules.context.md`                       |

## 📣 Trigger Rules by Role
- `agents/ceo.context.md` -> invoked when Chris asks for company strategy or planning beyond next phase. Also triggered when `agents/svp.context.md` escalates multi-phase decisions.
- `agents/svp.context.md` -> used for phaseN+1 planning and executive reviews, or when `agents/tpm.context.md` escalates.
- `agents/tpm.context.md` -> default for phaseN planning, backlog triage, or escalation from `agents/sde3.context.md`.
- `agents/sde3.context.md` -> triggered for large architectural stories or when `agents/sde2.context.md` escalates.
- `agents/sde2.context.md` -> handles most story or task work. Escalates to `agents/sde3.context.md` on major uncertainty.
- `agents/sde1.context.md` -> handles straightforward subtasks, escalating to `agents/sde2.context.md` when scope grows.


## 📣 Trigger Rules by Role
- `ceo.context.md` -> invoked when Chris asks for company strategy or planning beyond next phase. Also triggered when `svp` escalates multi-phase decisions.
- `svp.context.md` -> used for phaseN+1 planning and executive reviews, or when `tpm` escalates.
- `tpm.context.md` -> default for phaseN planning, backlog triage, or escalation from `sde3`.
- `sde3.context.md` -> triggered for large architectural stories or when `sde2` escalates.
- `sde2.context.md` -> handles most story or task work. Escalates to `sde3` on major uncertainty.
- `sde1.context.md` -> handles straightforward subtasks, escalating to `sde2` when scope grows.


---

## 🧰 `agents/codex.context.md`

- This special agent defines company coding standards and modifies how Codex behaves at a meta-level.
- It adjusts or updates:
  - Context file logic
  - Session flow logic
  - Role responsibilities
- Should only be invoked by `Chris` directly
- Acts like a real-time snapshot debugger for evolving Codex itself
---

## 🧠 Persistent Awareness

All agents must:
- Consider `company.context.md`
- Adhere to company tenets
- Reflect changes in philosophy or behavior back into their own `.context.md` file
- Observe commit policies in `agents/codex.context.md`
- Follow `ticket-rules.context.md` when working with tickets
- Update `documentation/*` where applicable; if docs are irrelevant to the change, note it in the commit

---

## ✅ Session Completion

A session ends when:

- `requestedWorkByChris` is completed
- Triggered agent contexts have made all updates
- All touched `.md` files and code are saved and staged

## 🚀 Retrospective of Phase Completion
When a phase's final story is done:
- Chris briefly reviews the plan and marks tasks complete. 
- Codex may handle docs or announcements if delegated.
- Use `retrospective.format.md`as a guid.
- This review process should be its own story.

