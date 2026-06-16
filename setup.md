# Job Hunt Knowledge Base — Schema

A self-improving knowledge base for making job applications highly effective. It ingests all past resumes into a rich, searchable wiki, then uses that wiki to produce tailored resumes and cover letters for specific roles, track every application, and surface gaps to work on.

Lexicon: Raw sources · Wiki · Schema · Ingest · Apply · Lint.

---

## The 3 layers

1. **Raw sources** — `raw/` folder. Immutable. Read from here, never modify.
2. **The wiki** — `wiki/` folder. LLM-written synthesis of everything in your career. You own this entirely.
3. **The schema** — this file. Co-evolves with use.

---

## File layout

```
knowledge-base/jobs/
├── raw/
│   └── resumes/                  ← past resumes, drop new ones here (immutable)
├── wiki/
│   ├── index.md                  ← catalog of all wiki pages
│   ├── log.md                    ← append-only history of every operation
│   ├── processed.md              ← registry of every raw file already ingested
│   └── pages/
│       ├── skills.md             ← master skills inventory
│       ├── experience.md         ← full career timeline, roles, responsibilities
│       ├── achievements.md       ← quantified wins and impact statements
│       ├── education.md          ← degrees, certifications, courses
│       ├── projects.md           ← notable projects across all roles
│       ├── keywords.md           ← recurring terms, buzzwords, domain language
│       └── ...                   ← additional pages as needed
├── applications/
│   └── <YYYY-MM-DD>-<company>-<role>/
│       ├── job-description.md    ← raw JD (immutable once saved)
│       ├── gap-analysis.md       ← skill/experience gaps + bridging recommendations
│       ├── resume-draft.md       ← tailored resume (editable)
│       ├── cover-letter-draft.md ← cover letter (editable)
│       ├── resume-final.pdf      ← PDF export, ready to send
│       └── meta.md               ← status, date sent, outcome notes
└── outputs/
    └── tracker.md                ← master log of every application ever sent
```

---

## The 3 operations

### Ingest (resume → wiki)

**Trigger:** a new file appears in `raw/resumes/` that is not yet in `processed.md`, or you paste/drop a resume and say "add this resume".

1. Save the file untouched into `raw/resumes/` with a clear slug (e.g. `2024-tpm-xero.pdf` or `2019-engineer-google.docx`).
2. Read the full resume. Extract everything: every role, date range, company, title, responsibility, achievement, skill, tool, technology, metric, and keyword mentioned.
3. Update wiki pages — a single resume may touch all of these:
   - **`skills.md`** — merge new skills into the master inventory; tag each with proficiency level and recency if inferable.
   - **`experience.md`** — add or enrich the role entry (company, title, dates, key responsibilities in full detail, team size, scope).
   - **`achievements.md`** — extract every quantified or qualifiable win ("reduced deploy time by 40%", "led team of 8", "launched X to Y users"). Keep them as standalone bullet-ready statements.
   - **`projects.md`** — add notable projects with context, stack, and outcome.
   - **`education.md`** — add any new credentials.
   - **`keywords.md`** — note recurring terms and domain language that appear across resumes (useful for ATS optimisation).
4. Update `wiki/index.md` to reflect any new or renamed pages.
5. Append to `wiki/log.md`: `## [YYYY-MM-DD] ingest — <resume slug>`.
6. Record in `wiki/processed.md`: `- [YYYY-MM-DD] raw/resumes/<filename> — pages touched: [[skills]], [[experience]], ...`.

**The wiki is the source of truth for everything in your career. It must be exhaustive and long-form — do not summarise, do not lose detail. More is more.**

---

### Apply (job description → tailored application)

**Trigger:** "apply for this" with a job description pasted or linked, or a file dropped into `applications/`.

#### Step 1 — Save and parse the JD
Create a folder: `applications/<YYYY-MM-DD>-<company>-<role>/`.
Save the job description verbatim as `job-description.md`. Do not modify it after this point.

#### Step 2 — Gap analysis
Read the full wiki (`skills.md`, `experience.md`, `achievements.md`, `projects.md`, `keywords.md`). Compare systematically against every requirement and preference in the JD. Write `gap-analysis.md` with:

- **Strong matches** — requirements where your experience is directly evidenced (cite specific wiki entries).
- **Partial matches** — areas where you have adjacent or transferable experience; note how to frame them.
- **Gaps** — requirements with little or no coverage. For each gap:
  - Assess severity (deal-breaker vs. nice-to-have).
  - Recommend how to bridge it (e.g., framing existing experience differently, a short course, a project to mention).
- **ATS keywords** — list high-value keywords from the JD that should appear in the resume.
- **Overall fit score** — a qualitative summary (strong / moderate / stretch) with reasoning.

Present the gap analysis conversationally so it can be discussed and refined before drafting.

#### Step 3 — Draft resume
Pull from the wiki to produce a tailored `resume-draft.md`. Rules:
- Lead with the strongest matches for this specific role.
- Rewrite responsibility and achievement bullets to echo the JD's language where truthful.
- Include only experience relevant to this role — cut ruthlessly.
- Quantify everything that can be quantified.
- Embed high-value ATS keywords naturally.
- Keep to 1–2 pages unless the role explicitly calls for a longer CV.
- Apply the writing style rules in `.claude/commands/resume-style.md` (the `/resume-style` skill) to every bullet and sentence.

This is a starting draft. Iterate conversationally until approved.

