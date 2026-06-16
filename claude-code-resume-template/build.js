#!/usr/bin/env node
'use strict';

/**
 * build.js — parse resume-draft.md + cover-letter-draft.md and generate PDFs.
 *
 * Usage:
 *   node build.js <application-folder-path> [company-name]
 *
 * Examples:
 *   node build.js applications/2026-06-16-halosoft-head-of-delivery/
 *   node build.js applications/2026-06-16-sharp-and-carter-principal-project-manager/ "Sharp & Carter"
 *
 * Outputs two PDFs in the application folder:
 *   Alan Soto - {Role} - {Company} - Resume.pdf
 *   Alan Soto - {Role} - {Company} - Cover Letter.pdf  (if cover-letter-draft.md exists)
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ── Hardcoded contact constants ─────────────────────────────────────────────
const CONTACT = {
  name:          'Alan Soto',
  email:         'alan.soto@xero.com',
  linkedinLabel: 'linkedin.com/in/alansoto',
  linkedinUrl:   'https://www.linkedin.com/in/alansoto/',
  location:      'Brisbane, QLD, Australia',
};

// ── CLI args ─────────────────────────────────────────────────────────────────
const TEMPLATE_DIR = __dirname;
const appFolder    = process.argv[2];

if (!appFolder) {
  console.error('Usage: node build.js <application-folder-path> [company-name]');
  process.exit(1);
}

const appDir = path.resolve(appFolder);
if (!fs.existsSync(appDir)) {
  console.error('Folder not found: ' + appDir);
  process.exit(1);
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function readFile(p) {
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

function inferCompany(folderPath) {
  const base        = path.basename(folderPath);
  const withoutDate = base.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const first       = withoutDate.split('-')[0];
  return first.charAt(0).toUpperCase() + first.slice(1);
}

function formatDate() {
  const now    = new Date();
  const months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

// ── Resume parser ─────────────────────────────────────────────────────────────
function parseResumeDraft(content) {
  const lines = content.split('\n');

  // Header: first 5 non-blank, non-section lines
  const headerLines = [];
  for (const l of lines) {
    if (l.startsWith('## ') || l.startsWith('---')) break;
    if (l.trim()) headerLines.push(l.trim());
    if (headerLines.length === 5) break;
  }

  const name          = (headerLines[0] || '').replace(/^#\s*/, '');
  const title         = headerLines[1] || '';
  const location      = headerLines[2] || '';
  const email         = headerLines[3] || '';
  const linkedinRaw   = headerLines[4] || '';
  const linkedinParts = linkedinRaw.split(' - ');
  const linkedinLabel = linkedinParts[0] || '';
  const linkedinUrl   = linkedinParts[1] || '';

  // Collect lines per section (keyed by lowercase ## heading)
  const sections = {};
  let key   = null;
  let block = [];
  for (const l of lines) {
    if (l.startsWith('## ')) {
      if (key !== null) sections[key] = block;
      key   = l.replace(/^##\s*/, '').trim().toLowerCase();
      block = [];
    } else if (key !== null) {
      block.push(l);
    }
  }
  if (key !== null) sections[key] = block;

  return {
    name, title, location, email, linkedinLabel, linkedinUrl,
    summary:    parseProfile(sections['profile']     || []),
    skills:     parseSkills(sections['core skills']  || []),
    experience: parseExperience(sections['experience'] || []),
    education:  parseEducation(sections['education'] || []),
    earlier:    parseEarlier(sections['earlier']     || []),
  };
}

function parseProfile(lines) {
  const paragraphs = [];
  let cur = [];
  for (const l of lines) {
    if (l.trim() === '---') continue;
    if (!l.trim()) {
      if (cur.length) { paragraphs.push(cur.join(' ')); cur = []; }
    } else {
      cur.push(l.trim());
    }
  }
  if (cur.length) paragraphs.push(cur.join(' '));
  return paragraphs.join('\n\n');
}

function parseSkills(lines) {
  return lines
    .filter(l => l.trim() && l.trim() !== '---' && l.includes(':'))
    .map(l => {
      const ci = l.indexOf(':');
      return { label: l.slice(0, ci).trim(), items: l.slice(ci + 1).trim() };
    });
}

