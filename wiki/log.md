# Operation Log

Append-only history of every Ingest, Apply, Lint, and Query. Newest at the bottom.

## Open lint findings

Last full lint: 2026-06-17. Previous confirmation pass with Alan: 2026-06-16 — seven items
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
- **Amber cover letter inaccurate team sizes** — `raw/resumes/amber-cover-letter.md` quotes
  "Go1/squad of 10" and "2sol/team of 6"; both are wrong per confirmed wiki data (Go1=8, 2sol=5,
  confirmed 2026-06-16). No applications folder exists for this letter — unclear if it was
  submitted. If submitted, the figures were incorrect in that letter. FYI only.

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

## [2026-06-16] apply (started) — Stake, Engineering Technical Lead - Payments
- JD fetched from SEEK (job/92695393); saved to `applications/2026-06-16-stake-engineering-technical-lead-payments/job-description.md`
- Gap analysis written: fit score 70/100. Strong on payments experience (Console/Reapit integration, Xero US Bills, Emedia high-availability systems), high-availability/mission-critical architecture, cross-functional alignment, team leadership, and fintech-adjacent credibility (Suncorp, Xero). Partial gaps: named payment processors not in wiki, current title is TPM not EM, observability tooling not named, no fraud-specific work. Open questions: named processors from Console/Xero; observability tooling; Sydney hybrid travel; salary target.
- Status: gap analysis drafted — pending discussion before resume draft

---

## [2026-06-16] apply — Halosoft, Head of Delivery
- JD fetched from SEEK (job/92644597); saved to `applications/2026-06-16-halosoft-head-of-delivery/job-description.md`
- Gap analysis written: fit score 9/10 — exceptional match. No hard-requirement gaps. Soft gaps: mobile app delivery (not evidenced), QA as named discipline (implied only). Strong differentiators: AI product delivery (Xero AI for Customers + intelliHR NLP), API program, fintech-adjacent (Suncorp, Xero, payments delivery), Go1/intelliHR startup experience.
- Status: gap analysis drafted — pending review and discussion before resume draft

## [2026-06-16] apply (finalised + submitted) — Auto & General, Delivery Lead
- Created `applications/2026-06-16-auto-and-general-delivery-lead/`
- Saved JD verbatim as `job-description.md`; gap analysis: very strong fit (~9.0/10). Closest single-role match to Alan's actual day-to-day work — APRA-regulated insurance, Scrum/Kanban, ceremony facilitation, impediment removal, delivery metrics/KPIs, continuous improvement, and stakeholder management all directly evidenced. Suncorp bridged the named-APRA gap.
- Resume tailored with individual contributor voice ("Delivery Lead" — not "Head of"); Suncorp as primary insurance anchor; Xero API Program for scale + dependency management; Go1 for operating model built from scratch. Cover letter addressed to "Auto & General Hiring Team" (no named hiring manager).
- Rendered `Alan Soto - Delivery Lead - Auto - Resume.pdf` + `Alan Soto - Delivery Lead - Auto - Cover Letter.pdf` via `claude-code-resume-template`.
- Archived markdown sources to `raw/resumes/Alan-Soto-2026-06-16-Auto-and-General-Delivery-Lead-Resume.md` + `…-Cover-Letter.md`; ingested both.
- Wrote `meta.md`; appended `outputs/tracker.md`; status: Submitted — awaiting response.
- **Wiki updates from ingest:** [[keywords]] — "Delivery Lead" added to roles; "APRA compliance · APRA audit · impediment removal" added to program/delivery. [[positioning]] — new "Delivery Lead / Insurance & regulated" headline variant + professional summary + cheat-sheet entry.
- Pages touched: [[keywords]], [[positioning]], [[processed]], [[log]]

---