#### Step 4 — Draft cover letter
Write `cover-letter-draft.md` as a 3–4 paragraph letter:
1. Hook — why this role, why this company, right now.
2. Strongest evidence — 2–3 specific achievements that directly address the JD's core asks.
3. Gap acknowledgement (if any) — briefly and positively, where relevant.
4. Close — clear expression of interest and next step.

Apply the writing style rules in `.claude/commands/resume-style.md` (the `/resume-style` skill) to every paragraph.

Iterate conversationally until approved.

#### Step 5 — Finalise and export
When you say "finalise" or "ready to send":

1. **Generate the resume PDF** using the Swiss-grid template in `claude-code-resume-template/`:
   - Populate `claude-code-resume-template/resume-data.js` from the approved `resume-draft.md` (follow the schema in `claude-code-resume-template/README.md`).
   - Run: `node claude-code-resume-template/generate-pdf.js` — this writes `resume.pdf` in the template folder.
   - Move the PDF to `applications/<folder>/resume-final.pdf`.

2. **Generate the cover letter PDF** (if a cover letter was drafted):
   - Populate `claude-code-resume-template/cover-letter-data.js` from the approved `cover-letter-draft.md`.
   - Run: `node claude-code-resume-template/generate-pdf.js cover-letter.html cover-letter.pdf`
   - Move the PDF to `applications/<folder>/cover-letter-final.pdf`.

3. Copy the final resume back to `raw/resumes/<YYYY-MM-DD>-<company>-<role>-final.md` so any new details feed the wiki on next ingest.
4. Run Ingest on that final resume to capture any newly surfaced details into the wiki.
5. Write `meta.md`:
   ```
   company: <name>
   role: <title>
   date_sent: <YYYY-MM-DD>
   resume_used: raw/resumes/<filename>
   cover_letter_used: applications/<folder>/cover-letter-draft.md
   status: sent
   outcome: (fill in later)
   notes: (fill in later)
   ```
6. Append a row to `outputs/tracker.md` (see format below).
7. Append to `wiki/log.md`: `## [YYYY-MM-DD] apply — <company> <role>`.

**PDF toolchain:** `claude-code-resume-template/` contains the templates and `generate-pdf.js` (Puppeteer/headless Chrome). Puppeteer is installed at `claude-code-resume-template/node_modules/`. The script requires Node ≥ 18 and a network connection on first run (Google Fonts). See `claude-code-resume-template/README.md` for full schema and theming notes.

---

### Lint (wiki health check)

**Trigger:** "lint" on demand.

First ingest any new files in `raw/resumes/` not yet in `processed.md`. Then check the wiki for:

- Contradictions (e.g. conflicting dates for the same role).
- Duplicate entries across pages.
- Achievements without metrics that could be quantified with a prompt.
- Skills listed in `skills.md` but not evidenced in `experience.md`.
- Orphan pages with no inbound links.
- Roles in `experience.md` with thin detail — flag for enrichment.
- Keywords that appear in recent JDs you've applied to but are absent from `skills.md` or `keywords.md`.

Fix what can be fixed automatically. Flag the rest under `## Open lint findings` at the top of `log.md`. Append: `## [YYYY-MM-DD] lint — <summary>`.

---

## File formats

### `wiki/log.md`
Append-only, newest at the bottom.
```
## [YYYY-MM-DD] ingest|apply|lint|query — short description
- What changed or was produced
- Pages touched: [[page-a]], [[page-b]], ...
```

### `wiki/processed.md`
```
- [YYYY-MM-DD] `raw/resumes/<filename>` — pages touched: [[skills]], [[experience]], [[achievements]]
```

### `wiki/index.md`
Catalog of every page by category. Entry format: `[[page-name]] — one-line summary`. Updated on every Ingest.

### `outputs/tracker.md`
Master application log. One row per application sent.
```
| Date sent  | Company     | Role                  | Resume file                    | Status    | Outcome  |
|------------|-------------|-----------------------|--------------------------------|-----------|----------|
| 2026-06-16 | Acme Corp   | Senior TPM            | 2026-06-16-acme-tpm-final.md   | sent      | —        |
```

### `applications/<folder>/meta.md`
Per-application metadata (see Step 5 above). Update `status` and `outcome` as the process progresses (e.g., interviewed, offer, rejected, withdrawn).

### Wiki pages in `wiki/pages/`
Plain markdown. Long-form and exhaustive — do not truncate. Use `[[wikilinks]]` to cross-reference. Optional YAML frontmatter (last-updated, source-count) — keep it minimal.

---

## Day-to-day commands

- `add this resume` — Ingest a resume from `raw/resumes/` into the wiki.
- `apply for this` — Start the Apply flow with a pasted or linked job description.
- `gap analysis` — Re-run or deepen the gap analysis for the current application.
- `draft resume` — (Re-)generate the tailored resume draft.
- `draft cover letter` — (Re-)generate the cover letter draft.
- `finalise` — Export PDF, archive final resume, update tracker.
- `what do I know about <topic>` — Query the wiki.
- `lint` — On-demand health check.

---

## Conventions

- `raw/` is never edited. If a past resume contains an error, note the correction in the relevant wiki page — don't touch the source file.
- The wiki is exhaustive by design. When in doubt, keep more detail, not less. Brevity belongs in tailored resumes, not in the wiki.
- Every Ingest and every Apply MUST append a line to `wiki/log.md`.
- Tailored resumes are derived from the wiki, never edited back into it directly — the final resume file archived in `raw/resumes/` is what gets ingested.
- Update `meta.md` and `tracker.md` whenever application status changes, not just on send.
- This schema co-evolves. Append new conventions here as they prove useful.
