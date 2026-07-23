# Gap Analysis - Machines4U (carsales), Engineering Manager

**Date:** 2026-07-21
**Source:** `job-description.md`
**Wiki read:** [[skills]], [[experience]], [[achievements]], [[projects]], [[keywords]], [[positioning]], [[cover-letter-examples]]

> **Note on the title.** The pasted ad body never states a job title; Alan confirmed on 2026-07-21 that the advertised role is **Engineering Manager**. Documents use that title throughout. The duty list ("Own engineering execution for Machines4U", "Lead a high-performing, distributed engineering team", "Provide clear, credible engineering perspectives to senior leadership") is consistent with it: a single-business-unit engineering manager inside a larger group.

---

## Strong matches

**Marketplace and B2B SaaS, product-led and commercially driven** - the JD's "ideally in a marketplace or B2B SaaS context" is one of the cleanest matches in the wiki.
- **2sol / Flight Centre** ([[experience]], [[projects]]): end-to-end delivery and operational ownership of Flight Centre's online hotel and accommodation booking platform - a literal two-sided booking marketplace generating **$5M+ monthly revenue**, spanning **10+ customer-facing products and 20+ APIs**, with a **team of 5 developers** reporting to him. This is marketplace *plus* commercial accountability *plus* direct people leadership in one engagement.
- **Console Group / Reapit**: real-estate management SaaS sold to agencies - B2B SaaS serving business customers who list and transact inventory. Structurally the same shape as Machines4U's dealership customers.
- **Emedia**: high-volume ticketing and booking e-commerce.
- **Go1**: B2B e-learning SaaS in hyper-growth.
- Machines4U's own customers (dealers listing and selling machinery inventory) map directly onto Flight Centre's suppliers and Console's agencies.

**Progressive modernisation of a mixed legacy/modern stack** - the JD's fifth duty bullet and its fourth selection criterion, and the marquee match.
- **Xero API Program / Supergraph** ([[projects]]): a company-wide migration from a legacy API surface to a single federated API, run *without* taking existing products offline. Alan defined the minimal thin slice that proved the platform, took it to production for a real customer-facing team, then used a second high-traffic team as the scale test - proposing a **1% traffic cutover** to de-risk it. That is "balancing legacy platform stability with migration to modern systems" almost verbatim.
- **Unified Burndown** ([[achievements]]): the single company-wide view of every division's migration and retirement plan, with owners, statuses, and target quarters - the artefact senior leadership used to sequence the work. Directly answers "translate business priorities into a clear, sequenced engineering roadmap".
- **Suncorp**: full replacement of an enterprise telephony/data platform across an ASX-listed group and all its affiliate brands - legacy retirement under compliance pressure.
- **"group-aligned modern systems"** is the notable phrase: Machines4U modernising toward carsales group platforms is structurally identical to Xero domains migrating onto a shared platform. Alan ran that alignment across every engineering division.

**Platform integrations and third-party technical dependencies** - marketplace, payments, reporting.
- **Console/Reapit**: delivered a new payments capability with a **deep integration to an external payments provider**, owned scope through to release, kept it reliable and secure.
- **Xero US Bills**: a major payments platform integration aligning product, engineering, and compliance.
- **2sol**: 20+ APIs across a booking ecosystem with external supplier interfaces.
- **Xero API Program**: cross-domain dependency intake and management across dozens of teams - the discipline the JD's "third-party technical dependencies" bullet is really asking for.

**Security, reliability, and compliance as engineering input** - the JD's seventh duty bullet.
- **Emedia**: designed and maintained **high-availability ticketing, booking and payment architecture** for V8 Supercars, Byron Bay Blues Festival, Bridge to Brisbane - security hardening, performance tuning, capacity planning, failure-risk reduction. The ACIL team's "high availability product" language lands directly on this.
- **Xero Code Red**: facilitated the sessions that established **SLOs, on-call practices, and progressive delivery**; personally built the automated **Lead Time for Changes** dashboards tracking DORA metrics. "Incident response" and "reliability standards" are evidenced as practice, not assertion.
- **Suncorp**: compliance-critical migration; data governance verification, risk identification and escalation, working alongside Infrastructure and Security.

