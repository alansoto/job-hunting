# Ingest

Ingest a resume or cover letter source file into the wiki. Triggered by "add this resume", "ingest", or when a new file appears in `raw/resumes/` that is not yet in `processed.md`.

## Steps

1. **Save the file** to `raw/resumes/` with a dated slug (e.g. `Alan-Soto-2026-06-17-Company-Role-Resume.md`). If the user has already placed it there, skip this step.

2. **Read the file fully:**
   - PDFs: use the `Read` tool with the `pages` parameter (max 20 pages per request; required for PDFs over 10 pages)
   - `.md` files: use `Read` without `pages`
   - If a PDF is scanned/image-only and `Read` returns no text, report this — do not guess at content

3. **Extract everything** from the file:
   - Every role: company, title, date range, location
   - Responsibilities and scope (team size, budget, systems)
   - Achievements (quantified wins, outcomes, metrics)
   - Skills and tools mentioned
   - Keywords and domain language
   - Any certifications, education, or credentials

4. **Merge into wiki pages** — update only what has changed or is new:
   - `wiki/pages/skills.md` — add new skills; update proficiency tags (Expert/Experienced/Skillful) and recency
   - `wiki/pages/experience.md` — add or enrich the role entry (full responsibilities, team size, scope)
   - `wiki/pages/achievements.md` — extract every quantified or qualifiable win as standalone bullet-ready statements
   - `wiki/pages/projects.md` — add notable projects with context, stack, and outcome
   - `wiki/pages/education.md` — add any new credentials or certifications
   - `wiki/pages/keywords.md` — add recurring terms and domain language (ATS-relevant)
   - `wiki/pages/positioning.md` — add any new title variants or summary framings used

   The wiki is exhaustive by design — keep more detail, not less.

5. **Update `wiki/index.md`** — add or update page summaries if pages were changed.

6. **Append to `wiki/log.md`:**
   ```
   ## [YYYY-MM-DD] ingest — <resume slug>
   - <bullet: what was added or updated>
   - Pages touched: [[skills]], [[experience]], ...
   ```

7. **Record in `wiki/processed.md`:**
   ```
   - [YYYY-MM-DD] `raw/resumes/<filename>` — pages touched: [[skills]], [[experience]], ...
   ```
