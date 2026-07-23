---
name: feedback-company-name-casing
description: Auto-inferred company name from folder slug can mis-capitalise brand names (e.g. "Machines4u" vs "Machines4U") — check job-description.md and pass the explicit second argument to build scripts when it does
metadata:
  type: feedback
---

The build scripts (`build.js` / `build-narrative.js`) infer the company name for the output PDF filename by taking the folder's first hyphen-separated segment after the date and capitalising it. For folder `2026-07-21-machines4u-engineering-manager`, this produced "Machines4u" — but the real brand name (confirmed via `job-description.md`) is "Machines4U", with a capital U in a non-standard position that simple capitalisation can't reproduce.

**Why:** The auto-inference only capitalises the first letter; it cannot know about internal capitals, ampersands, or multi-word names. A wrong filename would go out to a recruiter/employer with the company's own name misspelled.

**How to apply:** Before running the build script, grep the company's actual name/casing from `job-description.md` (or `jd-analysis.md`) in the application folder and compare it to what plain capitalisation of the folder slug would produce. If they differ in casing, punctuation, or word count (e.g. "Sharp & Carter", "Machines4U", multi-word names), pass the correct name explicitly as the second argument to the build script rather than trusting the default inference. If PDFs were already generated with the wrong inferred name, delete them and re-run with the explicit argument — don't just rename the files, since the internal PDF content (headers/metadata) may also reference the inferred name depending on template internals.
