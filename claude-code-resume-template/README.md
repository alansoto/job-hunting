# Swiss Grid Resume → PDF — template & agent guide

Self-contained HTML/CSS/JS templates that turn a resume `.md` (and an optional
cover letter brief) into clean, print-perfect **A4 PDFs**. Editorial "Swiss grid"
styling: geometric sans headings (Space Grotesk), humanist body (Hanken Grotesk),
black & white, square bullet markers, a sidebar on page 1, automatic pagination.
The **resume and cover letter share one letterhead and type system** so an
application reads as a consistent set.

No framework, no build step. The only runtime dependency is **Puppeteer**
(headless Chrome), and only for the final HTML→PDF step.

---

## 1. Files

| File | What it is | Who edits it |
|---|---|---|
| `resume.html` | Resume template: styles + the paginator. **Don't edit per-resume.** | rarely (theme tweaks) |
| `resume-data.js` | Resume content (`window.RESUME = {…}`). **Regenerate per resume.** | every run |
| `cover-letter.html` | Cover letter template (matches the resume). **Don't edit per-letter.** | rarely (theme tweaks) |
| `cover-letter-data.js` | Letter content (`window.COVER_LETTER = {…}`). **Regenerate per letter.** | every run |
| `generate-pdf.js` | Node + Puppeteer script: any template HTML → PDF. | no |
| `sample-resume.md` | Example of the kind of markdown input you receive. | no |
| `README.md` | This guide. | no |

---

## 2. The task, end to end

1. Read the source resume markdown.
2. Map it into the data object and write `resume-data.js`
   (it must assign `window.RESUME = { … }`). **This is the only file you write.**
3. Render to PDF: `node generate-pdf.js resume.pdf`.

Pagination, fonts, spacing, and page breaks are all handled by the template —
you never place page breaks or worry about layout.

---

## 3. Data schema (`window.RESUME`)

```js
window.RESUME = {
  name:          "Alan Soto",                       // required
  title:         "Senior Technical Program Manager",// headline under the name
  location:      "Brisbane, QLD, Australia",
  email:         "me@alansoto.info",                // rendered as a mailto: link
  linkedinLabel: "linkedin.com/in/alansoto",        // visible link text
  linkedinUrl:   "https://www.linkedin.com/in/alansoto/",

  summary: "One paragraph. Shown under the 'Profile' label.",

  skills: [                                         // each row = a labelled group
    { label: "Program management", items: "A · B · C · D" },  // items: one " · "-joined string
    { label: "AI & technical",     items: "X · Y · Z" }
  ],

  experience: [                                     // newest first
    {
      company: "Xero",
      role:    "Lead Technical Program Manager",
      dates:   "Mar 2022 — Present",                // use an en/em dash, not "to"
      place:   "Brisbane (remote)",
      context: "Global cloud accounting platform · 4,500+ employees",
      bullets: [ "Achievement one.", "Achievement two." ]   // plain strings, no leading "-"
    }
    // …more roles…
  ],

  education: [
    { qualification: "Master of Project Management", org: "QUT", note: "Dean’s Award · 7.0 GPA" },
    { qualification: "PMP", org: "Project Management Institute", note: "" }   // note optional
  ],

  earlier: "Earlier — one-line summary of older roles."   // optional; omit if not needed
};
```

### Rules
- **Plain text only** — no HTML/markdown inside values. Special characters
  (`&`, `<`, `>`) are escaped automatically.
- Omit a field or set it to `""` to hide it (the template skips empties).
- Order `experience` **newest first** — the first roles fill page 1.
- `skills[].items` is a **single string** with values joined by `" · "`
  (middle dot). Same convention for `context` and education `note`.
- Use a real dash in `dates` (`—` or `–`), not the word "to".

---

## 4. Mapping markdown → data (guidance)

Resume markdown varies. Map intelligently rather than relying on a rigid parser:

| Markdown | → field |
|---|---|
| First `# H1` | `name` |
| Line(s) under the name (role, location, contact) | `title`, `location`, `email`, `linkedinLabel`/`linkedinUrl` (pull from `[text](url)` links) |
| `## Summary` / `## Profile` body | `summary` |
| `## Core skills` — each `Label: a, b, c` line | one `skills[]` entry; convert the comma list to a `" · "`-joined `items` string; Title-case the label |
| `### Company - Role` headings under `## Experience` | `experience[].company`, `.role` |
| The meta line under a role (`Dates - Place - Context`) | split on ` - ` / `–` into `dates`, `place`, `context` |
| `-`/`*` list items under a role | `bullets[]` (strip the marker) |
| `## Education…` list | `education[]` — split `Qualification - Org (note)` into `qualification`, `org`, `note` |
| A trailing "Earlier: …" line | `earlier` |

