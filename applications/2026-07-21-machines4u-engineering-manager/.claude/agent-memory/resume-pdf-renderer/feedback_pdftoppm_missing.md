---
name: feedback-pdftoppm-missing
description: Read tool's pages parameter cannot render PDFs in this environment because poppler-utils/pdftoppm is not installed
metadata:
  type: feedback
---

Attempting to visually verify a rendered PDF with `Read` + `pages` fails with "pdftoppm is not installed. Install poppler-utils...".

**Why:** This environment does not have poppler-utils installed, so PDF-to-image rendering (which the Read tool's `pages` parameter relies on) is unavailable. This is an environment limitation, not a bug in the build script or the PDF itself.

**How to apply:** When this error appears, do not treat it as a render failure or retry loop. Fall back to the other verification steps the `/render` skill and CLAUDE.md require: confirm the PDF file(s) exist at the expected path, confirm size > 0 bytes, and confirm the build script's stdout contains no warnings about missing assets/fonts. Report to the user that visual proofing wasn't possible in this environment and that verification relied on file existence/size/build-log checks instead — don't silently skip mentioning it.
