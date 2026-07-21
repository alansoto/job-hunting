# Operation Log

Append-only history of every Ingest, Apply, Lint, and Query. Newest at the bottom.

## Open lint findings

Last full lint: 2026-07-21 (wiki de-duplication pass). Previous: 2026-07-10 (backfill lint),
2026-06-17 (full), 2026-06-16 (confirmation pass with Alan — seven items resolved).

Only genuinely **actionable** items live here. Closed findings and process takeaways have been moved
into the dated log entries below; guardrails that became permanent rules now live on their owning
wiki page, not here.

**Open — needs a decision or a fact from Alan:**
- **Degree title: "Master of" vs "Masters of" Project Management.** [[education]] says *Masters of*;
  the Randstad Digital and HomeRepair resumes (both submitted) say *Master of*, per a proofreader
  correction. Confirm against the testamur and align the wiki. → [[education]]
- **University name contradiction in two raw resumes.** [[education]] and 20+ other resumes say
  **Universidad de Lima, Peru**. Two raw files diverge — and from each other:
  `Alan-Soto-2026-06-25-Mining-Tech-Scrum-Master-DevSecOps-Resume.md` says "Universidad Nacional de
  Ingeniería"; `Alan-Soto-2026-07-02-FinXL-Scrum-Master-Resume.md` says "Pontificia Universidad
  Católica del Perú". Both look like accidental edits made before sending (the matching
  `applications/*/resume-draft.md` copies are correct). Wiki kept `Universidad de Lima` as canonical.
  Confirm which is right.
- **Issuing bodies unrecorded for three certifications** — AI Assisted Development (2026), LeanUX and
  Product Discovery (2018), React Nanodegree (2017, name matches Udacity's program). → [[education]]
- **CSM renewal** — held since 2012; modern CSM requires renewal. Verify only if a role hinges on a
  live cert. → [[education]]
- **Nagare: Lisa's surname and role are unknown**, as is whether she should be named in an
  application document. Current rule: don't name her, don't imply Alan worked alone. → [[projects]]
- **2sol / BMA tender open questions** — year within the 2012–2017 window, contract value, engagement
  team size, native-vs-web "mobile", and whether other tenders were run at 2sol. → [[projects]]
- **Unmetric'd achievements** that could be quantified with a prompt (listed in full at the bottom of
  [[achievements]]): Xero program team sizes, Go1 content-creator product impact, intelliHR adoption
  lift, cycle-time / predictability deltas (2sol & Go1), Emedia event traffic/uptime figures,
  Supergraph figures (BlueNav traffic volume, domain-team count, Practice-bootstrap-to-GA timeline,
  Jira Data Quality Score delta).

**Known and accepted — no action:**
- `Alan-Soto-Lead Technical Program Manager.pdf` and `…(1).pdf` in `raw/` are byte-identical
  duplicates. Left in place; `raw/` is never edited without explicit say-so.
- `wiki/alan-soto-em-gap-analysis.docx` and `-v2.docx` pre-date the wiki, were never ingested, and
  are referenced by no page. Retained deliberately (confirmed 2026-07-21); noted in [[index]].
- `raw/resumes/amber-cover-letter.md` quotes inaccurate team sizes (Go1 "squad of 10", 2sol "team of
  6"; correct figures are 8 and 5). No applications folder exists, so it may never have been sent.
  Historical record only — the correct figures are in [[experience]].

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

## [2026-06-17] apply (finalised) — Resolution Life, Senior Product Owner / Delivery Lead
- Created `applications/2026-06-17-resolution-life-senior-po-delivery-lead/`
- Saved JD verbatim as `job-description.md`; wrote `gap-analysis.md`
- Fit score: 8/10 — strong. All core PO/delivery requirements directly evidenced. Life insurance domain is the only meaningful gap; Suncorp (ASX-listed financial services & insurance) is the bridge.
- Positioning: "Senior Product Owner - Delivery Lead" framing; intelliHR as primary PO anchor (built product function from scratch, intersection of product and engineering); Go1 for PO+delivery hybrid; Suncorp for regulated/insurance credibility; Xero API Program for delivery at scale.
- PDFs generated via `build.js` ("Resolution Life" passed as second arg); archived resume and cover letter markdown to `raw/resumes/`
- Wrote `meta.md`; appended `outputs/tracker.md`; status: Ready to send
- **Wiki updates from ingest:**
  - [[positioning]] — new "Senior Product Owner / Delivery Lead (insurance)" headline variant, "PO / Delivery Lead" professional summary, cheat-sheet entry.
  - [[keywords]] — product ownership · outcome-driven delivery · adviser platforms · customer-adviser platforms · business and technology bridging · intersection of product and delivery · APRA-adjacent added to program/delivery; CIAM + adviser platforms added to gap-watch.
  - [[cover-letter-examples]] — new Resolution Life entry; user confirmed the Robert Walters "JD interpretation + match claim" format as preferred cover letter formula for senior roles.
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[processed]], [[log]]

## [2026-06-18] ingest — Alan-Soto-2026-06-18-Xero-Achievement-Evidence.md
- Source: structured achievement evidence synthesised from cross-app Xero evidence (Jira, Confluence,
  Glean). Not a resume — a narrative evidence document covering 8 achievement themes at Xero.
- **Key new content added:**
  - **Supergraph / API Program specifics** — Practice Domain Alignment Plan; UK Tax as first GA
    production consumer (`query { me { currentPractice { id } } }`); BlueNav migration off GSD
    (tracer-bullet, 1% traffic test, high-risk/high-volume); Unified Burndown (all major Xero
    engineering divisions); domain onboarding simplification (Miro guide steps 0–2).
  - **Quokkas ways-of-working** — documented cross-functional delivery model for Payroll/Connected
    Workplaces team; separated roadmap vs execution tracking; Asana + Jira linkage; Confluence as
    discovery home; communication norms. New project entry added.
  - **Jira Optimisation Initiative (2023)** — Xero-wide programme for consistent Jira use at
    initiative/epic level; Jira Data Quality Score; dashboards and shareback material. New project
    entry added.
  - **"Operating system builder" framing** — verbatim reusable summary capturing what Alan does
    above pure delivery coordination; added to [[positioning]] as a named framing block.
  - **Platform/API TPM professional summary** — new summary angle for federated graph/developer
    platform roles. New role-emphasis cheat-sheet entry added.
  - **New supporting statement variants** — 8 bullet-ready statements extracted and added to
    [[achievements]] as their own section "Supergraph / API Program — specific wins."
- Pages touched: [[achievements]], [[experience]], [[projects]], [[keywords]], [[positioning]],
  [[processed]], [[index]]

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

---

## [2026-06-18] apply (finalised) — ARN Media Technology Delivery Manager
- Saved JD, gap analysis (fit: strong), and jd-analysis note
- Drafted resume (Head of Delivery / Delivery Lead angle retitled to "Technology Delivery Manager"; Suncorp as offshore+vendor+data anchor, Emedia kept full for media/entertainment adjacency) and cover letter (JD-interpretation + match-claim opener, 3 role bullets, synthesis sentence, light media-gap pivot)
- PDFs generated via /render; archived resume and cover letter to raw/resumes/
- Ingested both markdown sources
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[processed]], [[log]]

## [2026-06-18] ingest — ARN Media Technology Delivery Manager (resume + cover letter)
- Resume: added "Technology Delivery Manager" title variant (media/broadcast angle) to [[positioning]]; content derived from existing wiki, no new history
- Cover letter: new entry in [[cover-letter-examples]] (reaffirms senior formula; "Speed and stability in the same hands" closer device); user confirmed "the whole thing" worked
- Keywords gap-watch: broadcast/media vertical (bridged by Emedia + Go1); no real gaps otherwise
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[processed]]

## [2026-06-22] outcome — Stake, Engineering Technical Lead - Payments: Rejected
- Application submitted 2026-06-17; rejection received 2026-06-22.
- `outputs/tracker.md` updated to Closed / Rejected.

---

## [2026-06-23] status update — Auto & General, Development Manager: Submitted
- Application submitted 2026-06-23. `outputs/tracker.md` updated to Submitted / Awaiting response.

---

## [2026-06-23] apply (started) — Magentus, Senior Delivery Lead

- Created `applications/2026-06-23-magentus-senior-delivery-lead/`
- Saved JD verbatim as `job-description.md`; wrote `gap-analysis.md`
- Fit score: Strong (8.5/10). Core role is end-to-end delivery execution ownership embedded in a
  product team - maps directly to Alan's actual Xero work and mirrors Go1 (Scrum Master + squad
  lead) precisely. Atlassian/Jira expertise very well evidenced (Jira optimisation initiative,
  Data Quality Score, health dashboards). Engineering practices awareness (CI/CD, SDLC) partially
  evidenced via 2sol transformation and systems architecture background. Genuine gaps: cloud
  platform specifics (AWS/Azure/GCP - confirmed wiki gap), Atlassian JPD/Compass/Analytics
  (strong Jira base bridges this), healthcare domain (new vertical - standard environment pivot).
- Positioning: "Senior Delivery Lead" framing, individual contributor voice. Xero leads (Jira
  optimisation, ways-of-working, dependency management at scale); Go1 (Scrum Master + operating
  model built from scratch) as hands-on credibility anchor; Suncorp (multi-team, compliance-critical);
  2sol (CI/CD transformation, $5M+ platform).
- Cover letter: confirmed senior formula (JD interpretation + match claim opener, three role
  bullets, synthesis sentence, healthcare domain gap pivot, close).
- **[2026-06-23] Positioning update:** Alan provided new evidence of DevOps/CI/CD/observability
  work at Xero ("Code Red" initiative). Added to wiki ([[experience]], [[achievements]],
  [[projects]], [[keywords]]). Key facts: embedded in division-wide CI/CD capability uplift;
  implemented observability tooling for DORA metrics (deployment frequency, lead time for changes,
  change failure rate, time to restore); personally built automated lead time for changes
  dashboards; facilitated team sessions for SLOs, on-call practices, and progressive delivery;
  participated in DX pilot program. Resume updated (Code Red bullet replaces Unified Burndown in
  Xero section). Cover letter updated (Code Red bullet replaces 2sol bullet - two Xero bullets
  now, Go1 third).
- **[2026-06-23] Apply (finalised)** — Magentus, Senior Delivery Lead. Rendered `Alan Soto - Senior Delivery Lead - Magentus - Resume.pdf` (2pp) + `Alan Soto - Senior Delivery Lead - Magentus - Cover Letter.pdf` (1pp) via `build.js`. Archived resume and cover letter markdown to `raw/resumes/`; ingested both. Wrote `meta.md`; appended `outputs/tracker.md` (status: Ready to send). Key tailoring: full 7-role experience section (Virgin Australia, intelliHR, Console/Reapit restored from Earlier); Code Red CI/CD/DORA bullet in Xero section bridging the DevOps gap. Cover letter: casual opener, two Xero bullets (Jira governance + Code Red/DORA), Go1 operating model third. Healthcare domain gap acknowledged plainly. Pages touched: [[cover-letter-examples]], [[processed]], [[log]].
- **[2026-06-23] Status update** — Magentus Senior Delivery Lead application submitted. `meta.md` + `outputs/tracker.md` updated to Submitted / Awaiting response.

---

## [2026-06-24] apply (finalised) — Lime Recruitment, Delivery Lead | HR Transformation Program
- PDFs generated via /render: `Alan Soto - Delivery Lead - Lime Recruitment - Resume.pdf` + `Alan Soto - Delivery Lead - Lime Recruitment - Cover Letter.pdf`
- Archived resume and cover letter markdown to `raw/resumes/`; ingested both
- New "Delivery Lead (transformation / setup phase)" professional summary added to [[positioning]]
- Cover letter entry added to [[cover-letter-examples]]: named-focus opener + forward-looking bullet endings (new pattern variant)
- Wrote `meta.md`; appended `outputs/tracker.md` (status: Ready to send)
- Pages touched: [[positioning]], [[cover-letter-examples]], [[processed]], [[log]]

## [2026-06-24] apply (started) — Lime Recruitment, Delivery Lead | HR Transformation Program

- Created `applications/2026-06-24-lime-recruitment-delivery-lead/`
- Saved JD verbatim as `job-description.md`; wrote `gap-analysis.md`
- Fit score: Strong (8.5/10). Core ask - establishing delivery frameworks, operating cadence, and Jira/Confluence tooling from scratch for a complex multi-workstream HR transformation - maps directly to Go1 (operating model built from scratch), Xero Quokkas (cross-functional WoW design), Xero Jira optimisation initiative, and Suncorp (governance frameworks for multi-team migration). Iteration Manager title is an exact credential match. Only gap: client-side HRIS transformation delivery; intelliHR (HR SaaS, 18 months as Head of Product) and Xero Quokkas/Payroll team provide the adjacency. Gap is "highly regarded" not required.
- Drafted `resume-draft.md`: "Delivery Lead" framing; Xero (Jira optimisation, Quokkas WoW, API Program multi-workstream, ways-of-working program), Go1 (established operating model from scratch), Suncorp (governance frameworks, multi-team coordination through COVID/restructuring), Virgin Australia (70+ facilitation, PO coaching), intelliHR (HR SaaS domain anchor), Console/Reapit (Iteration Manager title match), Earlier (2sol, Emedia).
- Drafted `cover-letter-draft.md`: confirmed senior formula (JD interpretation + match claim opener, three role bullets, synthesis sentence, HR/HRIS gap pivot via intelliHR, close). Three bullets: (1) Xero Jira + Quokkas operating model design; (2) Go1 setup-phase operating model; (3) Suncorp multi-team governance through ambiguity.
- Pages touched: [[log]]

