# Application Meta — Microsoft / Clipchamp, Senior Technical Program Manager

- **Company:** Microsoft (Clipchamp)
- **Role:** Senior Technical Program Manager
- **Location:** Brisbane, QLD (Microsoft notes "Brisbane based role")
- **Date finalised:** 2026-06-16
- **Date submitted:** 2026-06-16
- **Status:** Submitted — awaiting response
- **Fit score:** 9.0 / 10 (see [gap-analysis.md](applications/_archived/2026-06-16-microsoft-senior-technical-program-manager/gap-analysis.md))

## Files

- `job-description.md` — JD captured verbatim
- `gap-analysis.md` — strong/partial/gaps, ATS keywords, fit score, open questions
- `resume-draft.md` — tailored resume (markdown source of truth)
- `cover-letter-draft.md` — tailored cover letter (markdown source of truth)
- `resume-final.pdf` — rendered via `claude-code-resume-template` (Swiss-grid, 2 pages)
- `cover-letter-final.pdf` — rendered, 1 page, shared letterhead
- Archived to `raw/resumes/Alan-Soto-2026-06-16-Microsoft-Senior-Technical-Program-Manager.pdf` and re-ingested

## Tailoring decisions (confirmed with Alan)

- Spelling: **Program** (US, Microsoft convention) throughout
- Experience figure: **15+ years**
- Cloud: kept **generic** ("cloud-based systems") — no AWS/Azure/GCP claimed
- **Video** domain: left out entirely (genuine gap; not fabricated)
- **PMP**: listed without status wording
- Summary in third person; experience bullets in implied-subject voice (consistent)
- Style per `/resume-style`: no boldface in body, no em/en dashes (spaced hyphens), active voice, plain language

## Gaps carried into interview (not on resume)

- Azure DevOps, Power BI, Responsible AI / Deployment Safety Board (Microsoft-specific) — transferable, ramp talking points
- Video technologies — counter with fast domain-ramp history + Go1 content-creator adjacency

## Toolchain note

- PDFs rendered with self-hosted fonts (Space Grotesk + Hanken Grotesk, woff2 in `claude-code-resume-template/fonts/`) so export is reproducible offline.
- Rendered via `_render.mjs` (domcontentloaded + 60s wait). The stock `generate-pdf.js` times out due to its `networkidle0` wait on `file://`; see log.md note.

## Next actions

- [x] Submit via Microsoft Careers — submitted 2026-06-16
- [ ] Update Status here + `outputs/tracker.md` on any response (recruiter screen / rejection / interview)
