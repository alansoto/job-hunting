# Apply

Start an application for a new role. Triggered by "apply for this" with a job description pasted, linked, or provided as a file.

## Step 1 — Save the JD

Create a folder: `applications/<YYYY-MM-DD>-<company>-<role>/`
Save the job description verbatim as `job-description.md`. Do not modify it after saving.

## Step 2 — Gap analysis

Read the full wiki (`wiki/pages/skills.md`, `experience.md`, `achievements.md`, `projects.md`, `keywords.md`, `positioning.md`, `cover-letter-examples.md`). Compare systematically against every requirement and preference in the JD.

Write `gap-analysis.md` with:
- **Strong matches** — requirements directly evidenced in the wiki (cite specific entries)
- **Partial matches** — adjacent or transferable experience; note how to frame it
- **Gaps** — requirements with little or no coverage; assess severity (deal-breaker vs. nice-to-have) and how to bridge each
- **ATS keywords** — high-value terms from the JD that must appear in the resume
- **Fit score** — qualitative summary (strong / moderate / stretch) with reasoning, or a numeric score

Discuss the gap analysis conversationally before drafting.

## Step 3 — Draft resume

Pull from the wiki to write `resume-draft.md`. The file **must** use the exact format below — `build.js` parses it structurally and any deviation causes the PDF filename to be wrong or the render to fail.

### Required format

```
# Alan Soto
{Role Title}
Brisbane, QLD, Australia
me@alansoto.info
linkedin.com/in/alansoto - https://www.linkedin.com/in/alansoto/

---

## Profile

{One or more summary paragraphs — plain prose, no bullets}

---

## Core skills

{Label}: {item · item · item}
{Label}: {item · item · item}

---

## Experience

### {Company} - {Role Title}
{Start} - {End} · {Location}
{Optional one-line context (company descriptor)}

- {Bullet}
- {Bullet}

### {Next Company} - {Role Title}
...

---

## Earlier

{Single plain-text paragraph summarising older or less-relevant roles.}

---

## Education

{Qualification} · {Institution} · {Note}
{Qualification} · {Institution}
```

### Format rules

- **Preamble** (lines before the first `---`): must be exactly name, role, location, email, linkedin — in that order, no `#` prefix except on the name line. Line 2 (the role) becomes the PDF filename — must not contain `|`, `:`, `*`, `?`, `"`, `<`, `>`, or `\`.
- **Section names** must match exactly (case-insensitive): `## Profile`, `## Core skills`, `## Experience`, `## Education`. `## Earlier` is optional but must use that exact heading if present.
- **Experience entries**: `### Company - Role` (company first, then ` - `, then role). The line immediately after is `dates · location`. The optional third line is a plain-text context descriptor. Bullets follow after a blank line.
- **Core skills**: each line is `Label: item · item · item` — not a grid, not a bullet list.
- **Education**: each line is `qualification · org · note` using ` · ` as the separator.
- Do NOT use `## Professional Summary`, `## Core Competencies`, or `## Employment History` — these are not recognised by `build.js`.

### Content rules

- Lead with the strongest matches for this specific role
- Rewrite bullets to echo the JD's language where truthful
- Include only experience relevant to this role — cut ruthlessly
- Quantify everything that can be quantified
- Embed high-value ATS keywords naturally
- Keep to 1-2 pages unless the role explicitly calls for more
- Apply `/resume-style` rules to every bullet and sentence

Iterate conversationally until approved.

## Step 4 — Draft cover letter

### Before drafting — JD Analysis

Read the JD with fresh eyes and extract:
1. **Primary pain point** — what problem is this team hiring to solve? Look past the bullet list to the underlying need.
2. **Top 3 priorities** — which requirements appear first, repeat, or feel most emphasised?
3. **Culture signals** — what does the JD's tone and word choices reveal about the team?
4. **Best hook angle** — which single achievement from the gap analysis makes the sharpest direct connection to priority #1? Check `cover-letter-examples.md` for a similar role level or hook pattern to use as a reference.
5. **Gap trigger** — is there a genuine domain or industry gap worth acknowledging? (Yes/No + what it is)

Write this as a brief note (5-10 lines) before drafting. It drives every decision in the letter.

---

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
