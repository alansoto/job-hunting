# CLAUDE.md — Job Hunt Knowledge Base

Self-improving job-application knowledge base. `setup.md` is a human-readable reference only — the skills below are the authoritative procedures.

## Layout

```
raw/resumes/      READ ONLY — immutable sources (PDFs and .md files)
wiki/
  index.md        page catalog — update on every Ingest
  log.md          append-only history; "Open lint findings" at top
  processed.md    registry of ingested files
  pages/          skills, experience, achievements, education, projects, keywords, positioning
applications/<YYYY-MM-DD>-<company>-<role>/
outputs/tracker.md
```

## Operations

Invoke the skill when the trigger phrase appears:

| Trigger | Skill |
|---|---|
| "add this resume" / "ingest" | `/ingest` |
| "apply for this" + JD | `/apply` |
| "finalise" | `/finalise` |
| "render PDFs" / "generate PDFs" | `/render` |
| "lint" | `/lint` |
| Drafting any resume or cover letter prose | `/resume-style` first |

## Hard rules

- `raw/` is never edited — corrections go in wiki pages only
- Wiki is exhaustive; brevity belongs only in tailored resumes
- Tailored resumes derived FROM wiki, never back into it
- Every Ingest and Apply must append an entry to `wiki/log.md`
- Dates: `YYYY-MM-DD`. Cross-references: `[[wikilinks]]`

## Personal details

- Resume/cover letter email: `me@alansoto.info`
- Work email `alan.soto@xero.com` — never use in application documents

## Environment

- Windows / PowerShell
- PDFs: `Read` tool with `pages` parameter. `.md` files: `Read` without `pages`
- PDF export: `node claude-code-resume-template/build.js applications/<folder>/` — see `/render` for full detail
