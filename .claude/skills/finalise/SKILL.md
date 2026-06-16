# Finalise

Export PDFs, archive sources, ingest, and update tracker. Triggered by "finalise" at the end of an apply flow.

You need to know which application folder is active. If unclear, ask the user before proceeding.

## Steps

1. **Generate PDFs** using `build.js` (all-in-one: parses markdown drafts → populates data files → renders PDFs):
   ```
   node claude-code-resume-template/build.js applications/<folder>/
   ```
   - For companies with multi-word names pass the name as a second arg: `"Sharp & Carter"`
   - `build.js` writes `resume-data.js` and `cover-letter-data.js` automatically — do not write those files manually
   - PDFs are written to `claude-code-resume-template/resume.pdf` and `cover-letter.pdf`
   - If `build.js` times out, run `_render.mjs` directly from inside `claude-code-resume-template/`:
     `node _render.mjs resume.pdf cover-letter.pdf`

2. **Copy PDFs** to the application folder:
   - `claude-code-resume-template/resume.pdf` → `applications/<folder>/resume-final.pdf`
   - `claude-code-resume-template/cover-letter.pdf` → `applications/<folder>/cover-letter-final.pdf`

3. **Archive markdown sources** to `raw/resumes/` (PDFs stay in the application folder for recruiters, never go to `raw/`):
   - `applications/<folder>/resume-draft.md` → `raw/resumes/Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Resume.md`
   - `applications/<folder>/cover-letter-draft.md` → `raw/resumes/Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Cover-Letter.md`

4. **Ingest both archived `.md` files** — invoke `/ingest` on each to capture positioning variants, ATS keywords, and gap-bridging language into the wiki.

5. **Write `meta.md`** in the application folder:
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

6. **Append a row to `outputs/tracker.md`:**
   ```
   | <YYYY-MM-DD> | <Company> | <Role> | Alan-Soto-<YYYY-MM-DD>-<Company>-<Role>-Resume.md | Ready to send | — |
   ```

7. **Append to `wiki/log.md`:**
   ```
   ## [YYYY-MM-DD] apply (finalised) — <Company> <Role>
   - PDFs generated via build.js; archived resume and cover letter to raw/resumes/
   - Ingested both markdown sources
   - Pages touched: [[positioning]], [[keywords]], ...
   ```
