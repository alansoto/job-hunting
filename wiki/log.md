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
