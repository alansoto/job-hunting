# Apply

Start an application for a new role. Triggered by "apply for this" with a job description pasted, linked, or provided as a file.

## Step 1 — Save the JD

Create a folder: `applications/<YYYY-MM-DD>-<company>-<role>/`
Save the job description verbatim as `job-description.md`. Do not modify it after saving.

## Step 2 — Gap analysis

Read the full wiki (`wiki/pages/skills.md`, `experience.md`, `achievements.md`, `projects.md`, `keywords.md`, `positioning.md`). Compare systematically against every requirement and preference in the JD.

Write `gap-analysis.md` with:
- **Strong matches** — requirements directly evidenced in the wiki (cite specific entries)
- **Partial matches** — adjacent or transferable experience; note how to frame it
- **Gaps** — requirements with little or no coverage; assess severity (deal-breaker vs. nice-to-have) and how to bridge each
- **ATS keywords** — high-value terms from the JD that must appear in the resume
- **Fit score** — qualitative summary (strong / moderate / stretch) with reasoning, or a numeric score

Discuss the gap analysis conversationally before drafting.

## Step 3 — Draft resume

Pull from the wiki to write `resume-draft.md`. Rules:
- Lead with the strongest matches for this specific role
- Rewrite bullets to echo the JD's language where truthful
- Include only experience relevant to this role — cut ruthlessly
- Quantify everything that can be quantified
- Embed high-value ATS keywords naturally
- Keep to 1-2 pages unless the role explicitly calls for more
- Apply `/resume-style` rules to every bullet and sentence

Iterate conversationally until approved.

## Step 4 — Draft cover letter

Write `cover-letter-draft.md`. Use this exact format (required for `build.js` to parse correctly):

```
Recipient: Full Name, Job Title, Company Name, City State

Dear Full Name,

Paragraph one...

Paragraph two...

Sincerely,
```

Rules:
- The `Recipient:` line is optional — omit if the hiring manager is unknown
- Do NOT include a contact header block (name/email/LinkedIn) — `build.js` injects those automatically
- Sign-off must be on its own line: `Sincerely,` / `Regards,` / `Kind regards,`
- Structure: hook → strongest evidence → gap acknowledgement (if any) → close (3-4 paragraphs)
- Apply `/resume-style` rules to every paragraph

Iterate conversationally until approved.

## Step 5 — Finalise

When the user says "finalise", invoke `/finalise`.
