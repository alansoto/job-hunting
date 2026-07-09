# Render

Generate PDFs from markdown drafts in an application folder. Triggered by "render PDFs" or "generate PDFs", or called as a step inside `/finalise`.

You need to know which application folder is active. If unclear, ask the user before proceeding.

## Steps

1. **Confirm prerequisites** — the application folder must contain `resume-draft.md`. A `cover-letter-draft.md` is optional but will also be rendered if present.

2. **Proofread before rendering** — invoke the `resume-proofreader` subagent (Agent tool, `subagent_type: resume-proofreader`) against the target application folder. This is a required gate, not optional:
   - If it reports no issues, proceed to Step 3.
   - If it reports issues, relay them to the user verbatim and ask whether to fix the draft(s) first or proceed with rendering as-is. Do not run `build.js` until the user responds.

3. **Detect the format, then run the matching build script** from the project root.

   Inspect `resume-draft.md` to pick the script:
   - **Narrative / hybrid format** — the file contains `**Challenge & Impact**` / `**Key Contributions**` section markers (and uses `## Skills` / `## Certifications` sections). Use `build-narrative.js`.
   - **Standard format** — bullet-only experience with a `## Core skills` grid. Use `build.js`.

   Standard:
   ```
   node claude-code-resume-template/build.js applications/<folder>/
   ```
   Narrative / hybrid:
   ```
   node claude-code-resume-template/build-narrative.js applications/<folder>/
   ```
   For multi-word company names, pass the name as a second argument, e.g.:
   ```
   node claude-code-resume-template/build-narrative.js applications/<folder>/ "Sharp & Carter"
   ```
   Both scripts will:
   - Parse `resume-draft.md` → write `claude-code-resume-template/resume-data.js` (standard) or `resume-narrative-data.js` (narrative)
   - Parse `cover-letter-draft.md` (if present) → write `claude-code-resume-template/cover-letter-data.js`
   - Launch Puppeteer and render PDFs, writing them directly to the application folder:
     - `applications/<folder>/Alan Soto - {Role} - {Company} - Resume.pdf`
     - `applications/<folder>/Alan Soto - {Role} - {Company} - Cover Letter.pdf` (if cover letter draft exists)

4. **Verify output** — confirm the PDF file(s) exist in `applications/<folder>/`.

## Fallback

The build script already wrote the data files (`resume-data.js` / `resume-narrative-data.js` and `cover-letter-data.js`) before the render step, so a fallback only needs to re-run Puppeteer against the templates.

Standard format — if `build.js` times out or Puppeteer fails:

```
node claude-code-resume-template/_render.mjs resume.pdf cover-letter.pdf
```

Narrative / hybrid format — `_render.mjs` is hardcoded to the standard `resume.html`, so render the narrative template directly with `generate-pdf.js`:

```
node claude-code-resume-template/generate-pdf.js resume-narrative.html resume.pdf
node claude-code-resume-template/generate-pdf.js cover-letter.html cover-letter.pdf
```

Run from the project root; then verify the PDFs appeared in `claude-code-resume-template/` and move them to the application folder manually.

## Notes

- Company name is auto-inferred from the folder name (strips the date prefix, takes the first hyphen-separated segment, capitalises it). Only pass the second argument when that inference would be wrong — e.g. multi-word names (`"Sharp & Carter"`), abbreviations, or names with punctuation.
- `resume-data.js` and `cover-letter-data.js` are auto-generated — never edit them manually; re-running `build.js` regenerates them.
- PDFs require the fonts in `claude-code-resume-template/fonts/` to be present; do not move or delete that folder.

## Required `resume-draft.md` format

Two formats exist. The **narrative / hybrid** format (rendered by `build-narrative.js`) is documented in `/apply` Step 3 "Format B" — it is detected by its `**Challenge & Impact**` / `**Key Contributions**` section markers.

The **standard** format below is parsed by `build.js` structurally — wrong section names or a malformed preamble will silently produce an empty PDF or an illegal filename. Before running, verify the file matches this structure:

```
# Alan Soto          ← name (# prefix OK here only)
{Role Title}         ← becomes the PDF filename — no | : * ? " < > \ allowed
Brisbane, QLD, Australia
me@alansoto.info
linkedin.com/in/alansoto - https://www.linkedin.com/in/alansoto/

---

## Profile          ← NOT "Professional Summary"

## Core skills      ← NOT "Core Competencies" — each line: Label: item · item

## Experience       ← NOT "Employment History"
### Company - Role  ← company first, then " - ", then role title
dates · location
Optional context line

- Bullet

## Earlier          ← optional; plain paragraph for old/brief roles

## Education        ← each line: qualification · org · note
```

The full format spec (with all rules) lives in `/apply` Step 3.