---

## [2026-06-19] ingest — Xero Performance Review (2026-06)
- Source: formal Xero mid-year performance review, provided inline by Alan
- Validated strengths captured: "force multiplier" EQ, ownership/follows-through, process optimisation/cycle-time, centralised sources of truth, adaptability into AI + API modernization
- Honest growth areas recorded: ecosystem-level technical alignment (Lead → Staff gap), executive verbal communication density in high-stakes reviews
- Level calibration note added: confirms Lead-level designation; frames the honest gap for Staff/Principal targeting
- Pages touched: [[positioning]] (new "Performance review insights" section), [[processed]]

## [2026-06-25] apply (started) — Mining Technology (via recruiter), Scrum Master - DevSecOps

- Created `applications/2026-06-25-mining-tech-scrum-master-devsecops/`
- Saved JD verbatim as `job-description.md`; wrote `gap-analysis.md`
- Fit score: Strong. Primary hiring driver (reactive → proactive transformation) is Alan's career signature. Scrum Master / coaching / offshore-team / DevOps-adjacent profile is a very tight match. Genuine gaps: SAFe/SSM certification (CSM held; SSM listed as bonus); IaC hands-on experience (frame as delivery-level infra context); DevSec security-pipeline specifics (bridge via Suncorp compliance + Emedia security-hardened architecture). Mining vertical new except early Barrick Gold (2003).
- Drafted `resume-draft.md`: Scrum Master framing; Xero (Code Red CI/CD, DORA metrics, SLOs, coaching 10+ EMs, Quokkas operating model, Jira optimisation), Go1 (Scrum Master, squad of 8, operating model from scratch), Suncorp (offshore teams, compliance, reactive→structured), Virgin Australia (Kanban, 70+ facilitation, PO coaching), Earlier (Console/Reapit, intelliHR, 2sol, Emedia).
- Drafted `cover-letter-draft.md`: confirmed senior formula (JD interpretation + match claim opener, three role bullets, synthesis sentence, gap pivot, close). Three bullets: (1) Xero Code Red DORA/CI/CD/SLOs; (2) Go1 operating model from scratch + chaotic→predictable pattern; (3) Suncorp offshore coordination + compliance-critical.
- Gap acknowledgements: mining vertical → Barrick Gold 2003 light touch + environment-match pivot; SAFe → CSM held, SSM actively building toward, Xero scaled delivery as operational analogue.
- Pages touched: [[log]]

- **[2026-06-25] Status update** — Mining Technology (via Clicks IT) Scrum Master - DevSecOps application **submitted**. `meta.md` + `outputs/tracker.md` updated to Submitted / Awaiting response.

---

## [2026-06-27] apply — Best Practice Software, Project Manager (SaaS transformation)

- Created `applications/2026-06-27-best-practice-software-project-manager/`
- Saved JD verbatim as `job-description.md`; wrote `gap-analysis.md`
- Fit score: 8/10 - strong. All core delivery requirements directly evidenced. SaaS product delivery track record is deep and genuine across Xero, Go1, intelliHR, Console/Reapit. Regulated environment credibility via Suncorp (APRA-regulated, compliance-critical migration). Healthcare domain is the only meaningful gap; JD language ("exciting start to your Health IT career") signals openness to non-healthcare candidates.
- Positioning: "Project Manager" framing; Xero API Program as the platform modernisation anchor (migrating from legacy architecture without disrupting existing products - same pattern as on-prem to cloud); Suncorp as regulated/compliance anchor; Go1 for SaaS product delivery ownership from initiation to launch.
- Drafted `resume-draft.md`: Project Manager framing; Xero (API/Supergraph modernisation, Unified Burndown, AI for Customers, CI/CD uplift), Go1 (SaaS end-to-end ownership, operating model from scratch), Suncorp (compliance-critical delivery, APRA-regulated), intelliHR (SaaS product built from scratch, AI features, board facilitation), Console/Reapit (payments integration scope-to-release). Earlier paragraph covers 2sol, Virgin Australia, Emedia.
- Drafted `cover-letter-draft.md`: confirmed senior formula (JD interpretation + match claim opener, three role bullets, synthesis sentence, gap pivot, close). Three bullets: (1) Xero Supergraph - platform migration without disrupting existing products, EGM-level visibility; (2) Suncorp - APRA-regulated, compliance-embedded delivery through adversity; (3) Go1 - SaaS product squad from initiation to launch, operating model from scratch. Gap acknowledgement: no clinical/health background - pivot to regulated environment match (same archetype). "Curious and honest" tone on the gap.
- Pages touched: [[log]]

## [2026-06-29] apply (finalised) — Best Practice Software, Project Manager

- PDFs generated via /render: "Alan Soto - Project Manager - Best Practice - Resume.pdf" (197 KB) and "Alan Soto - Project Manager - Best Practice - Cover Letter.pdf" (77 KB)
- Archived markdown sources to raw/resumes/: Alan-Soto-2026-06-27-Best-Practice-Software-Project-Manager-Resume.md and Alan-Soto-2026-06-27-Best-Practice-Software-Project-Manager-Cover-Letter.md
- meta.md written; tracker row appended (status: Ready to send)
- Pages touched: [[log]], [[processed]], [[tracker]]

## [2026-06-29] ingest — Best Practice Software Project Manager resume + cover letter

- Resume: no new biographical facts (derived from wiki). New items captured: Health IT / clinical SaaS transformation PM cheat-sheet entry added to [[positioning]]; Health IT domain keywords + gap-watch entry for clinical safety / TGA / on-prem-to-cloud / Health IT added to [[keywords]].
- Cover letter: entry added to [[cover-letter-examples]] — compressed "JD interpretation + match claim" opener (colon-structure); named explicit transition into bullets; colon-list environment-match pivot for gap. User liked: format and language overall.
- Pages touched: [[keywords]], [[positioning]], [[processed]]

## [2026-06-29] status update — Best Practice Software, Project Manager

- Application submitted. `meta.md` + `outputs/tracker.md` updated to Submitted / Awaiting response.

## [2026-07-02] apply — FinXL by Randstad Digital, Scrum Master

- Folder: `applications/2026-07-02-finxl-randstad-scrum-master/`
- JD: Scrum Master delivering infrastructure projects (cloud, database, storage) in banking and finance. Placed by Randstad Digital / FinXL.
- Gap analysis: moderate-strong fit. Scrum Master credentials (CSM) and banking/finance experience (Suncorp Group) are clean matches. Infrastructure/data platform experience met adjacently via Suncorp Data Engineering area. Cloud platform experience through Xero programs. No deal-breaker gaps.
- Drafted `resume-draft.md`: Scrum Master framing. Five main experience entries: Xero (coaching at scale), Go1 (explicit Scrum Master, squad of 8, all ceremonies), Suncorp (banking/finance, data platform migration, Infrastructure/Security coordination), Virgin Australia (Agile Coach, 70+ planning workshops), Console/Reapit (Iteration Manager, ceremonies). Earlier paragraph covers intelliHR, 2sol, Emedia. CSM listed first in education.
- Drafted `cover-letter-draft.md`: "JD interpretation + match claim" opener. Three bullets: Go1 (Scrum Master, all ceremonies, operating model from scratch), Suncorp (banking/finance, data platform migration, Infrastructure/Security teams, COVID adversity), Xero (coaching 10+ teams, cloud platform programs at scale). No explicit gap paragraph - infrastructure adjacency is sufficient for a facilitation role.
- Pages touched: [[log]]


## [2026-07-02] apply (finalised) — FinXL by Randstad Digital, Scrum Master
- PDFs generated via /render (fallback _render.mjs used — Puppeteer launch timeout on primary build.js, output identical): "Alan Soto - Scrum Master - Finxl - Resume.pdf" (228 KB) and "Alan Soto - Scrum Master - Finxl - Cover Letter.pdf" (76 KB)
- Archived markdown sources to raw/resumes/: Alan-Soto-2026-07-02-FinXL-Scrum-Master-Resume.md and Alan-Soto-2026-07-02-FinXL-Scrum-Master-Cover-Letter.md
- meta.md written; tracker row appended (status: Ready to send)
- Pages touched: [[log]], [[processed]], [[tracker]]

## [2026-07-02] ingest — FinXL Scrum Master resume + cover letter
- Resume: no new biographical facts (derived from wiki). New items captured: Infrastructure/cloud/banking Scrum Master variant added to the [[positioning]] Scrum Master cheat-sheet (lead Go1 SM + Suncorp banking/Data-Engineering + Xero API Program reframed as infra/migration). FinXL gap-watch entry added to [[keywords]] (cloud platforms portfolio / database & storage / infrastructure projects met adjacently; core SM + banking requirements cleanly evidenced).
- Cover letter: entry added to [[cover-letter-examples]] — new "pain-point / problem-framing opener" hook device (lead with the friction the role solves, position candidate as friction-remover); also added as a tailoring device in [[positioning]]. User liked: the opener, the three bullets, and the casual tone.
- Pages touched: [[cover-letter-examples]], [[keywords]], [[positioning]], [[processed]]

## [2026-07-02] status update — FinXL by Randstad Digital, Scrum Master
- Application submitted. meta.md + outputs/tracker.md updated to Submitted / Awaiting response.

## [2026-07-03] ingest — BlackRoc Scrum Master resume + cover letter
- Resume: no new biographical facts (derived from wiki); "Supergraph Migration" used as an
  alternate name for the Xero API modernisation program (already tracked in [[projects]]).
- Cover letter: entry added to [[cover-letter-examples]] — new "three-company collective framing"
  hook device (name all anchor companies together in one sentence as a repeated-pattern proof-point,
  before the supporting bullets). Added as a tailoring device in [[positioning]]. User confirmed
  liked: the pod/parallel-teams collective framing paragraph.
- Pages touched: [[cover-letter-examples]], [[positioning]], [[index]], [[processed]]

## [2026-07-03] apply (finalised) — BlackRoc (recruiter), Scrum Master
- PDFs generated via /render: "Alan Soto - Scrum Master - Blackroc - Resume.pdf" (~223 KB) and
  "Alan Soto - Scrum Master - Blackroc - Cover Letter.pdf" (~72 KB)
- Archived markdown sources to raw/resumes/: Alan-Soto-2026-07-03-BlackRoc-Scrum-Master-Resume.md
  and Alan-Soto-2026-07-03-BlackRoc-Scrum-Master-Cover-Letter.md
- Ingested both markdown sources (see ingest entry above)
- meta.md written; tracker row appended (status: Ready to send)
- Pages touched: [[log]], [[processed]], [[tracker]]

## [2026-07-03] status update — BlackRoc (recruiter), Scrum Master
- Application submitted. meta.md + outputs/tracker.md updated to Submitted / Awaiting response.

## [2026-07-03] apply — BlackRoc (recruiter): Scrum Master, government ICT transformation program
- Multi-pod Scrum Master role (3 delivery pods) on a government ICT transformation program in build
  phase (customer portal, CRM, data, integration services). Recruiter-placed via BlackRoc (Nat).
  12-month contract, ASAP start.
- Folder: `applications/2026-07-03-blackroc-scrum-master/` with job-description.md, gap-analysis.md,
  resume-draft.md, cover-letter-draft.md