## [2026-06-17] apply (finalised + submitted) — Stake, Engineering Technical Lead - Payments
- JD fetched from stake.breezy.hr; saved to `applications/2026-06-16-stake-engineering-technical-lead-payments/job-description.md`
- Gap analysis: fit score 72/100. Strong on three payments touchpoints (Console/Reapit end-to-end payments capability, Xero US Bills, Emedia payment/booking systems), Xero API Program as HA/mission-critical platform anchor, fintech-adjacent credibility (Suncorp ASX-listed, Xero). Partial: current title is Lead TPM not Engineering Manager; reconciliation and fraud controls not directly evidenced.
- Positioning: "Engineering Technical Lead" framing; software-engineer-to-engineering-leader arc; Console/Reapit and 2sol given full expanded entries for payments depth and technical credibility. Emedia in "Earlier" section only. API Program as HA anchor (not Emedia — per Alan's reframing).
- Rendered `Alan Soto - Engineering Technical Lead - Stake - Resume.pdf` + `Alan Soto - Engineering Technical Lead - Stake - Cover Letter.pdf` via `claude-code-resume-template`.
- Archived markdown sources to `raw/resumes/Alan-Soto-2026-06-17-Stake-Engineering-Technical-Lead-Payments-Resume.md` + `…-Cover-Letter.md`; ingested both.
- Wrote `meta.md`; appended `outputs/tracker.md`; status: Submitted — awaiting response.
- **Wiki updates from ingest:** [[positioning]] — new "Engineering Technical Lead" + "Payments / fintech engineering lead" headline variant, professional summary, and cheat-sheet entry; Xero API Program as HA anchor note. [[keywords]] — payment processing, reconciliation, banking integrations, fraud controls, operational tooling, operational resilience added to engineering/technical section.
- Pages touched: [[positioning]], [[keywords]], [[processed]], [[log]]

---

## [2026-06-17] status update — Randstad Digital, Project Manager submitted
- Application submitted via recruiter portal. `meta.md` + `outputs/tracker.md` updated to Submitted / Awaiting response.

---

## [2026-06-17] apply (finalised) — Randstad Digital, Project Manager
- Created `applications/2026-06-17-randstad-digital-project-manager/`
- Saved JD verbatim as `job-description.md`; wrote `gap-analysis.md`
- Fit score: moderate-to-strong. Strong on infrastructure migration delivery, vendor management, multi-team coordination, formal governance, and stakeholder engagement. Partial gaps: Prince2 not held (PMP + Masters framed instead); no Enterprise Historian domain experience (mitigated by "or infrastructure projects" clause — Suncorp telephony/data platform replacement as primary analogue).
- Positioning: "Project Manager" framing; Suncorp as primary credibility anchor; Xero for scale and EGM-level stakeholder credibility; Console/Reapit for vendor integration story.
- PDFs generated via `build.js`; archived resume and cover letter markdown to `raw/resumes/`
- Wrote `meta.md`; appended `outputs/tracker.md`; status: Ready to send
- Pages touched: [[positioning]], [[keywords]]

## [2026-06-17] ingest — Alan-Soto-2026-06-17-Randstad-Digital-Project-Manager-Resume.md + Cover-Letter.md
- Both files derived from wiki — no new biographical facts or metrics.
- New "Infrastructure/data migration PM (contract)" headline variant + summary angle + role-emphasis cheat-sheet entry added to [[positioning]].
- New tailoring device added to [[positioning]]: "technical domain gap + delivery-focus pivot" (distinct from the new-industry pivot used in Halosoft — separates delivery competency from niche technical domain knowledge).
- New keywords added to [[keywords]]: enterprise system replacement · infrastructure programme delivery · data migration delivery · migration sequencing · compliance-critical delivery · vendor oversight.
- Pages touched: [[positioning]], [[keywords]], [[processed]]

## [2026-06-17] ingest — amber-cover-letter.md + clipchamp-cover-letter.md + stake-cover-letter-draft.md
- 3 cover letters ingested. All are Branch B (cover letter) ingests.
- **What worked (user-confirmed):** structure, conversational/casual tone — applies to all three.
- **Amber (Software Engineering Manager):** "curious-and-honest gap play" tailoring device extracted — plain domain-gap acknowledgement reframed as character trait; added to [[positioning]]. New headline variant "Software Engineering Manager" added to [[positioning]] table and [[keywords]] roles section.
- **Clipchamp (Senior TPM):** "accountability-without-hierarchy" line extracted — "useful to each team rather than sitting above them"; added to [[positioning]] as a reusable device. "AI-powered video" added to [[keywords]] AI/data section.
- **Stake (draft):** "When I read the description..." hook pattern documented in [[positioning]]. This is the draft source file; the finalised version was ingested separately on 2026-06-17.
- All 3 entries added to [[cover-letter-examples]] (page was previously empty — first population).
- Energy tech domain terms added to [[keywords]] (energy tech · home energy automation · IoT).
- Pages touched: [[cover-letter-examples]], [[keywords]], [[positioning]], [[processed]]

---

## [2026-06-17] apply (finalised) — Robert Walters, Senior Project Manager
- Created `applications/2026-06-17-robert-walters-senior-project-manager/`
- Saved JD verbatim as `job-description.md`; wrote `gap-analysis.md`
- Fit score: moderate-strong. Strong on program governance (RAID, milestones, EGM-level reporting), integrations/API delivery (Xero API Program, US Bills), data migration (Suncorp), vendor management (Suncorp + Console/Reapit + 2sol). Partial: Optimizely/CMS not directly evidenced (acknowledged in cover letter); website-redevelopment framing is a slight stretch from enterprise SaaS delivery. No public sector experience (preferred not required; Suncorp as regulated-enterprise analogue).
- Positioning: "Project Manager" / "digital delivery" framing; Suncorp as primary data migration + vendor anchor; Xero for scale and governance; Console/Reapit for integration scope-to-go-live story.
- PDFs generated via `build.js`; archived resume and cover letter markdown to `raw/resumes/`
- Wrote `meta.md`; appended `outputs/tracker.md`; status: Ready to send

## [2026-06-17] ingest — Alan-Soto-2026-06-17-Robert-Walters-Senior-Project-Manager-Resume.md + Cover-Letter.md
- Resume: derived from wiki — no new biographical facts. New "Website/digital platform PM (contract)" headline variant + cheat-sheet entry added to [[positioning]]; new keywords (digital transformation, data migration governance, RAID management, website redevelopment, digital platform delivery, CMS platform, platform implementation) added to [[keywords]]; Optimizely + public sector added to gap-watch in [[keywords]].
- Cover letter: three new tailoring devices added to [[positioning]] — "JD interpretation + match claim" opener (two-para hook: role statement + JD interpretation + match claim); "capability-hierarchy gap reframe" (contrast easy-to-learn tool gap vs hard-to-learn delivery mechanics); "synthesis sentence after bullet block" (names the value-add after evidence bullets). New entry added to [[cover-letter-examples]].
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[processed]]

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