function parseExperience(lines) {
  const entries = [];
  let cur   = null;
  let state = 0; // 0=await-meta  1=await-context  2=bullets

  for (const line of lines) {
    if (line.startsWith('### ')) {
      if (cur) entries.push(cur);
      const header = line.replace(/^###\s*/, '').trim();
      // Split on first " - " or " — "
      const m = header.match(/^(.+?)\s+[-—]\s+(.+)$/);
      cur   = {
        company: m ? m[1].trim() : header,
        role:    m ? m[2].trim() : '',
        dates: '', place: '', context: '', bullets: [],
      };
      state = 0;
      continue;
    }

    if (!cur) continue;
    const t = line.trim();
    if (!t || t === '---') continue;

    if (state === 0) {
      // "Mar 2022 - Present · Brisbane (remote)"
      const di = t.indexOf(' · ');
      const datePart = di > -1 ? t.slice(0, di) : t;
      cur.place = di > -1 ? t.slice(di + 3) : '';
      // Normalise date separator to em dash
      cur.dates = datePart.replace(/\s+[-–—]\s+/, ' — ');
      state = 1;
    } else if (state === 1 && !t.startsWith('- ')) {
      cur.context = t;
      state = 2;
    } else if (t.startsWith('- ')) {
      cur.bullets.push(t.slice(2).trim());
      state = 2;
    }
  }

  if (cur) entries.push(cur);
  return entries;
}

function parseEducation(lines) {
  return lines
    .filter(l => l.trim() && l.trim() !== '---')
    .map(l => {
      const parts = l.split(' · ').map(s => s.trim());
      return {
        qualification: parts[0]            || '',
        org:           parts[1]            || '',
        note:          parts.slice(2).join(' · ') || '',
      };
    });
}

function parseEarlier(lines) {
  return lines
    .filter(l => l.trim() && l.trim() !== '---')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ── Cover letter parser ───────────────────────────────────────────────────────
function parseCoverLetterDraft(content, role) {
  const lines = content.split('\n');
  let bodyStart = 0;

  // Optional "Recipient: Name, Title, Company, Location" on first line
  const recipient = {};
  const firstLine = (lines[0] || '').trim();
  if (/^recipient:/i.test(firstLine)) {
    const parts = firstLine.replace(/^recipient:\s*/i, '').split(',').map(s => s.trim());
    recipient.name     = parts[0] || '';
    recipient.title    = parts[1] || '';
    recipient.company  = parts[2] || '';
    recipient.location = parts[3] || '';
    bodyStart = 1;
  }

  // Parse body: salutation → paragraphs → sign-off
  const bodyLines  = lines.slice(bodyStart);
  let salutation   = '';
  let signOff      = 'Sincerely,';
  const paragraphs = [];
  let cur          = [];
  let inBody       = false;
  const SIGNOFF_RE = /^(sincerely|regards|kind regards|warm regards|yours sincerely),?$/i;

  for (const line of bodyLines) {
    const t = line.trim();

    // Skip contact header lines that some drafts include
    if (t === CONTACT.name || t === CONTACT.email ||
        t.startsWith('linkedin') || t === '---') continue;

    if (!inBody) {
      if (/^dear /i.test(t)) { salutation = t; inBody = true; }
      continue;
    }

    if (SIGNOFF_RE.test(t)) {
      if (cur.length) { paragraphs.push(cur.join(' ')); cur = []; }
      signOff = t.endsWith(',') ? t : t + ',';
      break;
    }

    if (!t) {
      if (cur.length) { paragraphs.push(cur.join(' ')); cur = []; }
    } else if (t.startsWith('- ')) {
      if (cur.length) { paragraphs.push(cur.join(' ')); cur = []; }
      const last = paragraphs[paragraphs.length - 1];
      if (Array.isArray(last)) {
        last.push(t.slice(2));
      } else {
        paragraphs.push([t.slice(2)]);
      }
    } else {
      cur.push(t);
    }
  }
  if (cur.length) paragraphs.push(cur.join(' '));

  return {
    ...CONTACT,
    title: role,
    date:  formatDate(),
    recipient,
    salutation,
    paragraphs,
    signOff,
    signature: '',
  };
}

// ── Write data files ──────────────────────────────────────────────────────────
function writeDataFile(filename, varName, data) {
  const js = `window.${varName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(TEMPLATE_DIR, filename), js, 'utf8');
  console.log(`Written ${filename}`);
}

// ── Generate one PDF ──────────────────────────────────────────────────────────
function generatePDF(htmlFile, pdfDest) {
  const genScript = path.join(TEMPLATE_DIR, 'generate-pdf.js');
  const cmd = `node "${genScript}" "${htmlFile}" "${pdfDest}"`;
  console.log('Generating:', path.basename(pdfDest));
  execSync(cmd, { cwd: TEMPLATE_DIR, stdio: 'inherit' });
}

// ── Main ──────────────────────────────────────────────────────────────────────
const company = process.argv[3] || inferCompany(appDir);

// 1. Resume
const resumeMd = readFile(path.join(appDir, 'resume-draft.md'));
if (!resumeMd) { console.error('resume-draft.md not found in ' + appDir); process.exit(1); }

const resumeData = parseResumeDraft(resumeMd);
writeDataFile('resume-data.js', 'RESUME', resumeData);

const role          = resumeData.title;
const resumePdfName = `Alan Soto - ${role} - ${company} - Resume.pdf`;
generatePDF('resume.html', path.join(appDir, resumePdfName));

// 2. Cover letter (optional)
const coverMd = readFile(path.join(appDir, 'cover-letter-draft.md'));
if (coverMd) {
  const clData = parseCoverLetterDraft(coverMd, role);
  writeDataFile('cover-letter-data.js', 'COVER_LETTER', clData);

  const clPdfName = `Alan Soto - ${role} - ${company} - Cover Letter.pdf`;
  generatePDF('cover-letter.html', path.join(appDir, clPdfName));
}

console.log('\nDone. PDFs written to', appDir);
