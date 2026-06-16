# Finalise

Export PDFs, archive sources, ingest, and update tracker. Triggered by "finalise" at the end of an apply flow.

You need to know which application folder is active. If unclear, ask the user before proceeding.

## Steps

1. **Generate PDFs** — invoke `/render`.

2. **Archive markdown sources** to `raw/resumes/` (PDFs stay in the application folder for recruiters, never go to `raw/`):
   - `applications/<folder>/resume-draft.md` → `raw/resumes/Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Resume.md`
   - `applications/<folder>/cover-letter-draft.md` → `raw/resumes/Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Cover-Letter.md`

3. **Ingest both archived `.md` files** — invoke `/ingest` on each to capture positioning variants, ATS keywords, and gap-bridging language into the wiki.

4. **Write `meta.md`** in the application folder:
   ```
   company: <name>
   role: <title>
   date_applied: <YYYY-MM-DD>
   resume_used: raw/resumes/Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Resume.md
   cover_letter_used: raw/resumes/Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Cover-Letter.md
   status: Ready to send
   outcome: —
   notes:
   ```

5. **Append a row to `outputs/tracker.md`:**
   ```
   | <YYYY-MM-DD> | <Company> | <Role> | Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Resume.md | Ready to send | — |
   ```

6. **Append to `wiki/log.md`:**
   ```
   ## [YYYY-MM-DD] apply (finalised) — <Company> <Role>
   - PDFs generated via /render; archived resume and cover letter to raw/resumes/
   - Ingested both markdown sources
   - Pages touched: [[positioning]], [[keywords]], ...
   ```
