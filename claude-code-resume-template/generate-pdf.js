#!/usr/bin/env node
/* ============================================================================
   generate-pdf.js  —  render a template HTML to a print-perfect A4 PDF.

   Usage:
     node generate-pdf.js [input.html] [output.pdf]

   Examples:
     node generate-pdf.js                              # resume.html  -> resume.pdf
     node generate-pdf.js resume.html resume.pdf
     node generate-pdf.js cover-letter.html cover-letter.pdf

   Requires Puppeteer (bundles a compatible Chromium):
     npm i puppeteer

   It loads the HTML (which reads its sibling *-data.js), waits for the layout
   to finish (window.__paginated === true), then prints A4 with zero margins —
   the page padding inside the template provides the margins.
   ============================================================================ */

const path = require('path');

const INPUT  = process.argv[2] || 'resume.html';
const HTML_PATH = path.resolve(__dirname, INPUT);
const DEFAULT_OUT = path.basename(INPUT).replace(/\.html?$/i, '') + '.pdf';
const OUT_PATH  = path.resolve(process.cwd(), process.argv[3] || DEFAULT_OUT);

(async () => {
  const { default: puppeteer } = await import('puppeteer');
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto('file://' + HTML_PATH, { waitUntil: 'networkidle0' });
    // Wait until the template's render/paginator has laid out every sheet.
    await page.waitForFunction('window.__paginated === true', { timeout: 20000 });

    await page.pdf({
      path: OUT_PATH,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,           // honour @page { size:A4; margin:0 }
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log('Wrote ' + OUT_PATH);
  } finally {
    await browser.close();
  }
})().catch(err => { console.error(err); process.exit(1); });
