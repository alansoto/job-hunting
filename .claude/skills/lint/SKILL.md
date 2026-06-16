# Lint

Wiki health check. Triggered by "lint".

## Steps

1. **Ingest first** — check `wiki/processed.md` against `raw/resumes/`. Run `/ingest` on any files not yet recorded in `processed.md`.

2. **Check the wiki for each of the following issues:**

   - **Contradictions** — conflicting dates, team sizes, or titles for the same role across wiki pages
   - **Duplicates** — repeated bullets or skill entries that can be merged
   - **Unmetric'd achievements** — impact statements in `achievements.md` without numbers; flag each with a prompt for the user to fill in
   - **Skills not evidenced** — entries in `skills.md` with no backing example in `experience.md` or `projects.md`
   - **Orphan pages** — pages in `wiki/pages/` not listed in `wiki/index.md`
   - **Thin roles** — jobs in `experience.md` with fewer than 2 meaningful bullets; flag for enrichment
   - **Missing JD keywords** — terms from `applications/*/job-description.md` files that don't appear in `wiki/pages/keywords.md`

3. **Auto-fix** what can be fixed without user input (dedup, merge near-identical entries, fix obvious formatting).

4. **Flag everything else** under `## Open lint findings` at the top of `wiki/log.md`. Each finding: one line describing the issue and what information is needed to resolve it.

5. **Append to `wiki/log.md`:**
   ```
   ## [YYYY-MM-DD] lint — <summary of findings>
   - Auto-fixed: <what was fixed>
   - Flagged for review: <count> items under Open lint findings
   ```
