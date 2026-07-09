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

Proceed directly to Step 3 without waiting for confirmation.

## Step 3 — Draft resume

Pull from the wiki to write `resume-draft.md`. First choose a format, then write the file in exactly that format — the build scripts parse structurally and any deviation causes a wrong PDF filename or a failed render.

### Choosing a format

- **Format A — Standard (bullet points).** The default. Clean, ATS-friendly, one skill grid, bullet-only experience. Rendered by `build.js`. Best for most roles, especially contract or keyword-heavy ones.
- **Format B — Narrative / hybrid (story style).** Recent roles (roughly the last six years) are told as a short background paragraph + a `Challenge & Impact` (Problem/Solution) block + `Key Contributions` bullets; older roles stay as plain bullets. Rendered by `build-narrative.js`. Best for senior roles where judgement and narrative carry weight, or when the user wants to stand out from lookalike resumes.

Use Format A unless the user asks for the narrative/story format (or the role clearly benefits from it). If unsure, ask.

### Format A — Standard (bullet points)

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

### Format B — Narrative / hybrid (story style)

Rendered by `build-narrative.js`. Same preamble rules as Format A (name, role, location, email, linkedin — the role line becomes the PDF filename). Differences: skills is a plain `## Skills` bullet list (not `## Core skills`), and certifications get their own `## Certifications` section.

```
# Alan Soto
{Role Title}
Brisbane, QLD, Australia
me@alansoto.info
linkedin.com/in/alansoto - https://www.linkedin.com/in/alansoto/

---

## Profile

{summary paragraph — plain prose}

## Skills

- {skill}
- {skill}

## Experience

### {Recent Company} - {Role}
{Start} - {End} · {Location}

{Background: one or two label-less prose paragraphs, straight into the content — no heading}

**Challenge & Impact**
- **Problem:** {the core problem the role/program faced}
- **Solution:** {what you did and the impact or result}

**Key Contributions**
- {supporting bullet}
- {supporting bullet}

### {Older Company} - {Role}
{Start} - {End} · {Location}

- {bullet}
- {bullet}

## Earlier

{single prose paragraph for older, pre-cutoff roles}

## Education

{Qualification} · {Institution} · {Note}

## Certifications

{Name} · {Year}
```

Format B rules:
- **Cutline** — roles within roughly the last six years (judge by today's date) use the narrative structure (background + `**Challenge & Impact**` + `**Key Contributions**`); older roles use plain `- ` bullets only. If a role sits on the boundary, state your call so the user can move it.
- **Section markers** inside an experience entry must be exactly `**Challenge & Impact**` and `**Key Contributions**` — bold, each on its own line. Their presence is the signal `/render` uses to pick `build-narrative.js`, so do not rename them.
- **Problem / Solution labels** — write the two Challenge & Impact bullets as `- **Problem:** ...` and `- **Solution:** ...`. The bold labels are deliberate structural labels — the one sanctioned exception to the `/resume-style` no-bold rule.
- **Skills** — plain `## Skills` bullet list, one skill per line, no `Label:` prefixes.
- **Certifications** — `## Certifications` section, each line `Name · Year`.
- Keep each narrative role tight: a background paragraph, two Challenge & Impact bullets, two or three Key Contributions bullets. Aim the whole resume at 2-3 pages.

### Content rules

- Lead with the strongest matches for this specific role
- Rewrite bullets to echo the JD's language where truthful
- Include only experience relevant to this role — cut ruthlessly
- Quantify everything that can be quantified
- Embed high-value ATS keywords naturally
- Keep to 1-2 pages unless the role explicitly calls for more
- Apply `/resume-style` rules to every bullet and sentence

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

````
``` salutation ```
Dear Hiring Team,

``` paragraphs ```
Paragraph one...

Paragraph two...

- Bullet one
- Bullet two

Paragraph three...

``` signOff ```
Sincerely,
````

Rules:
- Each section starts with a `` ``` section-name ``` `` marker on its own line
- `salutation` — the greeting line exactly as it should appear (e.g. `Dear Hiring Team,` or `Dear Jane,`)
- `paragraphs` — body content; blank lines separate paragraphs; `- ` lines become bullet lists
- `signOff` — one line: `Sincerely,` / `Regards,` / `Kind regards,`
- Do NOT include a contact header block (name/email/LinkedIn) — `build.js` injects those automatically
- Structure: hook → strongest evidence → gap acknowledgement (if any) → close (3-4 paragraphs)
- Apply `/resume-style` rules to every paragraph

## Step 5 — Finalise

When the user says "finalise", invoke `/finalise`.
