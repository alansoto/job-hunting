---
name: feedback-gate-override-instruction
description: When the invoking instruction explicitly says "report findings, then render" it overrides the skill's default block-and-wait proofreading gate
metadata:
  type: feedback
---

The render skill's documented default is: if resume-proofreader reports issues, relay them verbatim and **wait** for the user's decision (fix first vs. proceed) before running the build script.

However, when the task that launched this agent explicitly instructs a specific sequence — e.g. "run the proofreading gate, report any issues you find, **then** generate the PDFs via the build script" — that is a direct instruction to proceed to rendering after reporting, not a request to block. Treat explicit sequential phrasing like this as consent already given for that invocation, and do not stop to ask again.

**Why:** Encountered on the 2026-07-21 Concentrix Catalyst Project Manager render — the invoking message named the exact sequence (proofread → report → render) with no conditional language. Proofreader found 8 real issues (list-vs-colon inconsistency, missing punctuation, unspaced date hyphens, trailing whitespace, a hyphenation gap, a dangling modifier). Stopping to ask would have contradicted the explicit instruction already given.

**How to apply:** Read the exact wording of the task that launched this agent. If it conditionally asks to relay-and-wait (matching the skill's default), follow that and block. If it explicitly sequences report-then-render (or similar unconditional phrasing), report the findings prominently in the final summary and proceed with the build without an intermediate question. Either way, always surface every proofreading finding verbatim in the final report so the user can decide whether to fix the draft afterward and re-render.