- Gap analysis: moderate-strong fit. Best match in the wiki for "multi-pod coordination without
  owning technical delivery" - Suncorp (4 teams, offshore, regulated enterprise) and Xero (coaching
  10+ teams without owning their delivery) map directly onto the JD's core ask. Gaps: Azure DevOps
  (bridged via Jira/Confluence dashboarding and the Jira Data Quality Score work), government sector
  specifically (bridged via Suncorp's ASX-listed regulated-enterprise governance), Dynamics
  365/Power Platform (unbridged, "highly regarded" not required).
- Drafted `resume-draft.md`: Scrum Master framing leading with multi-pod/multi-team coordination.
  Five experience entries: Xero (coaching 10+ teams without owning delivery), Suncorp (4 teams incl.
  offshore, regulated enterprise governance), Go1 (explicit Scrum Master, squad of 8, all ceremonies),
  Virgin Australia (4 POs coached in parallel, 70+ person planning), Console/Reapit (Iteration
  Manager, ceremonies). CSM listed first in education.
- Drafted `cover-letter-draft.md`: bullet format, "running one pod vs three pods" framing opener.
  Three bullets (Xero enabling-Dev-Leads angle, Suncorp multi-pod coordination, Go1 ceremonies +
  Xero dashboarding/reporting for the Azure DevOps angle). One-line government-sector gap
  acknowledgement pivoting to Suncorp regulated-enterprise match.
- Pages touched: [[log]], [[keywords]] (added gap-watch entry), [[positioning]] (added role-emphasis
  note for multi-pod/government Scrum Master variant)

## [2026-07-06] apply — Karlka Recruiting Group (agency): Project Manager, Fine Modernisation Program (Stream 2 - Data Platform and Integration)
- State Government Agency (Queensland, via Karlka Recruiting Group / consultant Mitch), Brisbane
  City, 12-month contract + possible extensions, $120-$145/hr + super. Apply by 2026-07-10.
- JD offers two streams under one Project Manager title: Stream 1 (CRM PoC + Client Portal +
  identity management) and Stream 2 (Data Platform and Integration, Databricks + cross-agency data).
  **Likely the same underlying program as the 2026-07-03 BlackRoc Scrum Master JD** — that JD
  described "customer portal, CRM, modern data capabilities, and integration services" delivered via
  multi-pod teams reporting to a "Senior Project Manager," which lines up closely with this program's
  two streams. Flagged for Alan's awareness (possible submission-overlap risk across two recruiters
  for the same end client) — not confirmed, no agency/program name given in the BlackRoc JD.
- Nominated **Stream 2 only**. No CRM/case-management/identity-verification evidence anywhere in the
  wiki for Stream 1; Stream 2 maps directly onto Suncorp's data-platform migration (data governance,
  Infrastructure/Security/vendor coordination) and Xero's API/integration program. Databricks itself
  is unevidenced — flagged as the primary gap, bridged via delivery-governance competency rather than
  hands-on platform claims.
- Folder: `applications/2026-07-06-karlka-project-manager-data-platform/` with job-description.md,
  gap-analysis.md, resume-draft.md, cover-letter-draft.md.
- Resume: headline "Project Manager"; three full experience entries (Xero Lead TPM, Suncorp Delivery
  Coach, Console/Reapit Iteration Manager) with Go1/Virgin/intelliHR/2sol/Emedia folded into Earlier.
  Core skills grid reframed around data/integration/governance keywords for Stream 2.
- Cover letter: pain-point opener (standing up a new platform across siloed stakeholder groups),
  three bullets (Suncorp multi-team+vendor+Infrastructure/Security coordination, Xero Unified
  Burndown as cross-domain integration governance, Console/Reapit vendor integration), plain
  Databricks + government-sector gap acknowledgement pivoting to delivery-governance competency.
- Pages touched: [[log]]

## [2026-07-06] correction — SQL/ETL/data-platform facts confirmed (for Karlka Stream 2 application)
- User wanted to lead the Karlka cover letter with "proficient in SQL and ETL tools" and "compute
  optimization... inside out" — neither was evidenced anywhere in the wiki, so asked for the source
  before writing it in as fact.
- Confirmed: hands-on SQL query writing/optimisation at **Emedia** (2006-2012, ticketing/booking/
  payment systems); **Xero** SQL/ETL work is a mix of hands-on (self-built SQL reporting dashboards)
  and delivery oversight (directing ETL/data-pipeline work as TPM on AI for Customers).
- Did **not** confirm hands-on cluster-level "compute optimization" or formal contractual "SLA
  management" — softened to the terms already evidenced: Emedia capacity/infrastructure planning,
  and Xero's Code Red SLO/on-call/uptime practice. Flagged both substitutions back to the user.
- Pages touched: [[skills]] (new "Data / SQL / ETL skills" section), [[experience]] (Emedia SQL
  bullet, Xero AI for Customers ETL bullet), [[keywords]] (new SQL/ETL/data-platform section with
  gap caveat).
- Follow-up: user flagged the resume was cutting 5 of 8 roles down to a one-line "Earlier" summary.
  Expanded to the full 8-role history (Xero, Go1, Suncorp, Virgin Australia, intelliHR,
  Console/Reapit, 2sol, Emedia) as full dated entries with bullets, matching the depth used for the
  2026-06-23 Magentus resume. "Earlier" section removed.

## [2026-07-06] apply (finalised) — Karlka Recruiting Group / state government agency Project Manager (Data Platform and Integration)
- Proofread via resume-proofreader subagent: fixed a double space, "Masters of" → "Master of"
  Project Management, "Previouis" → "Previous" typo, and a stray curly apostrophe in the cover
  letter (standardised to straight apostrophes).
- PDFs generated via /render (company name passed explicitly as "Karlka" since the folder-name
  inference would otherwise be ambiguous).
- Archived resume and cover letter to raw/resumes/ as
  Alan-Soto-2026-07-06-Karlka-Project-Manager-Resume.md and …-Cover-Letter.md.
- Ingested both markdown sources: new "Government / Data Platform & Integration PM" cheat-sheet
  entry (🚩 flag device) added to [[positioning]]; government/Databricks/fines-system domain terms +
  Databricks gap-watch entry added to [[keywords]]; new cover-letter-examples entry added
  (compressed context-setting opener, Databricks tool-gap named and bridged in the same sentence —
  user confirmed what worked: "straight to the point").
- Wrote meta.md (status: Ready to send) and appended a tracker.md row.
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[processed]], [[index]]

## [2026-07-06] correction — Profile section rendered as plain text (Karlka resume)
- User reported the Profile section's bullets and bold labels ("**Delivery & Governance:**" etc.)
  came out as flat plain text in the PDF, not a bulleted/bold list.
- Root cause: not a rendering bug. `build.js`'s `parseProfile()` joins every line in the Profile
  section into one plain string, and `resume.html`'s `buildProfile()` renders it via `esc()` into a
  single `<p>` — Markdown syntax (bullets, `**bold**`) is never parsed. This matches the documented
  format spec (`/apply` Step 3): "Profile: one or more summary paragraphs — plain prose, no
  bullets." The draft violated that spec.
- Fix: rewrote the Profile section as a single plain-prose paragraph carrying the same content
  (Delivery & Governance / Technical Depth / Stakeholder Management folded into flowing sentences,
  no bold/bullet markdown), in both `applications/2026-07-06-karlka-project-manager-data-platform/
  resume-draft.md` and the archived `raw/resumes/Alan-Soto-2026-07-06-Karlka-Project-Manager-
  Resume.md`. Re-ran `build.js` to regenerate both PDFs.
- Takeaway for future drafts: never use `- ` bullets or `**bold**` inside `## Profile` — write it as
  prose from the start. Core skills' `Label: item · item` line format is the correct place for
  labelled/structured content.

## [2026-07-07] apply (finalised) — Glen Fisk Recruitment Project Manager (Data Platform and Integration, ref 1644056)
- Duplicate application: same underlying two-project program as the 2026-07-06 Karlka application
  (fines/data-platform modernisation), advertised separately by Glen Fisk Recruitment. Resume and
  cover letter content reused near-verbatim per user request; only recruiter-facing details changed
  (salutation → "Dear Hiring Team," since no single named contact; opener reworded from "Stream 2"
  to "the Data Platform and Integration project (reference 1644056)").
- Caught and fixed a defect while rendering: the resume draft had internal 🚩 gap-analysis flag
  markers ("(🚩 Data Platform and Integration Experience)") leaking into three job-title headers,
  copied over from the Karlka draft. Stripped before proofreading/build — see "Raw-file
  housekeeping" note at the top of this log re: the still-unfixed Karlka copy.
- Proofread via resume-proofreader subagent: no typos/grammar/spelling issues found.
- PDFs generated via /render (company name passed explicitly as "Glen Fisk Recruitment").
- Archived resume and cover letter to raw/resumes/ as
  Alan-Soto-2026-07-07-Glen-Fisk-Recruitment-Project-Manager-Resume.md and …-Cover-Letter.md.
- Ingest was a no-op for wiki content (near-duplicate of the already-ingested Karlka source, no new
  biographical facts or reusable framings) — recorded in processed.md only.
- Wrote meta.md (status: Ready to send) and appended a tracker.md row.
- Pages touched: [[processed]], [[index]]

## [2026-07-07] status update — Karlka + Glen Fisk applications submitted
- Alan confirmed both the Karlka (2026-07-06) and Glen Fisk Recruitment (2026-07-07) Project
  Manager / Data Platform and Integration applications have been submitted.
- Updated `status: Submitted` / `outcome: Awaiting response` in both applications' meta.md files
  and in the corresponding outputs/tracker.md rows.

## [2026-07-07] apply (draft) — Paxus Program Analyst
- New application folder: `applications/2026-07-07-paxus-program-analyst/`. Recruiter: Anita
  Cunningham, Paxus. Brisbane QLD, Contract/Temp, Delivery Office / Technology & Delivery division.
- Notable positioning challenge (first of its kind so far): this is a PMO/Program **Analyst**
  support role, well below Alan's usual target altitude (Lead TPM / Delivery Lead / Principal PM).
  Gap analysis concluded the risk is overqualification perception, not a capability gap — resume
  uses a plain "Program Analyst" headline and leads with hands-on analytical/reporting work
  (self-built SQL/DORA dashboards, Jira Data Quality Score, Unified Burndown) rather than
  "led dozens of teams / EGM-level" scale claims.
- Genuine partial gaps noted: no wiki evidence of financial/budget forecasting or procurement
  process ownership specifically, and MS Project/SharePoint are not named tools (Jira/Confluence
  are). None treated as deal-breakers — see [[gap-analysis]] in the application folder.
- User confirmed hands-on proficiency with **Jira Analytics** specifically (not previously captured
  in [[skills]]/[[keywords]] — worth folding into the wiki on next Ingest).
- Cover letter uses the FinXL-style compressed bullet format (named recruiter salutation, one-line
  role statement, short hook, four bullets, no gap paragraph, low-pressure close) — closest
  reference for a mid-level, recruiter-placed contract role.
- Status: draft (resume-draft.md, cover-letter-draft.md, gap-analysis.md, job-description.md
  written). Awaiting finalise/render.

## [2026-07-07] ingest — Paxus Program Analyst resume + cover letter
- Ingested both archived sources for the Paxus application. No new biographical facts (resume/letter
  derived from the wiki), but captured new positioning/keyword content:
  - New "Program Analyst" headline variant + cheat-sheet entry in [[positioning]] — the first
    application in the wiki's history to deliberately position *below* Alan's usual altitude
    (no "dozens of teams" / "EGM-level" scale claims) to avoid reading as overqualified for an
    analyst/support role.
  - "Jira Analytics" added to [[keywords]] Tools section (user-confirmed proficiency, not
    previously captured) and "Program Analyst" added to Roles/titles.
  - New Paxus gap-watch entry in [[keywords]]: financial/budget forecasting, procurement support,
    MS Project, SharePoint, superannuation — all soft gaps, none deal-breakers.
  - New entry in [[cover-letter-examples]] for the letter's modest, no-gap-paragraph, scale-
    downplaying format. User confirmed what worked: the bullet evidence choices.
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[index]], [[processed]]