**Engineering practices, tooling and culture across a wider engineering community** - the JD's eighth duty bullet, and an unusually literal match.
- Coached **engineering managers and tech leads across 10+ teams** on cycle time, capacity planning, forecasting, and delivery rhythms - without owning any of those teams.
- Launched a **Xero-wide Jira optimisation initiative** and a division-wide Jira Data Quality Score; designed the cross-functional operating model for the Quokkas team.
- **2sol**: built the engineering practice from the ground up - source control, automated testing, CI/CD, pair programming, code review, coding standards. This is the "coding standards" end of the JD's "credible operating range" bullet.

**Distributed team leadership.**
- **Suncorp**: coordinated four engineering teams including **offshore contractors**, plus Infrastructure, Security, business units, and external vendors.
- **Go1**: led a cross-functional squad of 8 (6 engineers, 1 designer, 1 PO) through hyper-growth - hiring, onboarding, coaching, performance, team health.
- **Xero**: remote-based throughout, working across divisions in multiple locations.

**Senior leadership communication, risk/trade-off/capacity assessments.**
- EGM-level program reporting on milestones, risks, and trade-offs at Xero; GM-level burndown submissions; board and executive strategy workshops at intelliHR (Blue Ocean Framework).
- Xero performance review names relationship-building as a **"force multiplier"** and confirms "centralized information and created sources of truth" - third-party validation of the JD's "natural relationship builder" and "credible perspectives to senior leadership" asks.

**Engineering roadmaps tied to commercial outcomes.**
- 2sol: $5M+ monthly revenue platform, balancing stability work against new features as an explicit commercial call.
- Xero: program roadmaps set against product strategy with executive leadership.

---

## Partial matches

**Direct line management of an engineering team, recently.** The JD's first duty is to *own* engineering execution and hold the technical and behavioural bar. Alan has done exactly this - Go1 (squad of 8), 2sol (team of 5), intelliHR (team of 5) - but the most recent instance ended in **March 2022**. The last four years at Xero were program and delivery leadership across teams he influenced rather than managed. Frame it honestly: the people-leadership evidence is real and repeated, and the Xero years added the cross-team and executive altitude this role also needs. Do not imply he line-managed engineers at Xero.

**"Hands-on enough to review architecture, unblock engineers, and spot quality problems early."** Genuinely met at the *architecture and quality* end, thinner at the *writing code* end.
- Met: nine years as software engineer and systems architect (Emedia, Peru/Canada); production SQL written and optimised then and now; API and graph contract design at Xero (defining what the graph exposed, deliberately narrow to avoid brittle logic); **Nagare** ([[projects]]) as present-tense build evidence.
- The JD asks for hands-on *enough* to review and unblock - not for a coding lead. That phrasing is what makes this a partial rather than a gap. Frame as architecture review, technical judgement, and quality standards; do not claim daily coding.

**Cloud infrastructure.** Xero is a cloud-native platform and Emedia involved capacity planning and infrastructure sizing under heavy simultaneous load, but no named cloud platform is evidenced anywhere in the wiki. **AWS Cloud Practitioner is in progress, exam ~7 Aug 2026 - NOT yet held** ([[education]]). State it as in progress; never as held, never as hands-on AWS delivery.

**Modern web stacks, backend and frontend.** Read the guardrail in [[projects]] and [[skills]] before writing anything here. Nagare is built in **React and TypeScript**, but Alan produces the code with Claude Code and has explicitly disclaimed proficiency. Safe: "builds and ships React/TypeScript tools, AI-assisted". **Unsafe on any document: proficient / fluent / strong in JavaScript, TypeScript, or React.** The **React Nanodegree (2017)** is the only formal front-end credential and is nine years old.

**Marketplace two-sided dynamics at carsales' scale.** Flight Centre's booking platform and Emedia's ticketing were high-volume, but neither is a classifieds/listings marketplace with dealer inventory feeds. Adjacent, not identical. Low severity - the JD asks for marketplace *or* B2B SaaS and Alan clears both.

---

## Gaps

