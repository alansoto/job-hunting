# Ingest

Ingest a resume or cover letter source file into the wiki. Triggered by "add this resume", "ingest", or when a new file appears in `raw/resumes/` that is not yet in `processed.md`.

## Steps

1. **Save the file** to `raw/resumes/` with a dated slug (e.g. `Alan-Soto-2026-06-17-Company-Role-Resume.md`). If the user has already placed it there, skip this step.

2. **Read the file fully:**
   - PDFs: use the `Read` tool with the `pages` parameter (max 20 pages per request; required for PDFs over 10 pages)
   - `.md` files: use `Read` without `pages`
   - If a PDF is scanned/image-only and `Read` returns no text, report this — do not guess at content

3. **Detect file type** — check whether the file is a resume or a cover letter (filename contains "Cover-Letter", or content has no role/date structure and reads as a letter). Then follow the matching branch below.

---

### Branch A — Resume

**Extract everything from the file:**
   - Every role: company, title, date range, location
   - Responsibilities and scope (team size, budget, systems)
   - Achievements (quantified wins, outcomes, metrics)
   - Skills and tools mentioned
   - Keywords and domain language
   - Any certifications, education, or credentials

**Merge into wiki pages** — update only what has changed or is new:
   - `wiki/pages/skills.md` — add new skills; update proficiency tags (Expert/Experienced/Skillful) and recency
   - `wiki/pages/experience.md` — add or enrich the role entry (full responsibilities, team size, scope)
   - `wiki/pages/achievements.md` — extract every quantified or qualifiable win as standalone bullet-ready statements
   - `wiki/pages/projects.md` — add notable projects with context, stack, and outcome
   - `wiki/pages/education.md` — add any new credentials or certifications
   - `wiki/pages/keywords.md` — add recurring terms and domain language (ATS-relevant)
   - `wiki/pages/positioning.md` — add any new title variants or summary framings used

   The wiki is exhaustive by design — keep more detail, not less.

---

### Branch B — Cover letter

**Ask the user one question before extracting:**
> "What specifically did you like about this cover letter? (tone, a paragraph, the hook, the whole thing — anything helps)"

Record their answer as the `what_worked` note for this entry.

**Extract from the letter:**
- **Role type** — company, role title, seniority level (mid / senior / head), date
- **Hook pattern** — how the letter opens: what JD signal it connects to, what past project/achievement it names, and whether it uses a "When I read..." style or a context-setting opener
- **Body format** — bullets or prose paragraphs; how many; rough word count
- **Tone markers** — specific phrases, sentence constructions, or moments that make it feel human rather than templated; note any intentional deviations from the standard style rules
- **Gap acknowledgement** — none, or how it was framed (domain gap, industry gap, etc.)
- **ATS keywords** — any domain terms embedded naturally

**Merge into `wiki/pages/cover-letter-examples.md`** — add a new entry using this format:

```
### [Company] — [Role Title] ([YYYY-MM-DD])
**Role level:** [mid / senior / head]
**Hook pattern:** [description — what JD signal, what past achievement, what opening style]
**Body format:** [bullets / prose / N paragraphs — word count]
**Tone markers:** [specific phrases or constructions worth reusing]
**Gap acknowledgement:** [none / description of how it was framed]
**What worked:** [user's answer]
```

Also update:
- `wiki/pages/keywords.md` — any new domain terms found
- `wiki/pages/positioning.md` — any new framing or gap-bridging language worth preserving

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