## [2026-07-07] apply (finalised) — Paxus Program Analyst
- Proofread via resume-proofreader subagent: found and fixed 4 issues before rendering — US/AU
  spelling inconsistency ("artifacts" → "artefacts"), "Masters of" → "Master of" Project Management,
  unspaced date-range hyphen in the Earlier paragraph, and inconsistent capitalisation ("Business
  units" → "Business Units").
- PDFs generated via /render (`Alan Soto - Program Analyst - Paxus - Resume.pdf` and
  `... - Cover Letter.pdf`); regenerated once more after the user trimmed a phrase from the Suncorp
  cover-letter bullet post-proofread, to keep the archived source and rendered PDF in sync.
- Archived resume and cover letter to raw/resumes/ as
  Alan-Soto-2026-07-07-Paxus-Program-Analyst-Resume.md and …-Cover-Letter.md; ingested both (see
  ingest log entry above).
- Wrote meta.md (status: Ready to send) and appended an outputs/tracker.md row.
- Pages touched: [[processed]], [[index]]

## [2026-07-07] status update — Paxus Program Analyst application submitted
- Alan confirmed the Paxus Program Analyst application has been submitted.
- Updated `status: Submitted` / `outcome: Awaiting response` in meta.md and the outputs/tracker.md row.

## [2026-07-07] apply (draft) — HomeRepair Program Delivery Lead (12mo contract)
- Created applications/2026-07-07-homerepair-program-delivery-lead/ with job-description.md
  (verbatim), gap-analysis.md, jd-analysis.md, resume-draft.md, cover-letter-draft.md.
- Standout angle: HomeRepair is a wholly owned Suncorp Group subsidiary, and Alan worked inside
  Suncorp Group directly (Delivery Coach, 2019-20). Opened the cover letter with that parent-company
  connection rather than a generic JD-interpretation hook — the sharpest "wrote this for this job"
  angle in the wiki to date. Not an industry gap; a structural advantage.
- Fit: Strong. Near-perfect capability + altitude match (a "Lead" delivery role, matching the
  review-confirmed Lead level). Every core responsibility directly evidenced — end-to-end delivery
  (Go1), integrated delivery plans/milestones/owners/dependencies (Xero Unified Burndown), governance
  frameworks + reporting (Suncorp + Xero), structuring ambiguity, senior-stakeholder accountability
  without authority. JD's written-communication emphasis plays to a review-confirmed strength.
- Positioning: used the "Delivery Lead (transformation)" angle; headline "Program Delivery Lead"
  (matches JD title, filename-safe). Full entries: Xero, Suncorp, Go1, intelliHR; 2sol/Console/
  Virgin/Emedia collapsed to Earlier. Cover letter = confirmed senior formula (role statement +
  match claim opener, three role-specific bullets, synthesis sentence, one-line gap, low-pressure
  close) + accountability-without-hierarchy line (Clipchamp device).
- Only caveat: transformation work has run through technology programs rather than operational ones
  — handled as a single light gap sentence, pivoting to domain-independent delivery discipline +
  known Suncorp environment. No missing tool/credential (Master of Project Management covers the
  desirable qualification).
- Not yet rendered or finalised.
- Pages touched: none of the core wiki pages yet (draft stage); log only.

## [2026-07-10] apply (redo) — HomeRepair Program Delivery Lead
- Alan pasted the same HomeRepair Program Delivery Lead JD again (word-for-word identical to the
  2026-07-07 save). Found the existing draft folder already had a complete but unfinalised set
  (gap-analysis, jd-analysis, resume-draft, cover-letter-draft) — the 2026-07-07 application was
  never rendered or submitted (no tracker.md row, no "submitted" log entry).
- Alan chose to redo the gap analysis and drafts rather than resume the existing ones. Re-read the
  full wiki fresh (no material new facts since 2026-07-07 relevant to this role) and rewrote
  gap-analysis.md, jd-analysis.md, and cover-letter-draft.md — content and fit assessment are
  materially the same as the 2026-07-07 versions (Strong fit; Suncorp-subsidiary hook; light
  technology-vs-operational-transformation gap sentence).
- Resume-draft.md switched from Format A (standard bullets) to Format B (narrative/hybrid,
  build-narrative.js) at Alan's request — first HomeRepair-specific change. Narrative treatment
  (background + Challenge & Impact + Key Contributions) applied to Xero, Suncorp, and Go1 (all
  within/at the ~6-year cutline, same boundary call made for Suncorp as the 2026-07-09 Lab3
  application); intelliHR, Console/Reapit, and 2sol kept as plain bullets; Emedia + early career
  collapsed into Earlier. Suncorp's Challenge & Impact block was written to lead with the
  parent-company connection explicitly in the background paragraph, not just the cover letter.
- Not yet rendered or finalised.
- Pages touched: none of the core wiki pages; log only.

## [2026-07-10] ingest — Alan-Soto-2026-07-10-HomeRepair-Program-Delivery-Lead-Resume.md / -Cover-Letter.md
- Resume: no new biographical facts (derived from wiki as required); captured the "Suncorp
  parent-company named directly in the resume background paragraph" device and the combined
  "Iteration Manager / Delivery Coach" Suncorp title variant as a new headline-table row in
  [[positioning]]. Added new ATS terms to [[keywords]]: embedment, discovery to embedment,
  structuring ambiguous problems, delivery discipline, pace and momentum, customer and operational
  outcomes, Strategic Growth, fit-for-purpose governance.
- Cover letter: added a new entry to [[cover-letter-examples]] — parent-company-direct hook (Suncorp
  Group), "Re:" subject line, prose-paragraph body, immediate-availability close per the wiki's
  Availability note. User confirmed what worked: the casual tone and the immediate-availability
  close.
- Updated [[index]] entry counts (cover-letter-examples 16 → 17, positioning headline variants 22+ →
  23+) and most-recent-entry summary.
- Pages touched: [[keywords]], [[positioning]], [[cover-letter-examples]], [[index]]

## [2026-07-09] apply (draft) — Lab3 Senior Project Manager (Brisbane, hybrid, permanent)
- Created `applications/2026-07-09-lab3-senior-project-manager/` with job-description.md (verbatim),
  gap-analysis.md, jd-analysis.md, resume-draft.md, cover-letter-draft.md.
- Lab3 is an Azure engineering consultancy (Cloud & DevOps, Data, IoT & AI, Security, Network).
  Permanent, vendor/consultancy-side Senior PM delivering complex client tech projects; onsite 2
  days/week in Brisbane. First narrative-format (Format B / build-narrative.js) resume in the wiki.
- Fit: Strong. Four "ideal candidate" hard signals all directly evidenced — complex enterprise
  governance, Jira + burn-down competency (Unified Burndown, Jira Data Quality Score), agile/hybrid/
  waterfall + **DevOps** (Code Red / DORA — unusually strong here), and **vendor-to-client delivery**
  (2sol as Flight Centre's primary delivery partner is the literal anchor). Only real gap:
  Azure/Terraform/IaC, flagged "highly beneficial" not required — bridged via Code Red DevOps +
  infrastructure-adjacent coordination. Budget/project-finances is the soft spot among the *required*
  items (financial forecasting unevidenced) — framed via 2sol $5M+/mo commercial ownership, not
  fabricated tool hours.
- Resume (narrative): headline "Senior Project Manager". Narrative treatment (Challenge & Impact +
  Key Contributions) for Xero, Go1, Suncorp; plain-bullet full entries for Virgin, intelliHR,
  Console/Reapit, and 2sol (in chronological order — corrected after first draft wrongly demoted
  Virgin/intelliHR/Console to "Earlier" even though they postdate 2sol); Earlier now holds only
  Emedia + early Canada/Peru. **Cutline call:** Suncorp (Nov 2019–Nov 2020) narrated despite
  sitting just outside the strict ~6-year cutline, because it's the primary regulated-enterprise +
  vendor/offshore + infrastructure anchor for this role — easy to demote to plain bullets if Alan
  prefers.
- Cover letter: pain-point/problem-framing opener (FinXL device) + three role bullets (Xero
  governance+DevOps+Jira/burndown; Suncorp regulated enterprise + vendors/offshore + infra/security;
  2sol literal vendor-to-client + $5M+ commercial ownership) + synthesis sentence + light
  Azure/Terraform gap pivot to DevOps/software-engineer background + low-pressure close.
- Pages touched: [[log]] only (draft stage).

## [2026-07-09] apply (finalised) — Lab3 Senior Project Manager
- Proofread via resume-proofreader subagent (no leaked markers): fixed a Go1 "Solution" sentence
  fragment/comma splice (rewrote as two clean sentences, no dashes) and a double space in the
  Education line. User had made manual edits before finalise (reworded profile/intelliHR bullet,
  added Universidad de Lima + Peru to the BSc, reordered Certifications to PMP-first, reworded the
  cover-letter opener to first-person value + added a "Re:" subject line, trimmed the gap paragraph).
- PDFs generated via /render using **build-narrative.js** (first narrative-format resume taken to
  finalise; company name passed explicitly as "Lab3"). Resume renders clean at 3 pages, correct
  reverse-chronological order (Xero → Go1 → Suncorp → Virgin → intelliHR → Console/Reapit → 2sol →
  Earlier). Files: `Alan Soto - Senior Project Manager - Lab3 - Resume.pdf` + `... - Cover Letter.pdf`.
- Archived markdown sources to raw/resumes/ (…-Lab3-Senior-Project-Manager-Resume.md + …-Cover-Letter.md);
  ingested both (derived from wiki, no new biographical facts).
- Wrote meta.md (status: Ready to send) and appended an outputs/tracker.md row.
- **Flagged to user:** the manually-edited Certifications section lists "Project Management
  Professional (PMP)" with no year/lapsed qualifier — [[education]] records PMP as lapsed (~2025);
  suggested "PMP (2012)" but left the user's edit as-is pending their call.
- Ingest captured: new "Senior PM at a vendor/consultancy (Azure/cloud delivery)" cheat-sheet entry
  + narrative-format note in [[positioning]]; Lab3 gap-watch entry in [[keywords]] (Azure/Terraform
  "highly beneficial" not required; budget/project-finances soft spot; vendor-to-client cleanly
  evidenced via 2sol); new [[cover-letter-examples]] entry (pain-point opener reframed to first-person
  value + "Re:" subject line; named-tool Azure/Terraform gap pivot).
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[processed]], [[log]]

## [2026-07-09] status update — Lab3, Senior Project Manager application submitted
- Alan confirmed the Lab3 Senior Project Manager application has been submitted.
- Updated `status: Submitted` / `outcome: Awaiting response` in meta.md and the outputs/tracker.md row.

## [2026-07-09] apply (draft) — Karmo Engineering Delivery Manager
- Permanent role at Karmo (Australia's largest car subscription provider), Brisbane CBD hybrid.
  Reports to Director of Engineering; partners with CPO/Head of Product/Engineering Leaders.
- Gap analysis: one of the cleanest matches to date. Multi-squad delivery leadership (Xero, Go1,
  Suncorp), hands-on people leadership incl. hiring/onboarding/performance management (Go1,
  intelliHR, 2sol), offshore/distributed team coordination (Suncorp — direct, literal match),
  deep Jira/Confluence + DORA-metrics reporting practice, genuine software-engineering technical
  background (2sol transformation, Emedia), hyper-growth scale-up experience (Go1), and real
  AI-tool exposure (Xero AI for Customers, intelliHR NLP analytics, daily use of AI coding tools)
  all directly evidenced, not bridged. Only real gap: automotive/mobility/fleet industry
  experience, which the JD itself flags "highly regarded," not required.
- Resume (narrative): headline "Engineering Delivery Manager". Narrative treatment (Challenge &
  Impact + Key Contributions) for Xero, Go1, Suncorp — same cutline call as Lab3 (Suncorp narrated
  despite sitting just outside the strict ~6-year window, because it's the direct
  offshore/distributed-team evidence this JD explicitly asks for); plain-bullet entries for
  Virgin, intelliHR, Console/Reapit, 2sol; Earlier holds Emedia + early Canada/Peru.
- Cover letter: Amber-style hook (name the challenge of leading squads through fast growth, ground
  immediately in Go1 + Xero examples) rather than the senior "JD interpretation + match claim"
  formula — better suited to Karmo's energetic, non-corporate scale-up tone. Three bullets
  (Suncorp offshore/distributed teams; 2sol technical background; AI-tool exposure) + synthesis
  sentence + plain automotive/mobility gap acknowledgement (curious-and-honest device, no forced
  bridge) + low-pressure close.
- Ingest captured: new "Engineering Delivery Manager role at a scale-up" cheat-sheet entry in
  [[positioning]]; Karmo gap-watch entry in [[keywords]] (automotive/mobility/fleet gap;
  QA-specific coaching minor gap; otherwise a clean match).
- Pages touched: [[positioning]], [[keywords]], [[log]] (draft stage — awaiting finalise).

## [2026-07-09] ingest — Karmo Engineering Delivery Manager (resume + cover letter)
- Resume: derived from the wiki, no new biographical facts. Reframed the Xero Unified Burndown
  story per user edit to foreground migration scoping/roadmap-building ahead of coaching. Added
  "Engineering Delivery Manager" cheat-sheet entry and a "Personal preference note" (genuine
  scale-up-vs-enterprise preference, not just adaptability) to [[positioning]]; Karmo gap-watch
  entry (automotive/mobility/fleet gap, QA-specific coaching minor gap) to [[keywords]].
- Cover letter: user substantially rewrote the draft. Captured a new hook pattern — preference-
  statement opener (states a genuine scale-up preference rather than proving pure adaptability) —
  plus a new structural device (bolded-label bullet block + "Re:" subject line + casual greeting +
  immediate-availability close instead of the standard low-pressure close). Added "Direct scale-up
  preference + immediate-availability close" to [[positioning]] tailoring devices; new entry added
  to [[cover-letter-examples]]. User confirmed what worked: the preference framing, casual tone,
  subject-line + bullet structure, and the direct-gap-plus-availability close.
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[index]], [[processed]]

## [2026-07-09] apply (finalised) — Karmo Engineering Delivery Manager
- Proofread via resume-proofreader subagent: found 4 small issues (US spelling "optimize" in both
  the resume Profile and a cover-letter bullet, a missing terminal period in the resume Profile,
  and a number-agreement error in the Suncorp descriptor line — "financial services and insurance
  group" -> "groups"). No leaked internal markers. All four fixed before rendering.
- PDFs generated via **build-narrative.js** (narrative format). Files: `Alan Soto - Engineering
  Delivery Manager - Karmo - Resume.pdf` + `... - Cover Letter.pdf`, both in the application folder.
- Archived markdown sources to raw/resumes/ (…-Karmo-Engineering-Delivery-Manager-Resume.md +
  …-Cover-Letter.md); ingested both (see ingest entry above — no new biographical facts from the
  resume; cover letter contributed a new hook pattern and structural device).
- Wrote meta.md (status: Ready to send) and appended an outputs/tracker.md row.
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[index]], [[processed]],
  [[log]]

## [2026-07-09] status update — Karmo, Engineering Delivery Manager application submitted
- Alan confirmed the Karmo Engineering Delivery Manager application has been submitted.
- Updated `status: Submitted` / `outcome: Awaiting response` in meta.md and the outputs/tracker.md row.

---

## [2026-07-10] outcome — Magentus, Senior Delivery Lead: Rejected
- Application submitted 2026-06-23; rejection received 2026-07-10.
- `meta.md` and `outputs/tracker.md` updated to Closed / Rejected.

---

## [2026-07-10] ingest (backfill) — Mining Tech Scrum Master DevSecOps (resume + cover letter)
- Found during `/lint` step 1: both files existed in `raw/resumes/` since 2026-06-25 but were never
  recorded in `wiki/processed.md` — first `/lint` run to catch a missed `/ingest`.
- Resume: no new biographical facts (content overlaps fully with existing Xero/Go1/Suncorp/Virgin
  entries). Added new "Scrum Master - DevSecOps" headline variant to [[positioning]]; added
  DevSecOps · security-aware delivery to [[keywords]] DevOps section; added mining · mining
  technology to [[keywords]] Domains (thin bridge via early-career Barrick Gold only).
- Cover letter: new entry added to [[cover-letter-examples]] — double gap acknowledgement (mining
  industry + SAFe SSM vs held CSM) in one short paragraph, bridged via the Barrick Gold Canada fact.
  User had no strong "what worked" preference when asked retroactively.
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[processed]]

