# Render

Generate PDFs from markdown drafts in an application folder. Triggered by "render PDFs" or "generate PDFs", or called as a step inside `/finalise`.

You need to know which application folder is active. If unclear, ask the user before proceeding.

## Steps

1. **Confirm prerequisites** — the application folder must contain `resume-draft.md`. A `cover-letter-draft.md` is optional but will also be rendered if present.

2. **Run `build.js`** from the project root:
   ```
   node claude-code-resume-template/build.js applications/<folder>/
   ```
   For multi-word company names, pass the name as a second argument:
   ```
   node claude-code-resume-template/build.js applications/<folder>/ "Sharp & Carter"
   ```
   `build.js` will:
   - Parse `resume-draft.md` → write `claude-code-resume-template/resume-data.js`
   - Parse `cover-letter-draft.md` (if present) → write `claude-code-resume-template/cover-letter-data.js`
   - Launch Puppeteer and render PDFs, writing them directly to the application folder:
     - `applications/<folder>/Alan Soto - {Role} - {Company} - Resume.pdf`
     - `applications/<folder>/Alan Soto - {Role} - {Company} - Cover Letter.pdf` (if cover letter draft exists)

3. **Verify output** — confirm the PDF file(s) exist in `applications/<folder>/`.

## Fallback

If `build.js` times out or Puppeteer fails:

```
node claude-code-resume-template/_render.mjs resume.pdf cover-letter.pdf
```

Run from the project root; then verify the PDFs appeared in `claude-code-resume-template/` and move them to the application folder manually.

## Notes

- Company name is auto-inferred from the folder name (strips the date prefix, takes the first hyphen-separated segment, capitalises it). Only pass the second argument when that inference would be wrong — e.g. multi-word names (`"Sharp & Carter"`), abbreviations, or names with punctuation.
- `resume-data.js` and `cover-letter-data.js` are auto-generated — never edit them manually; re-running `build.js` regenerates them.
- PDFs require the fonts in `claude-code-resume-template/fonts/` to be present; do not move or delete that folder.
