# Operation Log

Append-only history of every Ingest, Apply, Lint, and Query. Newest at the bottom.

## Open lint findings

Last full lint: 2026-06-16. Confirmation pass with Alan completed 2026-06-16 — seven items
resolved (see lint log entry below). Remaining open items:

**Still open — would improve the wiki when you have a moment:**
- **Unmetric'd achievements** that could be quantified with a prompt (listed in full at bottom of
  [[achievements]]): Xero program team sizes, Go1 content-creator product impact, intelliHR adoption
  lift, cycle-time / predictability deltas (2sol & Go1), Emedia event traffic/uptime figures.
- **"Cloud-based systems" skill is thinly evidenced** — no AWS/Azure/GCP named anywhere; only
  "cloud accounting" (Xero) + high-availability e-commerce (Emedia). Frame as transferable, don't
  claim hands-on cloud-platform expertise. → [[skills]]
- **CSM renewal** — held since 2012; modern CSM requires renewal. Verify only if a role hinges on a
  live cert. → [[education]]

**Raw-file housekeeping:**
- `Alan-Soto-Lead Technical Program Manager.pdf` and `…(1).pdf` are byte-identical duplicates.
  Safe to delete one (left in place — `raw/` is never edited without explicit say-so).

**Resolved 2026-06-16 (confirmed by Alan):** Go1 team size (8: 6 eng+designer+PO) · 2sol team size
(5 developers) · early-career dates (Canada 2003–04 incl. Barrick Gold → Peru 2004–05 → AU 2005) ·
PMP (lapsed, not active) · Xero title (Lead TPM is the only real title) · Xero location (Brisbane
remote) · Suncorp scope (telephony data-platform migration). "Team Leadership" rating settled as
Expert (current).

---

## [2026-06-16] setup — knowledge base scaffolded
- Created folder skeleton: `raw/resumes/`, `wiki/pages/`, `applications/`, `outputs/`
- Seeded wiki registries (`index.md`, `log.md`, `processed.md`) and six empty wiki pages
- Seeded `outputs/tracker.md` with the application-log table header
- Pages touched: [[index]], [[skills]], [[experience]], [[achievements]], [[education]], [[projects]], [[keywords]]

---

## [2026-06-16] ingest — 19 raw files (18 resume variants + 1 cover letter)
- First real ingest. All 19 files are for the **same person, Alan Soto** — each resume is the same
  underlying career tailored to a different target role. Read all PDFs fully via the Read tool's PDF support.
- Built out all six seeded pages from empty and added a new page, [[positioning]], to capture the
  title/summary framings (the resumes function as a positioning library).
- Reconciled one consistent employment history: Xero (Lead TPM, Mar 2022–present) → Go1 (TPM) →
  Suncorp (Delivery Coach) → Virgin Australia (Agile Coach, via Neu21) → intelliHR (Head of Product)
  → Console/Reapit (Iteration Manager) → 2sol (Projects Lead) → Emedia (Systems Architect) → early
  Peru/Canada engineering.
- Key metrics captured: 3M+ customers (Xero AI for Customers), $5M+/mo revenue + 10+ products/20+
  APIs (2sol Flight Centre), squads of 5/6/10, 4 teams (Suncorp), 70+ planning (Virgin), 10+/12+/dozens
  of teams (Xero), QUT 7.0 GPA Dean's Award. Certs: PMP, CSM.
- Duplicate found: `Lead Technical Program Manager.pdf` and `Lead Technical Program Manager (1).pdf`
  are byte-for-byte the same content — only one ingested for content.
- Pages touched: [[index]], [[experience]], [[skills]], [[achievements]], [[projects]], [[education]],
  [[keywords]], [[positioning]], [[processed]]
