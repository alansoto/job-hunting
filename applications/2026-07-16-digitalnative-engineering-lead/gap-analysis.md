# Gap Analysis — Engineering Lead (Digital Native / Brisbane tech company)

**Date:** 2026-07-16
**Recruiter:** Aaron Thomas, Digital Native
**Salary:** $175,000–$185,000 + Super, permanent, inner-city Brisbane hybrid
**Reports to:** Engineering Manager

---

## Who is the employer?

Not named. The signals — Brisbane, well-established technology company, "mission-critical software
platform that keeps major cities moving", transportation / intelligent systems, cloud-native SaaS —
point strongly at an intelligent transport systems (ITS) vendor. **Transmax** (inner-city Brisbane,
owns the STREAMS traffic management platform used by state road authorities) is the most likely
candidate; Q-Free is a secondary possibility. Worth asking Aaron directly before interview.

---

## Strong matches

| JD requirement | Evidence |
|---|---|
| Proven leadership of an agile / Scrum-based engineering team | Go1 — led cross-functional squad of 8 (6 engineers, 1 designer, 1 PO) as team lead **and Scrum Master**; CSM certified; ran all ceremonies end-to-end. Console/Reapit — Iteration Manager owning ways of working. 2sol — directly managed 5 developers. → [[experience]] |
| Communication, stakeholder engagement, coaching and mentoring ability | The strongest single cluster in the wiki. Xero — coached EMs and tech leads across **10+ teams** on cycle time, capacity planning, forecasting. Virgin Australia — tell–show–do–review coaching of 4 POs until they ran their own ceremonies. Performance review names EQ a **"force multiplier"** and calls him a "strong optimizer of team processes" who "improves cycle time". |
| Champion CI/CD, DevOps, SRE, automated testing | Xero **Code Red** — division-wide CI/CD uplift; personally built automated Lead Time for Changes dashboards; tracked all four DORA metrics; facilitated sessions establishing **SLOs, on-call practices, progressive delivery** — this is the literal SRE ask. 2sol — introduced CI/CD, automated tests, pair programming, code review from scratch. |
| Cloud-native SaaS delivery | Xero (global cloud accounting), Go1 (e-learning SaaS), intelliHR (HR SaaS), Console/Reapit (real-estate SaaS). AWS Cloud Practitioner (2026) — credential only, not delivery evidence. |
| Modular, scalable, resilient architecture and system integration | Xero **API Program / Supergraph** — federated API surface across dozens of teams; graph contracts, domain boundaries, thin-slice design, consumer migration sequencing. This is architecture-of-a-system-of-systems work. Emedia — designed HA ticketing/booking/payment architecture under heavy simultaneous load. |
| Partner closely with Product and Design (the "trio") | Go1 — squad of 8 *contained* a designer and a PO; ran an internal incubator with a designer, PM, and commercial lead. intelliHR — Head of Product managing 3 PMs + designer. Console/Reapit — coached POs and designers on discovery. The trio model is Alan's native operating mode, not a stretch. |
| Solving ambiguous problems, breaking work into sequenced increments | The Supergraph **thin slice** is a textbook example: defined the minimal Practice-domain slice satisfying two real consumers (UK Tax, BlueNav), sequenced the rest via the Unified Burndown. Performance review: "willingness to lean into new, difficult areas". |
| Balance technical, customer, operational and commercial considerations | 2sol — end-to-end ownership of a **$5M+/month** platform (10+ products, 20+ APIs) balancing stability against new features. intelliHR — feature factory → outcome-driven. |
| Collaborate with other Engineering Leads on broader process improvement | Xero **Jira optimisation initiative** and the org-wide ways-of-working program — both are exactly "work with peers to lift technology and process across the org". |
| Tertiary qualification in Software Engineering / IT / CS | **Bachelor of Systems Engineering**, Universidad de Lima. Literal match. Plus Master of Project Management (Dean's Award, 7.0 GPA). |
| CI/CD tooling: Jira, Confluence | Deeply evidenced — Jira Data Quality Score, health dashboards, Jira optimisation at Xero-wide scale. |
| Complex infrastructure-driven environment | Suncorp — enterprise-wide **telephony/data platform migration** across all affiliate brands of an ASX-listed insurer; coordinated 4 teams incl. offshore plus Infrastructure, Security, vendors; compliance-critical; delivered through COVID and restructure. |

---

## Partial matches

- **"Stay close enough to the code to contribute hands-on when it counts."** Alan *was* a software
  engineer and systems architect (2003–2012, Emedia + Peru/Canada), and he currently builds and
  ships browser-based delivery tools on **Nagare** (nagare.com.au) — including a client-side Monte
  Carlo forecaster running 10,000 simulations. That is present-tense build evidence and the only
  such evidence in the wiki. But it is a personal project, not professional engineering output, and
  the 2012–2026 stretch is delivery leadership, not code. Framing: technically credible and still
  building; **not** a currently-practising senior engineer.
- **Test frameworks (Playwright, Selenium, Jest).** Nice-to-have. Automated testing is evidenced as
  a practice he introduced (2sol) and championed (Xero Code Red), but no named framework anywhere in
  the wiki. Bridge as practice, don't claim the tools.
- **REST, gRPC, JSON, Protobuf.** Nice-to-have. REST/JSON/API integration is well evidenced (Xero
  API Program, Console/Reapit external payments provider, 2sol's 20+ APIs). GraphQL is a genuine
  strength via Supergraph. gRPC and Protobuf are not evidenced — don't name them.
- **AWS, Kubernetes, Docker, Terraform, PostgreSQL.** Nice-to-have. AWS Cloud Practitioner (2026) is
  the only named credential; SQL is hands-on (Emedia production queries, Xero DORA dashboards) but
  PostgreSQL specifically is not named. Kubernetes, Docker, Terraform: no evidence at all.
- **GitLab.** Nice-to-have. Not evidenced (recurrence of the standing GitHub gap from Magentus,
  2026-06-23). Generic CI/CD fluency covers the concept, not the tool.
- **Transportation / intelligent systems / infrastructure-driven environments.** Nice-to-have.
  Closest bridges: Suncorp's enterprise telephony platform replacement (infrastructure-driven,
  compliance-critical, real-world consequence) and Emedia's high-availability event systems where
  failure was immediate and public. Neither is transport. Virgin Australia is transport-*adjacent*
  (aviation) but it was a five-month agile coaching engagement, not platform work — don't oversell it.

---

## Gaps

### 🚩 Unmet essential requirement: "Proficiency in JavaScript/TypeScript and React"

**Resolved 2026-07-16 with Alan.** Nagare *is* built in React and TypeScript — but Alan produces the
code with **Claude Code**, and describes his own level verbatim as *"a high-level understanding of
the framework but definitely not proficient."*

So the requirement is **softened, not closed**:
- **What is true and usable:** he designs and ships working React/TypeScript tools; the architecture,
  the state model, and the product decisions are his; he does it AI-assisted; he holds an **AI
  Assisted Development** certification (2026) and uses Copilot/Claude/Gemini daily. This is
  architect-level literacy plus AI-assisted delivery — real, current, and worth stating.
- **What must never appear on any document:** "proficient in React/TypeScript", "strong JS/TS
  skills", or any phrasing implying hands-on fluency. Alan has explicitly disclaimed it. See the
  guardrail now recorded in [[projects]] and [[skills]].
- **Net:** the JD asks for *proficiency*. Alan does not have it. The application rests on the
  leadership half of the JD, with the React/TS evidence supporting technical credibility rather
  than claiming the requirement.

**Decision (Alan, 2026-07-16): apply and downplay.** No gap-acknowledgement paragraph in the cover
letter — no apology, no flag-raising. The React/TypeScript evidence sits naturally where it is true
(Nagare, AI-assisted), the leadership evidence carries the application, and the stack question gets
handled honestly at interview if it arises. This is a *presentation* choice; it does not license a
proficiency claim anywhere in the documents.

### Secondary: the role is a hands-on Engineering Lead, not a delivery leader

Read the duties together — "contribute hands-on to design, development, test automation and
maintenance", "technical direction on architecture, scalability, security and performance",
"technical latitude to shape architecture and engineering practice". This is an engineer who leads,
reporting to an Engineering Manager. Alan's last decade is program and delivery leadership: he
coaches engineers, designs operating systems, and shapes practice, but he does not ship production
code. The Xero performance review names this exact edge as the honest growth area — *"strength at
lower-level technical detail but a gap at complex cross-domain technical alignment"*.

This is not fatal — much of the JD (the trio partnership, mentoring generously, psychological
safety, raising the bar, sequencing and de-risking with Product and Design, championing CI/CD and
SRE) is squarely what Alan does better than most. But roughly 40% of the role as written is
technical practice ownership, and the resume must not pretend otherwise.

### Minor
- **Kubernetes / Docker / Terraform** — no evidence, no bridge. Nice-to-have; don't raise.
- **GitLab** — not evidenced; don't raise (Jira/Confluence in the same bullet are strong).
- **gRPC / Protobuf** — not evidenced; don't raise. REST/JSON/GraphQL carry the bullet.
- **Security** as a named technical direction area — evidenced adjacently (Emedia security
  hardening, Console/Reapit "reliable and secure", Suncorp Security coordination), never as a titled
  responsibility.

---

## ATS keywords to embed

Engineering Lead · agile · Scrum · cross-functional team · cloud-native SaaS · DevOps · CI/CD ·
SRE · automated testing · test automation · technical direction · architecture · scalability ·
security · performance · modular · resilient · system integration · REST · JSON · GraphQL · API ·
mentoring · coaching · psychological safety · stretch opportunities · direct feedback ·
Product Manager · Designer · trio · sequencing · de-risk delivery · increments · ambiguous problems ·
Jira · Confluence · AWS · PostgreSQL · SQL · DORA metrics · deployment frequency · lead time ·
SLOs · on-call · progressive delivery · stakeholder engagement · commercial considerations ·
product rollout · adoption · operational performance · Software Engineering degree.

---

## Fit score: **Moderate — strong on the leadership half, genuinely short on the hands-on half**

The JD splits cleanly in two. On **leadership, coaching, delivery practice, architecture-at-the-
system-level, and trio partnership**, Alan is not just a match but an over-answer: the "makes the
people around them better", "builds psychological safety", "mentors generously" language is
third-party-validated in his performance review, and the CI/CD/DevOps/SRE bullet is described almost
verbatim by the Code Red work. The Bachelor of Systems Engineering satisfies the qualification line
literally.

On **hands-on JavaScript/TypeScript and React**, he does not currently meet an essential
requirement, and no amount of framing changes that. The honest pitch is: a former software engineer
and systems architect who still builds, who has spent a decade making engineering teams faster and
better, and who will lead architecture and practice credibly — but who will not be the strongest
coder in the room, and isn't pretending to be.

Whether this is worth submitting depends on how literally the employer means the React requirement.
Given the salary band ($175–185k) sits below a hands-on staff-engineer market rate in Brisbane and
the JD spends three full paragraphs on people development versus one line on the stack, there is a
reasonable read that the leadership half is what they are actually buying. But a hiring manager
screening on "React" will not get past the resume, and it is a recruiter-mediated application, which
adds a keyword filter in front of the hiring manager.

**Recommendation:** apply, lead with the leadership half, and let the React/TypeScript evidence sit
where it is honestly true (Nagare, AI-assisted) without inflating it into the proficiency the JD
asks for. Confirmed with Alan 2026-07-16.