Keep wording faithful to the source. Don't invent content. If the markdown
lacks a section (e.g. no skills), just omit it.

---

## 5. Generating the PDF

```bash
npm i puppeteer                                   # one-time
node generate-pdf.js                              # resume.html       -> resume.pdf
node generate-pdf.js cover-letter.html cover-letter.pdf
```

`generate-pdf.js [input.html] [output.pdf]` loads the template, waits for
`window.__paginated === true` (the done-flag both templates set), then prints A4
with zero margins (the page padding inside the template is the margin).

**Alternatives**
- Headless Chrome directly:
  `chrome --headless --print-to-pdf=resume.pdf --no-pdf-header-footer file:///abs/path/resume.html`
  (Chromium runs the JS, so pagination still works.)
- Manual: open `resume.html` in a browser → Print → **Save as PDF**, paper A4,
  margins **None**, "Background graphics" on.

> The renderer **must execute JavaScript** (Chrome/Chromium/Puppeteer/Playwright).
> Pure-CSS converters like WeasyPrint or wkhtmltopdf won't run the paginator and
> will not lay the pages out correctly.

> Fonts load from Google Fonts over the network. For fully offline rendering,
> self-host Space Grotesk + Hanken Grotesk and swap the `<link>` in `resume.html`
> for local `@font-face` rules.

---

## 6. How pagination works (so you can reason about it)

- Each `.page` is a fixed **794 × 1123px** sheet = A4 at 96dpi.
- **Page 1** = full-width header, then two columns:
  - left **sidebar** (Contact, Skills, Education),
  - right **main** column (Profile, then experience entries).
- The script adds experience entries to page 1 until the next one would cross
  the page's bottom margin, then continues the remaining entries on
  **page 2+ as a single full-width column** ("Experience (continued)").
- Works for any length: a short resume is a single two-column page; a long one
  spans as many pages as needed.

**Keep the sidebar short enough to fit page 1.** Contact + Skills + Education
must fit one A4 column (~590px tall). If a resume has a huge skills list, trim
it or split long `items` strings across fewer groups. (The main column
overflows gracefully to later pages; the sidebar does not.)

---

## 7. Theming (optional)

All in `resume.html`:

- **Colors / fonts:** the `:root` CSS variables (`--ink`, `--muted-*`,
  `--rule`, `--font-head`, `--font-body`, `--desk`). It's black & white by
  design; add an accent by introducing a variable and applying it to
  `.r-title` or `.label`.
- **Page metrics:** the `.page` rule (size, padding) and the `CONFIG` object in
  the script. If you change `.page` padding, update `CONFIG.padBottom` to match,
  or pagination math drifts.
- **Density:** font sizes / `margin-bottom` values on `.entry`, `.bullets li`,
  `.profile-text`. Lower them to fit more per page; raise them for a roomier
  look. The current values are tuned so a ~7-role senior resume lands on 2 pages.

---

## 8. Cover letter

`cover-letter.html` + `cover-letter-data.js` produce a one-page letter that
shares the resume's letterhead, fonts, rule, and colours. It is **hard-locked to
a single A4 page**: the template auto-fits the content (scaling type and spacing
down to a legible floor) so it always fills exactly one page and never spills to
a second. Aim for **3–4 short paragraphs** — if a letter is so long it can't fit
even at minimum scale, the page is clipped and a `console.warn` tells you to
trim it.

Edit `cover-letter-data.js` (assign `window.COVER_LETTER = {…}`):

```js
window.COVER_LETTER = {
  name, title, location, email, linkedinLabel, linkedinUrl,  // letterhead — copy from the resume so they match
  date: "16 June 2026",          // omit -> today's date
  recipient: { name, title, company, location },             // any subset; omit unknowns
  salutation: "",                // omit/"" -> auto-derived ("Dear <first name>," or "Dear Hiring Team,")
  paragraphs: [ "…", "…", "…" ], // tailor to the role; pull proof points from the resume
  signOff: "Sincerely,",         // optional
  signature: ""                  // optional; defaults to name
};
```

Render:

```bash
node generate-pdf.js cover-letter.html cover-letter.pdf
```

Tips:
- Reuse the **same `name`/`title`/contact** as the resume so the headers are identical.
- Write the letter to the specific company and role; cite concrete results that
  also appear in the resume (programs led, scale, outcomes) rather than restating
  the bullet list.
- If you don't know the hiring manager, leave `recipient.name` as `"Hiring Team"`
  (or omit it) — the salutation falls back to "Dear Hiring Team,".
