---
last-updated: 2026-06-18
source-count: 20
---

# Projects

Notable projects across **Alan Soto's** career. Each links to its parent role in [[experience]]
and related wins in [[achievements]].

---

## Xero — API Program / Supergraph
**Role context:** Lead Technical Program Manager (current focus). → [[experience]]
Company-wide initiative to deliver a single, **federated API surface** across all of Xero's
product capabilities, **enabling AI agents and third parties** to access them. Spans virtually
every engineering team (dozens of teams). Owned program roadmaps and delivery tracking with
EGM-level visibility; drove cross-team dependency management across a federated delivery model;
established systems of work giving every contributing team a shared understanding of scope and
their role.

*Supergraph adoption program (2025–2026):* Turned the Supergraph from a platform concept into an
executable multi-domain migration program. Key deliverables:
- **Practice Domain Alignment Plan** — defined the minimal Practice-domain thin slice (exposing
  `currentPracticeId` under `me`; narrow and intentionally non-brittle implementation; load
  validation; pair-programming handover to owning team). Tied to two showcase use cases: UK Tax
  Capital Allowance and BlueNav/GSD migration.
- **UK Tax as first GA consumer** — the approved Supergraph GA Release states the first enabled
  production query supports UK Tax (`query { me { currentPractice { id } } }`). UK Capital
  Allowances team began replacing BFF usage with Supergraph data via `currentPractice.practiceId`.
- **BlueNav migration off GSD** — tracer-bullet use case proving the platform at scale.
  High-risk, high-volume traffic path; proposed 1% traffic test. Scope confirmed, ownership
  boundaries between API Platform and Practice clarified, unresolved discussions converted to
  concrete dependencies and dates. Target for org-subgraph PRs tracked in the program schedule.
- **Unified Burndown** — single migration management view: domain-by-domain plans, owners,
  statuses, quarters across Product Engineering, Data & Science, Small Business & Growth,
  Payments, Accountants & Bookkeepers, and more. GMs submit deprecation and burndown plans;
  Unified Burndown is the agreed launch schedule and retirement tracker.
- **Domain onboarding simplification** — updated Miro guide to cover only Discovery and
  Prioritisation (steps 0–2); kept Miro and Confluence in sync; made the operating model
  teachable and reusable for next domains.

Teams influenced: API Platform / Tech Strategy API Program, UK Tax, BlueNav / Patronus,
Practice team leadership and engineering, broader domain leadership across Xero.

## Xero — Quokkas ways-of-working
**Role context:** Lead Technical Program Manager. → [[experience]]
Designed and embedded a **cross-functional delivery operating model** for the Quokkas team
(Payroll / Connected Workplaces). Separated roadmap tracking from execution tracking; made
Confluence the discovery home; required linked work between Asana and Jira; set explicit norms
for communication, feedback loops, and documentation. Evidence of designing team operating
systems — not just coordinating delivery.

## Xero — Jira Optimisation Initiative (2023)
**Role context:** Lead Technical Program Manager. → [[experience]]
Helped **launch a Xero-wide initiative** for consistent Jira use at initiative/epic level.
Delivered shareback material on health and dashboards; drove a division-wide **Jira Data Quality
Score**. Turned a local tooling and visibility problem into an organisational capability — making
work easier for leadership to see, connecting it to goals, and reducing planning/reporting toil
at scale. Outcome: consistent self-help and dashboarding patterns adoptable beyond one team.

## Xero — AI for Customers
**Role context:** Lead Technical Program Manager (previously led). → [[experience]]
Large program embedding **AI / machine-learning capabilities** into core Xero products used by
small businesses and accounting/bookkeeping practices — **3M+ customers**. Coordinated ML
engineers, data scientists, and product teams; aligned AI engineering, domain, platform, product,
and design. Stack/domain: ML, customer-facing AI features. Outcome: AI-informed onboarding and
engagement improvements; embedded AI into products at scale.

## Xero — US Bills Integration
**Role context:** Lead Technical Program Manager (previously led). → [[experience]]
Cross-functional delivery of a **major payments platform integration**. Aligned product,
engineering, and compliance teams; created shared program artifacts to communicate scope,
forecast milestones, and manage cross-cutting risks; removed blockers across workstreams.

## Xero — Partner Hub / Accounting Businesses programs
**Role context:** Lead Technical Program Manager. → [[experience]]
Multi-year **Xero Partner Hub** initiative plus three critical programs in the Accounting
Businesses division; kept 12+ engineering teams aligned across technical and go-to-market
dependencies; owned the execution roadmap, forecasts, and operating cadence.

## Go1 — Content-creator product
**Role context:** Technical Program Manager. → [[experience]]
New product enabling content creators to **optimise and distribute content across Go1's global
learning network**. Led a cross-functional squad of 8 (6 engineers, 1 designer, 1 PO) end-to-end. *(Confirmed 2026-06-16; "squad of 10" in some source documents is inaccurate.)* Ran an internal incubator
(designer, PM, commercial lead) with experimentation-led discovery — mockups, prototypes,
technical spikes — defined MVP scope, managed trade-offs, drove fast iteration. Established the
delivery operating model. Stack/domain: e-learning SaaS, content distribution.

## Suncorp — Telephony / data platform migration
**Role context:** Delivery Coach. → [[experience]]
**Large-scale telephony / data platform migration across the entire organisation and all affiliate
brands** of an ASX-listed financial-services & insurance enterprise. Compliance-critical;
coordinated 4 engineering teams incl. offshore contractors, plus Infrastructure, Security,
Business units, and vendors. Ensured data-governance compliance; mapped data lifecycles with
visual models. Delivered through COVID-19 and corporate restructuring.

## intelliHR — AI-powered people analytics
**Role context:** Head of Product. → [[experience]]
Designed and delivered **AI-powered people-analytics features using NLP** and advanced
visualisations to give HR leaders actionable insights. Built the product function from scratch;
ran internal pilots with cross-functional feedback loops; introduced behavioural analytics
(Pendo, FullStory). Stack/domain: HR SaaS, NLP/ML, product analytics. Outcome: shift from
assumption-driven to evidence-driven product decisions; feature-factory → outcome-driven model.

## Console / Reapit — Payments capability
**Role context:** Iteration Manager. → [[experience]]
Designed and delivered a **new payments capability in the Console app with a deep integration to
an external payments provider**, scope-to-release. Led a cross-functional engineering team; owned
scope shaping, timelines, capacity planning, release coordination; kept the integration reliable
and secure. Stack/domain: real-estate management SaaS, payments integration.

## 2sol — Flight Centre hotel & accommodation booking platform
**Role context:** Projects Lead. → [[experience]]
End-to-end delivery and operational ownership of **Flight Centre's online hotel & accommodation
booking platform** — **$5M+ monthly revenue**, **10+ customer-facing products, 20+ APIs**, team
of 5 developers. Ran a multi-year transformation: technical excellence (CI/CD, automated tests,
pair programming, code review) → ways of working (operating rhythms, Kanban, planning, backlogs,
metrics) → product development (feature factory → outcome-driven). Stack/domain: travel,
hotel/accommodation booking marketplace.

## Emedia — Event ticketing & booking systems
**Role context:** Systems Architect / Software Engineer. → [[experience]]
Designed and maintained **high-availability ticketing, booking, and payment systems** for major
events — engineered for stability under heavy simultaneous traffic, with security hardening,
performance tuning, and capacity planning. Events delivered: **V8 Supercars, Byron Bay Blues
Festival, Gympie Music Muster, Mission Estate Winery Concert (NZ), Bridge to Brisbane**.
Stack/domain: high-volume e-commerce, online ticketing.
