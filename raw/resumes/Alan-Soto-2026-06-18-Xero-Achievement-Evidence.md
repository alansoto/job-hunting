# Alan Soto achievement evidence at Xero

## Executive summary

Based on the accessible cross-app evidence, your strongest achievement themes at Xero are:
- designing repeatable cross-functional delivery ways of working, including clear tool boundaries, documentation norms, and execution discipline for teams such as Quokkas
- turning delivery tooling into a scaling initiative by shaping and socialising Jira optimisation work so leadership could better see work, connect it to outcomes, and reduce planning/reporting toil
- helping turn the Supergraph from a platform concept into an adoption program, especially through thin-slice use cases, domain modelling, dependency management, and migration sequencing
- unblocking two concrete consumer migrations — UK Tax and BlueNav — by driving the Practice-domain approach, shaping the minimal graph contract, and coordinating implementation dependencies across teams
- establishing the operating cadence for cross-domain migration by raising dependencies, building the Unified Burndown, and defining what teams needed to submit for deprecation and burndown plans

## Evidence

### 1. Built operating models, not just project plans

In Quokkas, documented a concrete cross-functional delivery model that separated roadmap tracking from execution tracking, made Confluence the discovery home, required linked work between Asana and Jira, and set expectations for communication and feedback loops. Evidence of designing team operating systems rather than only coordinating delivery.

Supporting statement:
"I established practical ways of working that improved coordination across product, engineering, design, and delivery by clarifying where planning, execution, decisions, and communication should live."

### 2. Scaled delivery discipline through Jira/tooling standardisation

2023 Jira optimisation work helped leadership solve a visibility and alignment problem, not just a tooling problem: the goal was to make work easier to see, connect it to goals, and create scalable self-help and dashboarding patterns.

July 2023 update: helped launch a Xero-wide initiative for consistent Jira use at initiative/epic level, delivered shareback material on health/dashboards, and drove a division-wide Jira Data Quality Score.

Supporting statement:
"I turned local delivery/tooling improvements into a broader organisational capability by helping define a consistent Jira planning and reporting model, associated dashboards, and rollout thinking that could scale beyond one team."

### 3. Created the Practice-domain strategy that unlocked multiple Supergraph use cases

Practice Domain Alignment Plan tied the Practice domain to two showcase use cases: UK Tax Capital Allowance and BlueNav/GSD migration. The API Program team would bootstrap the initial Practice subgraph and then transfer ownership to the Practice team.

Shaped technical decisions: exposing currentPracticeId under me, keeping the implementation intentionally narrow, avoiding replication of brittle GSD logic, validating load expectations, and planning pair-programming plus handover into the owning team.

Supporting statement:
"I defined the minimal Practice-domain slice that could satisfy real consumers quickly, while also creating a credible ownership and handover path for the long-term domain team."

### 4. Unblocked BlueNav's migration off GSD by driving scope, sequencing, and cross-team coordination

The Blue Nav migration write-up states the primary Q1 outcome was to migrate BlueNav off GetSessionDetails and onto the Supergraph, and that BlueNav would act as the tracer bullet for proving the platform at scale. Proposed 1% traffic test because of BlueNav's high-risk, high-volume traffic.

2026-05-19 BlueNav / GSD / Org API status check notes show hands-on program leadership: confirmed the Supergraph goal as "everything that BlueNav needs is in the Supergraph," agreed to organise scoping with the Practice owner, linked dependency tracking to the Jira initiative, and updated the program schedule with a target date for org-subgraph PRs.

Supporting statement:
"I reduced ambiguity in the BlueNav migration by aligning technical scope, clarifying ownership boundaries between API Platform and Practice, and converting unresolved discussions into concrete dependencies, sessions, and dates."

### 5. Helped make UK Tax the first concrete consumer of the Supergraph

The approved Supergraph GA Release states that the first enabled query in production supports UK Tax: query { me { currentPractice { id } } }.

The Supergraph status update of 2026-05-28 confirms that the UK Capital Allowances team had started replacing BFF usage with Supergraph data using currentPractice.practiceId.

The Practice-domain plan names the UK Tax Capital Allowance widget as a primary showcase use case and defines the minimum graph contract required to let the MFE deprecate its custom BFF.

Supporting statement:
"I helped turn UK Tax from a theoretical adopter into the first production-backed consumer path for the Supergraph by aligning the graph contract around currentPracticeId and connecting the consumer need to platform readiness."

### 6. Created the migration management layer across domains and teams

API Program - Unified Burndown captures domain-by-domain migration plans, owners, statuses, quarters, comments, and follow-up actions across Product Engineering, Data & Science, Small Business & Growth, Payments, Accountants & Bookkeepers, and more.

The Supergraph: High-Level Domain Engagement Timelines page makes the operating model explicit: GMs submit deprecation and burndown plans, the API Platform team consolidates those into the master calendar, and the Unified Burndown becomes the agreed launch schedule and retirement tracker.

The API TPM Program Handover adds proof: dependencies had been raised against all domain teams listed in the burndown sheet and the details/communications lived in Jira.

Supporting statement:
"I created the program machinery that let Supergraph adoption scale beyond a few thin slices: domain dependency intake, a single burndown view, and a time-sequenced migration path that leaders could act on."

### 7. Connective tissue between platform, domain teams, and leadership

Jira dependency evidence shows direct cross-team influence. DMPT-5003 is a Practice-domain dependency raised and owned by Ryan Moffat; it explains that the API Program team performed an audit across BFFs, shims, and burndowns to prepare sequenced migration asks for the domain.

TECHAPI-162 is the initiative container for the product-domain adoption dependencies, reporter is Alan Soto.

Supporting statement:
"I acted as the connective layer between consumer teams, owning domains, and platform leadership by translating strategy into concrete dependency asks, ownership decisions, and migration work packages."

### 8. Improved the onboarding path for future teams

The Supergraph Onboarding Readiness: 3 Things to Align page records a contribution to simplifying the domain-modelling front door: proposed update to the Miro guide so it only covered the Discovery and Prioritisation phase (steps 0–2), keeping Miro and Confluence in sync.

Supporting statement:
"I reduced onboarding friction for future domain teams by simplifying the modelling entry point and aligning the artefacts teams use to move from discovery into delivery."

## Teams and groups influenced

- Payroll / Quokkas / Connected Workplaces — ways-of-working and Jira optimisation work
- API Platform / Tech Strategy API Program — Practice-domain strategy, onboarding/readiness work, and Unified Burndown governance
- UK Tax — Capital Allowances as an early Supergraph consumer
- BlueNav / Patronus / navigation stakeholders — GSD migration and shadow-mode planning
- Practice team leadership and engineering — bootstrap/handover planning for the Practice subgraph
- Broader domain leadership across Xero — dependency management and deprecation-plan intake

## Short version (verbatim reuse)

I have consistently operated above pure delivery coordination by building the operating systems that let teams move faster. Earlier in my Xero tenure, that showed up in cross-functional ways of working and Jira/tooling standardisation that improved visibility, discipline, and alignment across teams. More recently, it has shown up in the Supergraph/API Program, where I helped define the Practice-domain thin slice, unblock UK Tax and BlueNav as early consumer migrations, raise and track cross-domain dependencies, and build the Unified Burndown and onboarding model that turns a platform initiative into an executable multi-domain migration program.