---

## [2026-06-17] lint — full wiki health check (7 applications in scope)
- **Ingest step:** all 34 raw files already registered in [[processed]]; no new files to ingest.
- **Auto-fixed:**
  - [[projects]] Go1 squad size corrected: "squad of 10" → "squad of 8 (6 engineers, 1 designer, 1 PO)" — confirmed 2026-06-16 but projects.md was never updated.
  - [[keywords]] APRA compliance · APRA audit — log said these were added during Auto & General apply but were absent from the file; added to program/delivery section.
  - [[keywords]] impediment removal · agile transformation — evidenced (Agile coaching roles throughout career); added to agile section.
  - [[keywords]] DevOps · scalability — evidenced (CI/CD and HA architecture); added to engineering/technical section.
  - [[keywords]] gap-watch — added new entries for Halosoft (mobile app delivery, QA) and Randstad Digital (Prince2, budgeting/resource management).
- **Checks that passed:** no orphan pages; no thin roles (Emedia has 3 meaningful bullets — borderline but acceptable); all JD gap-watch entries now recorded; cross-page [[wikilinks]] resolve; no title/date/metric contradictions remaining (Go1 team size was the last outstanding contradiction, now fixed).
- **Flagged for review:** 5 items under `## Open lint findings` — see above.
- Pages touched: [[projects]], [[keywords]], [[log]]