- See `## Open lint findings` above for items needing confirmation (PMP expiry, early-career dates,
  unmetric'd achievements).

---

## [2026-06-16] lint — full wiki health check
- Ingest step: no-op — all 19 raw files already in [[processed]]; no `applications/` yet.
- **Auto-fixed:**
  - Annotated Go1 and 2sol team-size contradictions at point of use in [[experience]] (was stated
    as fact; now shows the range + which resume each figure comes from).
  - Fixed near-orphan [[keywords]] — added an inbound content link from [[skills]] (previously only
    cataloged by [[index]]).
  - Added thin-evidence caveats for "Cloud-based systems" and the eng-leadership skill cluster to
    [[skills]].
- **Flagged for confirmation** (see `## Open lint findings` at top): Go1/2sol team sizes,
  early-career dates, PMP expiry, current Xero title, Xero location, Suncorp scope framing,
  thinly-evidenced cloud skill, unmetric'd achievements, duplicate raw PDF.
- **Checks that passed:** no orphan pages remain; no within-page duplicate entries (cross-page
  restatement of metrics is by-design per schema); all main roles richly detailed (only the
  ~2000–2006 early career is inherently thin and is flagged as such); no JD-keyword gaps yet (no
  applications). Cross-page [[wikilinks]] resolve.
- Pages touched: [[experience]], [[skills]], [[log]]

---

## [2026-06-16] confirm — resolved 7 open lint findings with Alan
- Go1 team size → **8** (6 engineers + 1 designer + 1 PO); "squad of 10 / 8 engineers" was wrong.
- 2sol team size → **5 developers**; "squad of 6 engineers" was wrong.
- Early career → **Canada 2003–2004** (incl. **Barrick Gold 2003**) → **returned to Peru 2004**,
  software engineer in Peru until emigrating → **emigrated to Australia 2005** → Emedia Feb 2006.
  Dropped the loose "8 years / 2000–2012" framing. Career counts from 2003.
- **PMP lapsed** (~2025), not renewed — must not be described as "active/current" anywhere.
- Xero title → **Lead Technical Program Manager is the only real title**; all other labels are
  target-role positioning.
- Xero location → **Brisbane (remote)**; Melbourne entries were errors.
- Suncorp → core work confirmed as the **telephony data-platform migration** across all brands.
- Pages touched: [[experience]], [[achievements]], [[projects]], [[education]], [[skills]], [[positioning]], [[log]]

- **[2026-06-16] Apply (started)** — `applications/2026-06-16-microsoft-senior-technical-program-manager/`. Senior Technical Program Manager, Clipchamp (Microsoft), Brisbane. Saved JD verbatim; wrote gap-analysis.md (fit 9.0/10 — very strong: AI for Customers + API Program map directly; gaps are video-tech domain + MS-specific tools/frameworks Azure DevOps/Power BI/Responsible AI/DSB, all name-level not capability). Awaiting Alan's answers on 5 open questions before drafting resume.

- **[2026-06-16] Apply (finalised)** — Microsoft / Clipchamp, Senior Technical Program Manager. Rendered `resume-final.pdf` (2pp) + `cover-letter-final.pdf` (1pp) via `claude-code-resume-template`; archived resume to `raw/resumes/Alan-Soto-2026-06-16-Microsoft-Senior-Technical-Program-Manager.pdf` and re-ingested (derived resume → no new facts; JD gap keywords added to [[keywords]]). Wrote `meta.md`, appended `outputs/tracker.md` (status: finalised, not yet submitted). Tailoring: Program spelling, 15+ yrs, generic cloud, video omitted, PMP no-status.
  - **Toolchain:** self-hosted the template fonts (Space Grotesk + Hanken Grotesk woff2 in `claude-code-resume-template/fonts/`, inlined `@font-face`) so PDF export is fully offline/reproducible. NOTE: stock `generate-pdf.js` reliably times out — its `goto(waitUntil:'networkidle0')` never settles paginate on `file://` in this Chromium build. Used sibling `_render.mjs` (`domcontentloaded` + 60s `waitForFunction`), which renders correctly offline. Recommend either adopting `_render.mjs` or changing generate-pdf.js's waitUntil to `'load'` for future finalises.
- **[2026-06-16] Status update** — Microsoft / Clipchamp Senior TPM application **submitted** via Microsoft Careers. `meta.md` + `outputs/tracker.md` updated to Submitted / Awaiting response.

## [2026-06-16] apply (started) — Sharp & Carter / Queensland Government, Principal Project Manager (AO8)
- Created `applications/2026-06-16-sharp-and-carter-principal-project-manager/`
- Saved JD verbatim as `job-description.md`; wrote `gap-analysis.md`
- Fit score: Strong (85/100). All core ICT program delivery, governance, and leadership requirements directly evidenced. Only meaningful gap: no government-sector experience (partially mitigated by Suncorp regulated-enterprise background and contractor pathway)
- Positioning: "Project Manager" framing; summary angle — 15+ years ICT/transformation program leadership across regulated enterprise and high-growth tech
- Next: discuss gap analysis → draft resume
- **[2026-06-16] Apply (finalised)** — Sharp & Carter / Queensland Government, Principal Project Manager (AO8). Rendered `resume-final.pdf` (2pp) + `cover-letter-final.pdf` (1pp) via `_render.mjs`. Wrote `meta.md`, appended `outputs/tracker.md` (status: ready to send). Tailoring: "Programme" spelling, 15+ yrs, Suncorp as regulated-enterprise anchor, government experience gap acknowledged in cover letter, Core Competencies replacing Skills.
- **[2026-06-16] Status update** — Sharp & Carter / Queensland Government Principal PM (AO8) application submitted. Addressed to Kris Hair, Director, Sharp & Carter. `meta.md` + `outputs/tracker.md` updated to Submitted / Awaiting response.

## [2026-06-16] ingest — Alan-Soto-2026-06-16-Sharp-and-Carter-Principal-Project-Manager.pdf
- Derived resume (no new biographical facts vs wiki)
- Pages touched: [[keywords]] (new competency-label terms: Programme & Project Governance, End-to-end ICT Delivery, Delivery Governance, Executive Stakeholder Engagement, Risk & Dependency Management, Operating Model Design, Milestone Reporting, ICT transformation, regulated enterprise), [[positioning]] (Principal Project Manager headline variant + government/ICT role-emphasis note)
- Registered in [[processed]]

---

## [2026-06-16] apply — Halosoft, Head of Delivery
- JD fetched from SEEK (job/92644597); saved to `applications/2026-06-16-halosoft-head-of-delivery/job-description.md`
- Gap analysis written: fit score 9/10 — exceptional match. No hard-requirement gaps. Soft gaps: mobile app delivery (not evidenced), QA as named discipline (implied only). Strong differentiators: AI product delivery (Xero AI for Customers + intelliHR NLP), API program, fintech-adjacent (Suncorp, Xero, payments delivery), Go1/intelliHR startup experience.
- Status: gap analysis drafted — pending review and discussion before resume draft

## [2026-06-16] ingest — Alan Soto - Head of Delivery - Halosoft - Resume.pdf + Cover Letter.pdf
- 2 new files: tailored final resume + cover letter for the Halosoft Head of Delivery application.
- Both derived from the wiki — no new biographical facts or metrics.
- **New content captured:**
  - `Head of Delivery` added as a new headline variant to [[positioning]] (table row, professional summary, cheat-sheet entry).
  - Summary angle: "Delivery leader with 15+ years across SaaS, AI, and platform engineering… giving teams the clear structure they need to ship software with confidence."
  - Two new tailoring devices added to [[positioning]]: (1) new-industry gap + environment match pivot; (2) fintech-adjacent cluster framing.
  - Keywords added to [[keywords]]: "Head of Delivery", "delivery cadence design", "high-velocity team", "fintech-adjacent", "advice industry".
- PDF extraction via Python/pypdf (pdftoppm unavailable in this session).
- Pages touched: [[positioning]], [[keywords]], [[processed]]