**CRM (severity: low-moderate).** The JD names CRM as one of the integration surfaces to oversee. **No named CRM platform experience anywhere in the wiki** - this is now the fourth JD to name it (Resolution Life, BlackRoc, Karlka, and this one), which makes it a standing gap worth tracking. Bridge: integration delivery as a discipline is deeply evidenced (external payments provider at Console/Reapit, US Bills at Xero, 20+ APIs at 2sol, cross-domain dependency management at Xero). Not worth raising in the letter - it is one item inside a six-item list of integration surfaces, and the JD asks for oversight of the interfaces, not for CRM expertise.

**Named modern backend stack (severity: moderate).** No language or framework is claimed anywhere in the wiki for the last decade. This has now recurred across Bay (.NET/C#, Python), Digital Native (JS/TS/React), and here. The JD is unusual in *not* naming a stack - it says "modern web stacks" generically, which leaves room the Bay and Digital Native ads did not. Bridge: language-agnostic engineering foundation plus a real systems-architect background. Do not claim a stack.

**Marketing and reporting platform integrations (severity: low).** Named in the same integration bullet as CRM. Reporting/analytics is evidenced (self-built SQL dashboards, DORA metrics, Pendo/FullStory); marketing platforms are not. Not worth raising.

**Automotive / machinery / heavy equipment domain (severity: low).** New vertical, and the third automotive-adjacent recurrence after Karmo (2026-07-09) and Davidson (2026-07-20). Worth noting that the wiki now holds genuine heavy-industry evidence: the **2sol / BMA (BHP Mitsubishi Alliance) tender** delivered dragline operator training content ([[projects]], added 2026-07-20) - dragline operators are exactly the machinery buyer Machines4U serves. Use it lightly; it is a training-content project, not a machinery marketplace.

**Formal budget ownership (severity: low, not raised).** Standing gap (Lab3, Randstad Digital, Paxus, Davidson). The JD does not name budget at all - "capacity" and "commercial outcomes" are the closest, and both are answerable via 2sol's $5M+/month ownership. Do not raise.

---

## ATS keywords

Must appear in the resume: engineering execution · engineering roadmap · platform reliability · engineering practices · delivery cadence · distributed engineering team · marketplace · B2B SaaS · product-led · commercial outcomes · legacy modernisation · progressive modernisation · migration · platform integrations · third-party dependencies · API design · payments integration · reporting · security · reliability · compliance · scalability · high availability · incident response · on-call · SLOs · coding standards · code review · CI/CD · DORA metrics · cloud infrastructure · architecture review · technical debt · risk and trade-offs · capacity planning · stakeholder management · senior leadership · coaching · mentoring · hiring · performance management · Agile · Scrum · Kanban · Jira · Confluence.

Naturally embeddable but do NOT claim: CRM, named cloud platform (AWS is in progress only), named backend language/framework, React/TypeScript proficiency.

---

## Fit score

**Strong.**

The role-shape match is among the best in the wiki. Four of the eight selection criteria - marketplace/B2B SaaS product-led leadership, engineering roadmaps tied to business outcomes, mixed legacy/modern modernisation, and the credible operating range from coding standards through to senior leadership updates - are directly and repeatedly evidenced rather than bridged. The relationship-builder criterion is externally validated by the Xero performance review. The security/reliability/scalability criterion is met at both ends of the career: Emedia built it, Xero's Code Red work formalised it.

Two things keep this from being a clean sweep. The most recent direct people leadership of engineers ended in 2022, and "strong technical depth across modern web stacks (backend and frontend)" is the one criterion where the honest answer is architecture-level literacy plus AI-assisted building, not practitioner fluency. Neither is disqualifying against a JD whose own hands-on ask is "hands-on *enough* to review architecture, unblock engineers, and spot quality problems early" - that is a leadership altitude Alan clears - and whose closing paragraph explicitly invites candidates who do not meet every requirement.

**Recommended framing:** lead with the modernisation story (Xero) because it is the JD's hardest and most specific ask; follow with the marketplace-plus-commercial-ownership story (2sol) because it is the literal context match the JD says it prefers; use Go1 for the people leadership the JD leads with; use Emedia and Code Red together for the reliability and security bullet. Nagare earns its place here - this is a product company hiring an engineering leader, the audience reads a side project as craft, and it is the only present-tense build evidence available.