## [2026-07-10] lint — 1 missed ingest backfilled, 2 new findings, 8 new gap-watch entries recorded
- Auto-fixed: backfilled the missed Mining Tech resume + cover letter ingest (see entry above).
- Auto-fixed: scanned all 22 `applications/*/job-description.md` files against [[keywords]] and
  recorded 8 new gap-watch entries for terms that recur in JDs but aren't evidenced anywhere in the
  wiki (Auto & General Dev Manager — MySQL/Splunk/New Relic; Magentus — GitHub/TDD/BDD/JPD/Compass;
  Stake — investment/trading platform domain; Karlka & Glen Fisk — CRM, recurring across multiple
  JDs; Paxus — PMBoK/BABoK/MSP/MoP; Lime Recruitment — HRIS/payroll systems).
- Checked: no orphan pages, no thin roles (all 9 experience.md roles have 4+ bullets), no new
  unmetric'd achievements beyond what's already tracked in [[achievements]]'s existing lint note, no
  newly-unevidenced [[skills]] entries.
- Flagged for review: 2 items added to `## Open lint findings` above — a university-name
  contradiction in two raw resumes (Mining Tech: Universidad Nacional de Ingeniería; FinXL:
  Pontificia Universidad Católica del Perú — both diverge from the canonical Universidad de Lima
  used everywhere else including their own application-folder drafts), and the Auto & General
  Development Manager application (submitted 2026-06-23) never having a proper `/apply` log entry
  or wiki backfill.

## [2026-07-10] ingest (fact update) — Xero employment ended, available immediately
- Not a file ingest — a direct fact update from Alan: Xero employment ended **July 2026**. Alan is
  available to start a new role **immediately**.
- [[experience]] — Xero entry date range changed from "Mar 2022 to Present" to "Mar 2022 to Jul
  2026"; added an "Employment ended" line.
