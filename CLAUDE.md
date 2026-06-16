# CLAUDE.md — Job Hunt Knowledge Base

This repo is a **self-improving job-application knowledge base**. It ingests past resumes into a long-form wiki, then uses that wiki to produce tailored resumes + cover letters, track applications, and surface skill gaps.

**`setup.md` is the authoritative schema.** Read it for full detail on operations and formats. This file is the operating summary — when the two conflict, `setup.md` wins, and you should update this file to match.

## Layout (rooted directly at repo root)

```
raw/resumes/      immutable source resumes — READ ONLY, never edit
wiki/
  index.md        catalog of pages — update on every Ingest
  log.md          append-only op history; "Open lint findings" lives at top
  processed.md    registry of ingested raw files
  pages/          skills, experience, achievements, education, projects, keywords
applications/<YYYY-MM-DD>-<company>-<role>/   one folder per application
outputs/tracker.md   master table of every application sent
```

## The three operations

- **Ingest** (`add this resume`): Save resume to `raw/resumes/` with a dated slug → read it fully → extract *everything* (roles, dates, responsibilities, achievements, skills, tools, metrics, keywords) → merge into the relevant `wiki/pages/` → update `index.md` → append to `log.md` → record in `processed.md`.
  - **Sources are PDFs (historical originals) and `.md` files (finalised applications going forward).** Read PDFs with the `Read` tool's `pages` parameter (it extracts PDF text/visuals directly — no conversion needed; max 20 pages/request, required for PDFs over 10 pages). Don't shell out to `pdftotext`/`cat`. If a PDF is scanned/image-only and `Read` returns no text, say so rather than guessing at content. For `.md` files use `Read` without the `pages` parameter.
- **Apply** (`apply for this` + a JD): Create `applications/<date>-<company>-<role>/` → save JD verbatim as `job-description.md` → write `gap-analysis.md` (strong/partial/gaps + ATS keywords + fit score), discuss it → draft `resume-draft.md` then `cover-letter-draft.md`, iterate → on **`finalise`**: run `node claude-code-resume-template/build.js applications/<folder>/` (optionally append company name as second arg if it's multi-word, e.g. `"Sharp & Carter"`), copy **both markdown sources** to `raw/resumes/` as `Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Resume.md` and `Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Cover-Letter.md` and Ingest both (PDFs stay in `applications/<folder>/`), write `meta.md`, append a row to `outputs/tracker.md`, append to `log.md`.

  **`cover-letter-draft.md` canonical format** (required for `build.js` to parse correctly):
  ```
  Recipient: Full Name, Job Title, Company Name, City State

  Dear Full Name,

  Paragraph one...

  Paragraph two...

  Sincerely,
  ```
  - The `Recipient:` line is optional — omit it if the hiring manager is unknown.
  - Do NOT include a contact header block (name/email/LinkedIn) — `build.js` injects those automatically.
  - Sign-off must be on its own line: `Sincerely,` / `Regards,` / `Kind regards,`.
- **Lint** (`lint`): First Ingest any new raw files. Then check for contradictions, duplicates, unmetric'd achievements, skills not evidenced in experience, orphan pages, thin roles, and JD keywords missing from the wiki. Auto-fix what you can; flag the rest under "Open lint findings" in `log.md`.

## Hard rules

- **`raw/` is never edited.** A resume error gets corrected in the wiki, not the source file.
- **The wiki is exhaustive by design** — keep more detail, not less. Brevity belongs only in tailored resumes, never in the wiki.
- Tailored resumes are derived FROM the wiki, never edited back INTO it. The archived markdown files in `raw/resumes/` (`-Resume.md` and `-Cover-Letter.md`) are what feed the wiki on next Ingest. PDFs are for recruiters only and are never copied to `raw/`.
- **Every Ingest and every Apply must append a line to `wiki/log.md`.** Update `meta.md` + `tracker.md` whenever an application's status changes, not just on send.
- Dates are `YYYY-MM-DD`. `[[wikilinks]]` cross-reference pages.

## Current state (2026-06-16)

Skeleton scaffolded; **no resumes ingested yet** — all wiki pages are seeded but empty (`source-count: 0`). First real work will be an Ingest.

## Writing style

All resume bullets, cover letter prose, summaries, and bios must follow the rules in `.claude/commands/resume-style.md` (available as the `/resume-style` skill). That file is the authoritative style guide — consult it before drafting any application output.

## Environment notes

- Windows / PowerShell. Repo is **not** a git repo.
- **Resumes in `raw/resumes/` are PDFs (historical originals) and `.md` files (finalised applications going forward).** Read PDFs with the `Read` tool's `pages` parameter; read `.md` files with `Read` without `pages`.
- PDF export uses `claude-code-resume-template/build.js` — run `node claude-code-resume-template/build.js applications/<folder>/` to parse both drafts and generate both PDFs in one step. Puppeteer is installed (`node_modules/` present). The script writes `resume-data.js` and `cover-letter-data.js` automatically — **do not write those files manually**. See `claude-code-resume-template/README.md` for the underlying template schema.