- [[positioning]] — new "Availability note" section: future cover letters should state immediate
  availability plainly (no longer just the Karmo-style scale-up tone device — it's now a fact for
  every application). Added a tense-note caveat above "Professional-summary angles" flagging that
  several reusable summary openers use present tense ("Currently Lead Technical Program Manager at
  Xero") and need converting to past tense when reused going forward.
- Pages touched: [[experience]], [[positioning]], [[index]], [[log]]

## [2026-07-10] apply (finalised + submitted) — HomeRepair Program Delivery Lead
- Proofread via resume-proofreader subagent: 10 issues found (US/AU spelling inconsistencies —
  artifacts/artefacts, organized/organised; a tense mismatch; a comma splice; missing hyphens in
  compound modifiers "large scale"/"end to end"/"company wide"; "Masters of" → "Master of"; "a right
  fit" → "the right fit"). Alan confirmed fix-then-render; all 10 applied before build.
- PDFs generated via `build-narrative.js` (company name passed explicitly as "HomeRepair"):
  `Alan Soto - Program Delivery Lead - HomeRepair - Resume.pdf` and `…- Cover Letter.pdf`. No leaked
  internal markers (🚩/🔴) found on inspection.
- Archived resume and cover letter to `raw/resumes/Alan-Soto-2026-07-10-HomeRepair-Program-Delivery-
  Lead-Resume.md` and `…-Cover-Letter.md`; ingested both (see ingest entry above).
- Wrote `meta.md` and appended an `outputs/tracker.md` row; Alan confirmed the application was
  already submitted, so status was set directly to Submitted / Awaiting response (skipping the
  intermediate "Ready to send" state).
- **Known inconsistency in the submitted documents:** the "Xero employment ended July 2026" fact
  (see the ingest fact-update entry above) was confirmed only *after* this application had already
  been rendered and sent. The submitted PDF's Xero entry is dated "Mar 2022 - Jul 2026" but its
  Profile paragraph and Xero background text still say "Currently Lead Technical Program Manager at
  Xero" / "I own end-to-end delivery..." in the present tense — an internal contradiction that went
  out uncorrected, the same class of issue as the 2026-07-06 Karlka 🚩-leak. The repo copy of
  `resume-draft.md` has since been corrected to past tense for future reference; nothing to do
  retroactively about the copy already sent to HomeRepair.
- Pages touched: [[log]], [[processed]], [[tracker]]

## [2026-07-15] apply — Randstad Digital, Digital Solutions Delivery Lead (contract, Brisbane)
- Created `applications/2026-07-15-randstad-digital-solutions-delivery-lead/` with
  `job-description.md` (saved verbatim; recruiter Shauna Lawlor named in the ad), `gap-analysis.md`,
  `jd-analysis.md`, `resume-draft.md`, `cover-letter-draft.md`.
- Fit assessed **strong** — every hard requirement met. Degree requirement is a literal match
  (Bachelor of Systems Engineering = information systems); PM qualification met twice over (Masters
  of Project Management + PMP 2012, stated as "2012", never "active"); team-leader level, agile
  team formation, complex/high-risk systems and data delivery, and stakeholder influence all
  cleanly evidenced.
- **New gap recorded: ITIL** — first JD in the wiki's history to name it. Unevidenced in
  [[skills]], [[education]], and [[keywords]]. Bridged honestly in the cover letter via the
  service-management practice underneath the framework (SLOs, on-call, incident response,
  time-to-restore, release management, Suncorp governance frameworks) using the
  capability-hierarchy reframe. Not claimed in the resume.
- Procurement coordination (already tracked from Paxus 2026-07-07) and budget monitoring (tracked
  from Lab3 2026-07-09) both recur here. Deliberately not raised in the letter — each is a single
  clause inside one duty bullet, and the Lab3 precedent is to handle budget positively via 2sol's
  $5M+/month commercial ownership rather than as a confession.
- **Format B (narrative), confirmed by Alan.** Drafted first in Format A on the contract/keyword-heavy
  carve-out (recruiter placement, requirements written as discrete screening criteria), then switched
  at Alan's request. Narrative applied to Xero, Go1, and Suncorp — Suncorp again sits at the ~6-year
  cutline (same call as Lab3 and HomeRepair) and is the primary anchor here, so it keeps the
  Challenge & Impact block; Virgin Australia, intelliHR, and 2sol stay as plain bullets.
  **First contract/recruiter-placed role to go narrative** — if that repeats, the contract carve-out
  in `/apply` may want narrowing to genuinely ATS-heavy applications rather than all contract roles.
- Cover letter follows the compressed Karlka (2026-07-06) structure Alan confirmed: one-line role
  statement, one line naming the structural challenge, transition, three bullets (Suncorp, Xero,
  Go1), synthesis sentence, one-paragraph ITIL gap, immediate-availability close. Salutation
  addressed to the named recruiter.
- Read on the client: JD vocabulary ("service streams", ITIL, procurement, "overarching digital
  strategy") reads like local government, a council, or a utility. End client not named by Randstad.
  Third+ Randstad application in the wiki (Project Manager 2026-06-16/17, FinXL Scrum Master
  2026-07-02).
- Pages touched: [[log]], [[keywords]]

## [2026-07-15] ingest — Randstad Digital Digital Solutions Delivery Lead (resume + cover letter)
- Ingested both archived sources from `raw/resumes/Alan-Soto-2026-07-15-Randstad-Digital-Solutions-
  Delivery-Lead-{Resume,Cover-Letter}.md`.
- **Three new certifications recorded — the first new biographical facts from an application in
  weeks.** All three came from Alan's manual resume edits, not a confirmation pass:
  **AWS Cloud Practitioner (2026)**, **AI Assisted Development (2026)**, and **LeanUX and Product
  Discovery for Agile Teams (2018)**. → [[education]]
- **AWS Cloud Practitioner partially closes a long-standing lint finding.** "No AWS/Azure/GCP named
  anywhere in the wiki" has been open since the first full lint; this is the first named cloud
  platform. Rewrote the [[skills]] cloud lint note: the certification establishes AWS literacy and
  is safe to claim by name, but it is *not* hands-on platform delivery evidence — the
  "don't claim hands-on cloud-platform expertise" guidance stands.
- **Worth Alan's attention:** the AWS cert would have changed the gap framing on two already-
  submitted applications — Lab3 (2026-07-09, Azure/Terraform "highly beneficial") and FinXL
  (2026-07-02, "Cloud Platforms portfolio projects"). Both letters understated the cloud position.
  Nothing to do retroactively; flagged so future cloud-adjacent JDs use the credential.
- Open questions logged in [[education]]: issuing body unrecorded for all three certifications; no
  expiry known for the AWS credential (AWS certs typically run 3 years → ~2029); and this page's
  canonical "Masters of Project Management" now disagrees with two submitted resumes that say
  "Master of" (HomeRepair, Randstad Digital) following proofreader corrections.
- New headline variant + role-emphasis cheat-sheet entry: "Digital Solutions Delivery Lead". Notable
  as the rare JD where credentials are a literal match rather than something to bridge, and where
  the strategy duty is scoped to "facilitate and coordinate" — Alan's actual altitude per the
  performance-review calibration. → [[positioning]]
- New cover-letter entry recording a **new hook device**: the soft "I saw the role and wanted to
  reach out" opener paired with the "getting a digital strategy off the page" framing paragraph.
  Alan confirmed the opener as what worked. Distinct from the pain-point and JD-interpretation
  openers — it names the unglamorous reality of the work and quietly claims it as home turf. Also
  records a recruiter-specific tweak worth reusing: the synthesis sentence addresses the recruiter
  and names "your client" rather than the reader's own company. → [[cover-letter-examples]]
- Pages touched: [[education]], [[skills]], [[keywords]], [[positioning]],
  [[cover-letter-examples]], [[processed]], [[log]]

## [2026-07-15] apply (finalised + submitted) — Randstad Digital Digital Solutions Delivery Lead
- PDFs generated via `build-narrative.js` (company passed explicitly as "Randstad Digital"):
  `Alan Soto - Digital Solutions Delivery Lead - Randstad Digital - Resume.pdf` and
  `… - Cover Letter.pdf`. No leaked internal markers (🚩/🔴) found on inspection.
- Proofread via resume-proofreader subagent: 6 items raised, **3 applied** ("Masters of" → "Master
  of"; trailing whitespace on the AI Assisted Development cert line; em dash → spaced hyphen in the
  cover letter, per the project's own no-em-dash style rule). **3 rejected as wrong:** the flagged
  LinkedIn "duplicate" is the required `label - url` preamble format and fixing it would break the
  parse; the dash-consistency fix was suggested in the wrong direction (proofreader proposed
  standardising *on* em dashes, which [[resume-style]] bans); the date-range fix would have
  damaged prose in the Earlier section. Recurring lesson: the proofreader does not know this
  project's format spec or style rules — review its suggestions before relaying as fixes.
- Alan's manual edits before render: removed the `## Skills` section entirely (verified safe — the
  narrative template guards with `if (d.skills && d.skills.length)` and skips the block rather than
  emitting an empty heading); added the three new certifications; grouped certifications under
  "Project Management:" / "Other:" labels; rewrote the Suncorp descriptor; and moved 2sol from
  Experience into the Earlier prose paragraph (post-render, re-rendered).
- **Known cosmetic issue in the submitted PDF:** `parseEducation` treats every non-empty line in
  `## Certifications` as an entry, so the "Project Management:" and "Other:" group labels render in
  the sidebar as certifications with empty year fields, styled identically to the real ones. Alan
  was shown the exact rendering before the build and chose to keep the labels. Not a defect to fix
  retroactively — but if grouped certifications recur, `build-narrative.js` would need a label
  convention (e.g. treat a trailing-colon line with no ` · ` as a subheading).
- Resume shape at submission: Xero, Go1, Suncorp as narrative (Challenge & Impact + Key
  Contributions); Virgin Australia and intelliHR as plain bullets; Console/Reapit, 2sol, and Emedia
  compressed into the Earlier paragraph. 2sol's $5M+/month figure and team-of-5 preserved there —
  it is the only bridge for the JD's "monitor delivery against budget" duty.
- Alan confirmed the application was already submitted, so `meta.md` and the `outputs/tracker.md`
  row were written straight to Submitted / Awaiting response, skipping "Ready to send" (same as
  HomeRepair 2026-07-10).
- Pages touched: [[log]], [[processed]], [[tracker]]

## [2026-07-15] apply (draft) — Opengear (Digi International), Engineering Manager, Squad-Based Delivery
- Permanent, Brisbane-based, hybrid. Opengear builds the Network Resilience Platform (Smart Out of
  Band); owned by Digi International; offices Brisbane + Sandy, Utah. Role is the central leadership
  position in their squad-based model: 6-9 engineers across 2-3 domain squads. Reports alongside a
  Solutions PO and peer EMs.
- Gap analysis: **Strong** — one of the two or three cleanest matches in the wiki. Every core ask is
  directly evidenced: small-team people leadership (Go1 squad of 8, intelliHR team of 5, 2sol team
  of 5), Kanban/flow at Expert level, flow metrics used to manage rather than report (Xero Code Red
  DORA + Lead Time for Changes dashboards), backlog refinement (Go1, Xero PO partnership),
  coaching toward self-organisation (Virgin tell-show-do-review, Xero 10+ teams), technical
  credibility (8 yrs software engineer / systems architect). Notably the JD requires **no named
  tool, framework, or certification** — a first among recent applications.
- Two honest soft spots, both handled by evidence rather than argument: (1) **multi-squad line
  management** — Alan has line-managed one squad at a time and covered multiple teams through
  coaching/program roles (Xero 10+, Suncorp 4), never both at once; (2) **recency** — last direct
  people-management role ended Mar 2022. JD says "demonstrated track record," not "current."
  Deliberately not raised in the letter; instead the resume leads with people leadership over
  program scale.
- Only real gap: **networking / out-of-band infrastructure domain** (Lighthouse, NGCS, OGCS, OEM),
  which the JD flags "Desired But Not Required." Bridged via Suncorp's telephony platform
  replacement (nearest thing in the wiki to network infrastructure) + Emedia capacity planning +
  software-engineering background.
- Resume (narrative, Format B): headline "Engineering Manager". Narrative treatment for Xero, Go1,
  Suncorp — **Suncorp sits right on the ~6-year cutline, same boundary call as Lab3, HomeRepair, and
  Karmo**; plain bullets for Virgin, intelliHR, Console/Reapit, 2sol; Earlier holds Emedia + early
  Canada/Peru. Virgin kept in Experience rather than Earlier despite being a five-month engagement —
  it is the most literal "coach squads until they run ceremonies without you" evidence in the wiki.
- Cover letter: **new hook device — the "invisible job" framing.** Opens by naming what makes the
  role hard rather than what makes it appealing ("The hardest part of running squads well is that
  most of the job is invisible... very little appears to be happening. That is the point."), then
  names the JD line it answers. Same family as the Randstad "unglamorous reality" framing, but the
  claim is inverted: it defines success as absence, which is this JD's central idea. "Re:" subject
  line (Lab3/Karmo/HomeRepair device) + three labelled prose blocks ("At Go1:", "At Xero:", "At
  Virgin Australia:") mapped one-to-one onto the JD's three stated priorities + synthesis sentence +
  one-paragraph domain gap + immediate-availability close. ~330 words.
- Karmo (2026-07-09) is the closest prior analogue by role shape, but its scale-up-preference opener
  was deliberately **not** reused: Opengear/Digi is a global company serving 75% of the Fortune 500
  and the JD's tone is measured and deliberate, not high-energy scale-up. Useful counter-example for
  the [[positioning]] note warning against overusing that device.
- Pages touched: [[log]] (draft stage — awaiting finalise).

## [2026-07-15] ingest (fact update) — Nagare (nagare.com.au), personal delivery-tools site
- Not a file ingest and not a resume or cover letter — a direct fact from Alan, surfaced while
  drafting the Opengear application because that JD asks for flow-metrics exposure. Followed the
  "fact update" shape used for the 2026-07-10 Xero employment-end entry; nothing added to `raw/`,
  nothing recorded in [[processed]] (no source file exists).
- Content verified by fetching `nagare.com.au` and the forecaster page directly rather than relying
  on Alan's one-line description — which turned out to understate it substantially.
- **What Nagare is:** personal site, tagline "Software delivery, simplified.", named for the
  Japanese word for *flow*. Audience: "delivery practitioners." Hosts **The Map** (interactive
  guide to delivery knowledge), the **Delivery Date Forecaster**, an **Operating Rhythm Builder**,
  and a **Feedback Coach** marked coming soon (not shipped — do not claim it).
- **Delivery Date Forecaster:** Monte Carlo simulation — samples historical throughput and runs the
  remaining work 10,000 times to produce **P50 / P85 / P95** completion dates. Imports CSV from
  Jira, Asana, Linear, and Azure DevOps; accounts for undiscovered scope and reduced-capacity
  periods; renders cumulative-probability and throughput-distribution charts; runs entirely
  client-side ("Your data never leaves your browser").
- **Why this matters beyond one application.** Two structural changes to the wiki:
  1. **Probabilistic forecasting is a new skill** ([[skills]], *Experienced*, built not just
     practised) and is distinct from the deterministic capacity/delivery forecasting already
     claimed. New [[keywords]] section for the vocabulary (Monte Carlo, throughput sampling,
     P50/P85/P95, queue depth, confidence intervals).
  2. **It is the only present-tense hands-on engineering evidence in the wiki.** Every other build
     claim stops at Emedia (2012). [[skills]] "Software Development — Expert" annotated accordingly.
     This is now the best answer to any JD wanting a technically credible leader.
- **Azure DevOps nuance recorded, gap deliberately NOT closed.** The forecaster ingests ADO CSV
  exports, which is data-format familiarity, not delivery experience. [[keywords]] Tools section and
  the standing gap-watch line both annotated with safe/unsafe phrasings. Same discipline as the AWS
  Cloud Practitioner call on 2026-07-15 — a credential/artifact is not delivery evidence.
- **Attribution confirmed by Alan:** his project, Lisa contributes. The site says "run by Lisa and
  Alan", so solo-founder phrasing is banned. **Commercial status: early and undecided** — free
  today; "business", "startup", "venture", and any revenue implication are banned.
- [[positioning]] — new "Nagare as evidence" section (what it changes, guardrails, and a tone
  caution: reads as craft to engineering-leadership audiences, as distraction to
  government/PMO/enterprise panels — lead with it for the former, cut it for the latter). New
  **"Built-the-tool proof"** tailoring device: where a JD asks for *exposure* to something Alan has
  built tooling for, name the artifact rather than claim the skill.
- **Open questions worth a prompt** (recorded in [[projects]]): Nagare's start date is unknown, so
  no resume line should carry a date; Lisa's surname/role and whether to name her are unknown; no
  usage, traffic, or adoption figures exist, so no traction claims. Also worth asking whether
  earlier applications understated the hands-on/technical-credibility angle — the Karmo
  (2026-07-09) Engineering Delivery Manager letter leaned on 2sol's CI/CD transformation for the
  "technical background" ask when Nagare was likely already live and is far stronger evidence.
- Pages touched: [[projects]], [[skills]], [[keywords]], [[positioning]], [[index]], [[log]]

## [2026-07-15] ingest (fact update) — Nagare start date confirmed
- Alan confirmed Nagare started **2025** ("a year ago"). Month unknown — use the bare year, not a
  `YYYY-MM-DD` date. This closes the first of the three open questions logged against [[projects]]
  earlier today; Lisa's naming and the absence of usage figures remain open.
- **The load-bearing implication is not the date itself but the overlap:** Nagare began while Alan
  was still at Xero (Mar 2022 - Jul 2026). It is a project he sustained alongside a demanding Lead
  TPM role, not something started after that role ended. Given his employment ended two weeks ago
  (2026-07-10 fact update), that distinction matters — without it, a recent side project on the
  resume of someone just out of a job reads as filling time. Recommended phrasing recorded in
  [[projects]]: "started alongside my role at Xero".
- Opengear resume updated: Nagare promoted from a Profile mention to a full `## Experience` entry,
  `### Nagare - Personal Project`, `2025 - Present · nagare.com.au`, listed **first** (chronologically
  correct — it is the only ongoing entry). Deliberately written as **plain bullets, not the narrative
  Challenge & Impact treatment**, despite sitting well inside the ~6-year cutline: the cutline rule
  governs *roles*, and a compact bullet entry keeps a personal project from visually outweighing the
  Xero entry directly beneath it. Profile and Skills mentions trimmed so Nagare is not claimed three
  times in one document.
- **Template constraint discovered and worth remembering:** `build-narrative.js` only parses
  `profile`, `skills`, `experience`, `earlier`, `education`, `certifications` (see
  `parseResumeDraft`). A `## Projects` section is collected into `sections['projects']` and then
  **silently dropped** — no error, no warning, it simply never reaches the template. Adding real
  Projects support would mean touching `resume-narrative.html`'s flow-node builder and pagination
  logic, which is why Nagare went into Experience instead. If personal projects recur across
  applications, that template change is the proper fix.
- Pages touched: [[projects]], [[log]]

## [2026-07-16] outcome — HomeRepair (Suncorp Group subsidiary), Program Delivery Lead: Rejected
- Application submitted 2026-07-10; unsuccessful outcome advised 2026-07-16.
- `meta.md` and `outputs/tracker.md` updated to Closed / Rejected.

---

## [2026-07-16] apply (finalised) — Opengear (Digi International), Engineering Manager, Squad-Based Delivery
- PDFs generated via `/render` (narrative format, `build-narrative.js`); archived resume and cover
  letter to `raw/resumes/`. Application drafted 2026-07-15, finalised 2026-07-16 — raw filenames and
  `meta.md` use the 2026-07-15 drafting date to match the application folder.
- Proofread gate flagged five items. Alan's call: fixed "montecarlo" → "Monte Carlo simulations" and
  a curly apostrophe in the cover letter; **deliberately left** the resume Profile's "self-organizing"
  (US spelling), its sentence fragment ("Proficient use of flow metrics…"), and the "strong optimizer
  of team processes" quote from the Xero performance review as written.
- Ingested both markdown sources. No new biographical facts — the resume is derived from the wiki,
  and Nagare's start date was already confirmed in [[projects]] on 2026-07-15.
- **First application to use Nagare as evidence in a submitted document**, and the first tailored
  resume to carry it as an Experience entry. Alan confirmed the Nagare paragraph — the
  "built-the-tool proof" device — as what worked in the letter.
- New cover-letter device: the **invisible-work opener** (squad work done well *looks* like nothing
  is happening; that is the point). Deliberately diverged from Karmo's scale-up-preference opener
  despite the near-identical role shape — Opengear's JD tone is measured, not energetic.
- Notable: **first JD in the wiki to require no named tool, framework, or certification at all.**
  Only gap raised was networking / out-of-band infrastructure ("Desired But Not Required"), bridged
  via Suncorp's telephony platform replacement and the systems-architect background.
- Pages touched: [[positioning]], [[keywords]], [[cover-letter-examples]], [[index]], [[processed]],
  [[log]]

---

## [2026-07-16] template fix — narrative resume silently dropped flat bullets
- **Symptom:** the Opengear resume's Nagare entry lost all three of its tool bullets in the PDF. The
  markdown and the parser were both fine — `parseExperience` reads label-less bullets into
  `cur.bullets` correctly.
- **Cause:** `resume-narrative.html` `buildExperienceNodes` chose *one* render style per role:
  `if (intro.length || sections.length) { … } else if (bullets.length) { … }`. A role with intro
  prose **and** flat bullets rendered the prose and silently discarded the bullets. Any entry that
  leads with a line of context and then lists items — a project entry, most obviously — hit this.
- **Fix:** intro, sections, and flat bullets now all render, in that order, each as its own flow
  block. Bullets get the entry header only if no intro/section already claimed it, so bullet-only
  roles (2sol, Virgin, intelliHR) render byte-identically to before. Verified against the paginated
  DOM, not just the exit code: all three Nagare bullets land as `<li>` items and the following Go1
  entry is untouched.
- Same class of silent-drop bug as the `## Projects` section noted in the 2026-07-15 entry above —
  the template fails quietly rather than erroring when content does not match its expected shape.
  **That `## Projects` gap is still open**; this fix does not address it. Worth remembering that the
  narrative template's failure mode is silence, so check rendered output, not just build success.
- Files touched: `claude-code-resume-template/resume-narrative.html`. Opengear PDFs re-rendered.

---

## [2026-07-16] submitted — Opengear (Digi International), Engineering Manager, Squad-Based Delivery
- Application sent 2026-07-16 (drafted 2026-07-15). `meta.md` and `outputs/tracker.md` updated to
  Submitted / Awaiting response.
- Raw filenames keep the 2026-07-15 drafting date to stay aligned with the application folder;
  `date_applied` and the tracker's Date sent record the actual send date.

---

## [2026-07-16] apply — Engineering Lead, Brisbane tech company (via Digital Native, Aaron Thomas)
- Folder: `applications/2026-07-16-digitalnative-engineering-lead/`. JD saved verbatim.
  $175-185k + super, permanent, inner-city Brisbane hybrid, reporting to an Engineering Manager.
- **Employer not named by the recruiter.** Signals (Brisbane, well-established tech company,
  "mission-critical software platform that keeps major cities moving", transportation / intelligent
  systems, cloud-native SaaS) point at an intelligent transport systems vendor - **Transmax**
  (inner-city Brisbane, owns the STREAMS traffic platform) is the best guess, Q-Free secondary.
  Unconfirmed; worth asking Aaron before interview.
- **New confirmed fact — Nagare's stack, with a hard guardrail.** Nagare is built in **React and
  TypeScript**, but Alan produces the code with **Claude Code** and explicitly disclaims
  proficiency: *"a high-level understanding of the framework but definitely not proficient."*
  Recorded in [[projects]] (new "Stack and how it is built" block) and [[skills]] (new React /
  TypeScript entry). Safe framing: "builds and ships React/TypeScript tools, AI-assisted". Unsafe on
  any document: proficiency, fluency, or strength in JS/TS/React. This is the **first named
  front-end stack anywhere in the wiki** and it closes nothing - it softens.
- **Gap of record: "Proficiency in JavaScript/TypeScript and React" is an ESSENTIAL JD requirement
  and is genuinely unmet.** First application in the wiki's history to proceed against an unmet
  *essential* (not nice-to-have) requirement. Alan's call, made 2026-07-16 with the gap stated
  plainly: **apply and downplay** - no gap paragraph in the cover letter, no apology, let the
  leadership evidence carry it and handle the stack question honestly at interview. Documented as a
  presentation choice that does **not** license a proficiency claim; no such claim appears in either
  document.
- Fit: **moderate**. The JD splits in two. Leadership half (coaching, mentoring, psychological
  safety, trio partnership, CI/CD/DevOps/SRE, architecture at the system level, sequencing
  increments) is an over-answer - the "makes the people around them better / mentors generously"
  language is near-verbatim the Xero performance review, and the CI/CD-DevOps-SRE bullet describes
  Code Red almost exactly. Bachelor of Systems Engineering matches the qualification line literally.
  Hands-on half (~40% of the role as written) is a decade behind him.
- Positioning: new framing added - **Engineering Lead (hands-on ITS / cloud-native SaaS)**. Hook is
  the JD's own anti-hoarding line ("This isn't a role for someone who wants to hoard the hard
  problems") answered with the **Practice-domain handover** - bootstrapped the subgraph, got UK Tax
  live as the first GA production query, then deliberately handed the domain to its owning team with
  pair programming. Giving away the most interesting problem in the program is the literal answer to
  their literal ask. Paired with Xero coach-10+-teams-owning-none, Go1 (squad of 8 *containing* a
  designer and a PO = the closest literal trio evidence in the wiki), and Virgin (tell-show-do-review
  until four POs ran their own ceremonies).
- Format B (narrative). Narrative treatment on Xero and Go1 only; Suncorp given plain bullets despite
  sitting at the ~6-year cutline - a deliberate departure from Lab3/HomeRepair, which gave it the
  narrative block. Reason: this is an engineering-leadership pitch and the two narrative slots are
  worth more spent on the engineering-team stories. **Nagare included as its own labelled
  experience entry** (intro + flat bullets), placed after Xero and dated 2025 - Present; it is where
  the React/TypeScript and Monte Carlo evidence lives. Depends on the flat-bullet render fix logged
  earlier today - check the rendered PDF, not just the build exit code.
- Gaps not raised (all nice-to-have): Kubernetes/Docker/Terraform (no evidence, no bridge), GitLab
  (recurrence of the standing GitHub gap), gRPC/Protobuf (REST/JSON/GraphQL carry the bullet),
  transport domain.
- Pages touched: [[projects]] (Nagare stack + guardrail), [[skills]] (React/TypeScript entry),
  [[keywords]] (gap-watch entry).

---

## 2026-07-20 — Apply: Bay Technologies, Engineering Manager (permanent, in-house, Brisbane/Milton, hybrid)

- **Company:** Bay Technologies — SME software vendor to Australian local/state/federal government (correspondence, governance, compliance, regulatory investigation); 26 years old; wholly owned subsidiary of Constellation Software / Vela APAX. Role reports to the GM, leads a five-person multidisciplinary team (.NET dev, infrastructure, test automation), partners with a Product Manager.
- **Fit: moderate-to-strong.** Clean, repeated match on the leadership shape — lead/coach a small multidisciplinary team, Agile delivery, PR/code-review/CI-CD discipline, architecture guidance, technical credibility. The standout match is **AI-first engineering**, the JD's marquee theme: Xero AI for Customers, intelliHR NLP analytics, daily AI coding tools, and Nagare (built with Claude Code) give genuine present-tense evidence, not a claim. That AI-first alignment plus the software-engineer-to-leader arc carries the application.
- **Gaps (concentrated in one place):** the JD prescribes a specific hands-on stack — **.NET/C#, SQL Server, JS/TS, Python** — plus Azure. **.NET/C# and Python are genuine, unbridgeable gaps (not claimed).** TS is AI-assisted-only (Nagare guardrail). SQL is hands-on but SQL Server unnamed. Azure is the standing cloud gap (AWS Cloud Practitioner held; JD offers Azure cert support; "highly regarded" not required). GitHub/GitLab + Actions/CI pipelines = standing Git-hosting gap, but CI/CD *practice* is strongly evidenced (2sol built it from scratch; Xero Code Red) — "or equivalent pipelines" gives room. ISO 27001 / ASD ISM named but unevidenced — folded into the secure-development *practice* (Emedia secure payment systems, Suncorp regulated), not claimed as frameworks. Government-sector is the usual Suncorp bridge.
- **Resume: Format B (narrative), headline "Engineering Manager."** Narrative treatment on Xero, Nagare, Go1, and Suncorp (Suncorp at the ~6-year cutline given a stated move-if-preferred note in the draft). **Nagare included as its own labelled experience entry** (2025 - present), placed second after Xero — deliberate, because it is the single best proof of the AI-first + technical-credibility asks for this specific JD. intelliHR, 2sol, Emedia given as plain bullets under Earlier (2sol = the engineering-practice-transformation / code-review / CI-CD anchor; Emedia = secure HA architecture + production SQL + systems-architect credibility). Skills list deliberately omits .NET/C#, Python, Azure hands-on, ISO 27001, ASD ISM; includes AWS Cloud Practitioner and "React/TypeScript (AI-assisted)."
- **Cover letter:** measured/professional tone (Bay is a stable SME, not a scale-up — deliberately NOT the Karmo scale-up-preference opener; closest tonal siblings are Opengear/Randstad Digital). **New hook: "AI-first, already" —** opens on the fact that most leaders are still working out AI-first practice while Alan already builds that way (daily AI tools + ships React/TS with Claude Code), grounded immediately in Xero AI for Customers + Nagare. Labelled-prose-block body ("At Xero:", "At Go1:", "On secure delivery:") per the Opengear/Randstad device. One honest gap paragraph on the .NET/C#/Python stack — named plainly, pivoted to language-agnostic leadership + fast-ramp software-engineer foundation + the JD's own "from time to time" hands-on framing + capability-hierarchy reframe; light Azure/AWS-cert nod. Immediate-availability close.
- **Positioning:** new cheat-sheet framing to add — **Engineering Manager (AI-first, government-software SME)**: lead with AI-first as genuine built evidence (Nagare + Xero AI) rather than a claim; pair with Go1 (literal five-to-eight-person multidisciplinary team shape) and the Emedia/Suncorp secure-delivery thread; handle the prescribed-stack gap with the honest named-stack pivot rather than stretching. First application where AI-first is the marquee JD requirement AND Alan over-answers it with hands-on build evidence.
- **Not yet rendered.** Draft stage — awaiting user review / "finalise".
- Pages to touch on finalise: [[positioning]] (new Engineering Manager / AI-first-SME framing + cover-letter hook device), [[keywords]] (gap-watch: .NET/C#, Python, SQL Server, ISO 27001, ASD ISM, GitHub Actions/GitLab CI as named items), [[cover-letter-examples]] (Bay entry — "AI-first, already" opener).

---

## 2026-07-20 apply (finalised) — Bay Technologies, Engineering Manager

- PDFs generated: `Alan Soto - Engineering Manager - Bay - Resume.pdf` and `... - Cover Letter.pdf`, via `node claude-code-resume-template/build-narrative.js applications/2026-07-20-bay-technologies-engineering-manager/` (Format B / narrative). Note: the resume-pdf-renderer subagent ran the proofreader gate and reported findings but stalled before writing the PDFs; I applied the three proofreader fixes and ran the narrative build directly, then confirmed both PDFs on disk.
- Proofreader fixes applied to the resume before build: dangling "operating machinery" clause reworded with spaced hyphens (not em-dashes, per house style); "production level" → "production-level"; "executive-GM / CTO level" → "executive GM/CTO level". Also removed a leaked internal editorial note from the Suncorp line ("...move me to plain bullets if preferred") and converted em-dashes in the user's cover-letter edits to spaced hyphens.
- **Factual correction on finalise — AWS Cloud Practitioner is NOT held.** User confirmed 2026-07-20 the exam is booked ~7 Aug 2026 (in progress). Resume now lists "AWS Cloud Practitioner (in progress) · expected Aug 2026"; cover letter says "expected 7 August". Wiki corrected across [[education]], [[skills]], [[keywords]] (all previously recorded it as held 2026 — a wrong inference from an earlier resume edit). Consequence: the cloud-gap framing on Lab3 (2026-07-09) and FinXL (2026-07-02) was correct as sent; the earlier lint worry is moot.
- Archived both drafts to `raw/resumes/Alan-Soto-2026-07-20-Bay-Technologies-Engineering-Manager-{Resume,Cover-Letter}.md`; wrote `meta.md` (status: Ready to send); appended tracker row (Ready to send).
- Pages touched: [[positioning]] (new Engineering Manager / AI-first-SME headline row + cheat-sheet), [[keywords]] (Bay gap-watch entry: .NET/C#, Python, SQL Server, ISO 27001, ASD ISM, GitHub Actions/GitLab CI; AWS correction; unevidenced-summary updated), [[cover-letter-examples]] (Bay entry — "AI-first, already" opener + user's JD-interpretation rewrite), [[education]] / [[skills]] (AWS cert correction), [[processed]].
- Status: **Ready to send** — not yet submitted.

## 2026-07-20 status update — Bay Technologies, Engineering Manager
- **Submitted.** Tracker + meta.md updated to Submitted / Awaiting response. Archived raw copies re-synced to the final sent drafts (user made minor tweaks after finalise: dropped the "## Earlier" heading so intelliHR/2sol/Emedia render as regular roles; reordered Education to MPM-first with years).

---

## 2026-07-20 apply (draft) — Davidson (recruiter), ICT Project Manager / Fleet Technology Transformation

- Folder: `applications/2026-07-20-davidson-project-manager/`. JD saved verbatim. 12-month contract, $111ph + super. End client not named; vocabulary ("governance groups", "corporate stakeholders", "benefits realisation", government experience "highly regarded") reads council / state agency / utility.
- **Role shape: establishment phase, not steady state.** Governance setup → requirements → market engagement → PoC/pilot → implementation *planning*. It stops before rollout. That is the most repeated pattern in the wiki, and Suncorp is a near-literal precedent.
- **Fit: strong.** Governance/delivery controls/reporting (Suncorp built from scratch; Xero company-wide migration view), establishment-to-implementation (Go1, Console/Reapit, Suncorp), risk/issue/dependency/schedule, executive governance reporting, requirements gathering and solution evaluation, PoC/pilot (intelliHR internal pilots; Xero small-slice-to-production plus 1% traffic test) all cleanly evidenced.
- **Resume: Format B (narrative), headline "Project Manager"** (JD's own title, confirmed with user). Narrative on Xero, Go1, Suncorp; plain bullets on Reapit and 2sol; Emedia + pre-2006 in Earlier. Nagare deliberately omitted per the [[positioning]] tone caution for government/contract applications.
- **NEW CAREER FACT confirmed by Alan mid-draft (2026-07-20): the 2sol / BMA tender.** At 2sol, Alan **won and delivered a competitively tendered project for BMA (BHP Mitsubishi Alliance)** — interactive mobile learning content to train dragline operators. He **managed the entire RFP/tender process end-to-end**, plus the client relationship, implementation, and delivery. Three consequences:
  1. **The standing procurement gap is substantially softened but NOT closed.** This is *supply-side* (responding to a client-issued RFP), while JDs like this one ask for *buy-side* (issuing RFIs, evaluating vendors, procurement planning). A hard framing guardrail is now recorded in [[experience]] and [[keywords]] — safe: "managed a formal RFP/tender process end-to-end as the responding vendor"; unsafe: "ran RFIs" / "led vendor evaluations" / "owned procurement planning". Gap-watch history: first raised Paxus 2026-07-07, recurred Randstad Digital 2026-07-15, headline duty here.
  2. **Mining is no longer a thin bridge.** Previously the only mining evidence was early-career Barrick Gold (2003), explicitly flagged as weak (Mining Tech / Clicks IT, 2026-06-25). BMA is a delivered commercial engagement with a major Australian coal joint venture. [[keywords]] domain entry upgraded.
  3. **2sol gains a second named client** beyond Flight Centre, and the wiki gains e-learning content delivery predating Go1.
- Open questions recorded in [[projects]]: year within 2012–2017, contract value, engagement team size, native-vs-web "mobile", and whether other tenders were run at 2sol.
- **Gaps handled:** procurement acknowledged plainly in the cover letter and now bridged with the BMA tender (supply-side, stated as such) — this replaced the weaker capability-hierarchy-only treatment in the first draft. Fleet/telematics: one plain sentence, no forced analogy (Karmo 2026-07-09 precedent; second recurrence of the fleet gap). Budget and benefits realisation deliberately NOT raised (single items in a six-item list; same call as Lab3 and Randstad Digital) — outcome-measurement language worked into the resume instead.
- **Cover letter:** recruiter-facing soft opener + "what the first twelve months are really about" framing paragraph (the confirmed Randstad Digital 2026-07-15 device for recruiter-placed contract roles), "Re:" subject line, three labelled prose blocks (At Suncorp / At Xero / At 2sol and Reapit), synthesis sentence written to the recruiter naming *their client*, gap paragraph, immediate-availability close.
- **Not yet rendered.** Draft stage — awaiting user review / "finalise".
- Pages touched now (new career fact, recorded ahead of finalise): [[experience]] (2sol BMA entry + supply-side guardrail), [[projects]] (new BMA project entry + open questions), [[achievements]] (tender win), [[keywords]] (new Procurement / market engagement section; mining domain upgraded; unevidenced-summary softened).
- Pages to touch on finalise: [[positioning]] (new ICT Project Manager / fleet-transformation contract framing), [[keywords]] (Davidson gap-watch entry), [[cover-letter-examples]] (Davidson entry).

---

## 2026-07-21 lint — wiki de-duplication and currency pass

Full read of all 8 wiki pages + both registries, checking for duplicated, redundant, or stale
content. No career facts were added, removed, or altered — this pass only corrected contradictions,
removed restatement, and refreshed metadata.

**Factual contradictions fixed (both could have leaked into an application):**
- **[[index]] claimed "Alan holds AWS Cloud Practitioner (2026)"** — corrected to in-progress on
  2026-07-20 across [[education]], [[skills]], and the [[keywords]] certifications line, but the
  index (two places) was missed. Removed; the index no longer restates credentials at all.
- **[[keywords]] "Still unevidenced" summary still read "but note the AWS Cloud Practitioner cert,
  2026"** — contradicting its own certifications note twelve lines above. Rewritten to state the
  credential is in progress, not held, and foundational in any case.

**Duplication removed:**
- **[[index]] rewritten back to its own spec** (a page catalog with one-line summaries). It had grown
  a ~60-line state essay restating [[projects]] (Nagare), [[education]] (credentials),
  [[cover-letter-examples]] (a stale "most recent" roll-up naming Opengear when Bay was newer), and
  the resume-format rule — all of which drifted out of date on every Apply. Replaced with the
  catalog, a short employment/format state block, and a **guardrail pointer table** routing to the
  owning page for the six strict claim rules (AWS, React/TS, Nagare attribution, Nagare tone,
  procurement supply-side, PMP). Stale counts dropped (they were wrong: "19 entries" vs 20, "60+ raw
  files" vs 82, "25+ headline variants" vs 26). Also noted the two non-ingested `.docx` files so they
  stop reading as orphans — Alan confirmed 2026-07-21 they stay.
- **[[positioning]] "Nagare as evidence" trimmed** from a restatement of the [[projects]] entry
  (facts, tools, attribution guardrails — a third copy) to the positioning delta only: when it earns
  its place, and the tone caution. Facts now live in exactly one page.

**Structural fixes to the [[keywords]] gap-watch:**
- **Reordered newest-first.** It was in no consistent order, and the consolidated "Still unevidenced"
  summary was buried *mid-list* with three entries after it. Summary now closes the section.
- **Merged two split entries** rather than deleting either: the Karlka/Glen Fisk CRM note folded into
  the full Karlka entry, and the Paxus PMBoK/BABoK note into the full Paxus entry. 24 entries → 22,
  no content lost.

**Metadata:**
- `last-updated` was stale on **all seven** pages (five said June; every one had been edited
  2026-07-16 or later). All set to their true last-edit date.
- `source-count` (19–26) was meaningless against 82 entries in [[processed]] and drifted on every
  ingest. Replaced with a pointer to [[processed]] as the authoritative registry.

**Open lint findings block rewritten.** Five of eight items were closed history, not open work: the
Karlka 🚩 leak ("nothing to do retroactively"; the takeaway is now a standing render check), Auto &
General not folded back (closed application), the Amber team sizes ("FYI only"), the duplicate raw
PDF (permanent known state), and "cloud-based systems thinly evidenced" (superseded by the fuller,
correct note in [[skills]]). Header also claimed "last full lint 2026-06-17" when a lint ran
2026-07-10. Meanwhile seven genuinely open questions were buried in page bodies and had never been
surfaced: the Master/Masters degree-title conflict (which disagrees with two *submitted* resumes),
three certification issuing bodies, Lisa's surname, and the five BMA open questions. All now listed.

**New finding recorded: Digital Native (2026-07-16) was rendered but never finalised.** PDFs exist
and [[positioning]] carries its headline row plus the "gave-away-the-hard-problem" device, but there
is no `meta.md`, `raw/` archive, [[processed]] entry, [[cover-letter-examples]] entry, or tracker
row. Same class of gap as Auto & General (2026-06-23). Left open for a decision — finalise it or
record it as abandoned.

- Pages touched: [[index]], [[positioning]], [[keywords]], [[skills]], [[experience]],
  [[achievements]], [[education]], [[projects]], [[log]]

---

## 2026-07-21 apply (finalised, backfilled) — Digital Native (recruiter), Engineering Lead

Backfill of the 2026-07-16 application. Alan confirmed 2026-07-21 that he **did apply on 2026-07-16**;
the application was drafted and rendered but never taken through `/finalise`, so it left no record
outside the application folder. This closes the open finding raised in the 2026-07-21 lint entry
above.

- **No `/render` and no proofreader pass.** PDFs already existed and the application was already
  submitted, so the archived markdown must match **what was sent**, not a corrected version. Drafts
  and PDFs share a 2026-07-16 11:29 timestamp, confirming the drafts are the sent versions. Applying
  proofreader fixes now would have desynced the archive from the record.
- Archived both drafts to `raw/resumes/Alan-Soto-2026-07-16-Digital-Native-Engineering-Lead-{Resume,Cover-Letter}.md`.
- Wrote `meta.md` (status: Submitted / Awaiting response) and appended the tracker row in date order
  between Opengear (2026-07-16) and Bay Technologies (2026-07-20).
- **Ingest was mostly already done.** [[positioning]] (Engineering Lead headline row + the
  "gave-away-the-hard-problem" device), [[keywords]] (Digital Native gap-watch entry), [[skills]]
  (React/TypeScript entry), and [[projects]] (Nagare stack + guardrail) were all written at apply
  time on 2026-07-16. The genuine gap was [[cover-letter-examples]], now added.
- **Cover-letter entry recorded** — gave-away-the-hard-problem opener, "Re:" subject line, named
  recruiter salutation, three labelled bullets, no gap paragraph. Noted the two things that make it
  unusual: it is the **only letter in the archive with no gap acknowledgement despite an unmet
  essential requirement** (JS/TS/React proficiency — a deliberate apply-and-downplay call, which does
  **not** license a proficiency claim, and none appears in either document), and it is the first to
  reframe the Practice-domain story from an *achievement* into a *character* proof.
- Pages touched: [[cover-letter-examples]], [[processed]], [[log]]

---

## 2026-07-20 apply (finalised) — Davidson (recruiter), ICT Project Manager / Fleet Technology Transformation

- PDFs generated: `Alan Soto - Project Manager - Davidson - Resume.pdf` (243KB) and `... - Cover Letter.pdf` (80KB), via `node claude-code-resume-template/build-narrative.js applications/2026-07-20-davidson-project-manager/ "Davidson"` (Format B / narrative). Both confirmed on disk. Ran the build directly rather than via the resume-pdf-renderer subagent, which stalled on the Bay Technologies finalise on 2026-07-20.
- **Proofreader gate: one finding, fixed.** "specializing" -> "specialising" in the Profile (US spelling inconsistent with five Australian spellings elsewhere in the same document). Fixed and proceeded without a round trip rather than pausing per the `/render` step-2 wording — flagged to the user explicitly at the time. Two items were pre-declared as intentional and correctly not flagged: the `//` in the `## Earlier` paragraph (Alan confirmed it is deliberate — **leave it in place on any future render**) and the spaced-hyphen house style.
- Archived both drafts to `raw/resumes/Alan-Soto-2026-07-20-Davidson-Project-Manager-{Resume,Cover-Letter}.md`; wrote `meta.md` (status: Ready to send); appended tracker row (Ready to send).
- **The substantive event of this application was a new career fact, not the application itself.** Alan confirmed mid-draft that at 2sol he **won and delivered a competitively tendered project for BMA (BHP Mitsubishi Alliance)** — interactive mobile learning content for training dragline operators — managing the entire RFP/tender process end-to-end plus the client relationship, implementation, and delivery. Written to the wiki ahead of finalise (see the draft-stage entry above). Three standing gap-watch items moved: buy-side procurement **softened but not closed** (supply-side only — hard guardrail in [[experience]]), **mining upgraded** from the thin Barrick Gold 2003 bridge to a delivered commercial engagement, and 2sol gained a second named client.
- **User edits worth noting for future applications:** (1) removed the `## Skills` section entirely, which deleted the main ATS keyword surface — certifications and prose now carry it; (2) rewrote the Profile into something sharper than the drafted version, recorded verbatim in [[positioning]]; (3) expanded the certifications list after asking why LeanUX and the others had been cut — the original filter to PMP + CSM was too aggressive, LeanUX/Product Discovery in particular maps directly to the JD's requirements-gathering duty; (4) **removed the drafted gap paragraph wholesale** and handled procurement positively in the resume profile instead ("partnering with procurement to drive market engagement and supplier evaluation"). The sent letter carries no gap acknowledgement at all.
- Pages touched: [[experience]], [[projects]], [[achievements]] (all at draft stage — the BMA fact), [[keywords]] (Procurement / market engagement section, mining domain upgrade, Davidson gap-watch entry, unevidenced-summary softened), [[positioning]] (ICT PM headline row + establishment-phase cheat-sheet + Alan's own profile wording), [[cover-letter-examples]] (Davidson entry), [[processed]].
- Status: **Ready to send** — not yet submitted.

## 2026-07-21 status update — Davidson (recruiter), ICT Project Manager
- **Submitted.** `meta.md` and `outputs/tracker.md` updated to Submitted / Awaiting response. Archived `raw/resumes/` copies verified current — they were taken after the "specialising" proofreader fix, so no re-sync needed.
- Still open: the `what worked` note on the [[cover-letter-examples]] Davidson entry (currently "not yet confirmed"), and the BMA project open questions in [[projects]] (year within 2012-2017, contract value, engagement team size, native-vs-web "mobile", and whether BMA was the only tender run at 2sol — that last one would further shrink the procurement gap if there were others).
