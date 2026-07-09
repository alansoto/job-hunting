#!/usr/bin/env node
'use strict';

/**
 * build-narrative.js — parse a narrative-format resume-draft.md and render a PDF.
 *
 * This is the SECOND resume format (story-style: each role told as
 * BACKGROUND -> WHAT I DID -> ACHIEVEMENTS in prose). It sits alongside
 * build.js (the bullet-point format) and does not touch it. Use whichever
 * format suits the application.
 *
 * Usage:
 *   node build-narrative.js <application-folder-path> [company-name]
 *
 * Reads  <folder>/resume-draft.md
 * Writes <folder>/Alan Soto - {Role} - {Company} - Resume.pdf
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CONTACT = {
  name:          'Alan Soto',
  email:         'me@alansoto.info',
  phone:         '04 3040 4307',
  linkedinLabel: 'linkedin.com/in/alansoto',
  linkedinUrl:   'https://www.linkedin.com/in/alansoto/',
  location:      'Brisbane, QLD, Australia',
};

const TEMPLATE_DIR = __dirname;
const appFolder    = process.argv[2];

if (!appFolder) {
  console.error('Usage: node build-narrative.js <application-folder-path> [company-name]');
  process.exit(1);
}

const appDir = path.resolve(appFolder);
if (!fs.existsSync(appDir)) {
  console.error('Folder not found: ' + appDir);
  process.exit(1);
}

function readFile(p) { return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null; }

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

  // Collect lines per ## section
  const sections = {};
  let key = null, block = [];
  for (const l of lines) {
    if (l.startsWith('## ')) {
      if (key !== null) sections[key] = block;
      key = l.replace(/^##\s*/, '').trim().toLowerCase();
      block = [];
    } else if (key !== null) {
      block.push(l);
    }
  }
  if (key !== null) sections[key] = block;

  return {
    name, title, location, email, linkedinLabel, linkedinUrl,
    summary:        parseProfile(sections['profile'] || []),
    skills:         parseSkills(sections['skills'] || []),
    experience:     parseExperience(sections['experience'] || []),
    earlier:        parseEarlier(sections['earlier'] || []),
    education:      parseEducation(sections['education'] || []),
    certifications: parseEducation(sections['certifications'] || []),
  };
}

function parseProfile(lines) {
  const paragraphs = [];
  let cur = [];
  for (const l of lines) {
    if (l.trim() === '---') continue;
    if (!l.trim()) { if (cur.length) { paragraphs.push(cur.join(' ')); cur = []; } }
    else cur.push(l.trim());
  }
  if (cur.length) paragraphs.push(cur.join(' '));
  return paragraphs.join('\n\n');
}

function parseSkills(lines) {
  return lines
    .map(l => l.trim())
    .filter(l => l.startsWith('- '))
    .map(l => l.slice(2).trim());
}

// Hybrid experience parser. Each entry starts with `### Company - Role` and a
// `dates · place` meta line. What follows chooses the render style automatically:
//   - NARRATIVE: label-less intro prose, then `**Section**` markers each holding
//     bullets and/or prose. Section labels used here: `Challenge & Impact`
//     (Problem/Solution bullets) and `Key Contributions`.
//   - BULLETS:   `- ` lines with no preceding `**Section**` (older/shorter roles).
// Per entry: `intro` = label-less lead prose, `sections` = labelled blocks,
// `bullets` = flat bullets for the old style.
function parseExperience(lines) {
  const entries = [];
  let cur = null, section = null, para = [], needMeta = false;

  const flushPara = () => {
    if (para.length && cur) {
      const text = para.join(' ');
      if (section) section.paras.push(text);
      else cur.intro.push(text);
    }
    para = [];
  };
  const flushSection = () => { flushPara(); if (section && cur) cur.sections.push(section); section = null; };

  for (const line of lines) {
    if (line.startsWith('### ')) {
      flushSection();
      if (cur) entries.push(cur);
      const header = line.replace(/^###\s*/, '').trim();
      const m = header.match(/^(.+?)\s+[-—]\s+(.+)$/);
      cur = { company: m ? m[1].trim() : header, role: m ? m[2].trim() : '', dates: '', place: '', intro: [], sections: [], bullets: [] };
      section = null; para = []; needMeta = true;
      continue;
    }
    if (!cur) continue;

    const t = line.trim();
    if (t === '---') continue;
    if (!t) { flushPara(); continue; }

    // Bullet line — attaches to the current section, or the entry's flat list.
    if (t.startsWith('- ')) {
      flushPara();
      const b = t.slice(2).trim();
      if (section) section.bullets.push(b);
      else cur.bullets.push(b);
      continue;
    }

    // Section marker: `**Challenge & Impact**`
    const bm = t.match(/^\*\*(.+?)\*\*:?$/);
    if (bm) { flushSection(); section = { label: bm[1].trim(), bullets: [], paras: [] }; para = []; needMeta = false; continue; }

    if (needMeta) {
      const di = t.indexOf(' · ');
      cur.dates = (di > -1 ? t.slice(0, di) : t).replace(/\s+[-–—]\s+/, ' — ');
      cur.place = di > -1 ? t.slice(di + 3).trim() : '';
      needMeta = false;
      continue;
    }

    para.push(t);
  }

  flushSection();
  if (cur) entries.push(cur);
  return entries;
}

function parseEarlier(lines) {
  const paras = [];
  let cur = [];
  for (const l of lines) {
    if (l.trim() === '---') continue;
    if (!l.trim()) { if (cur.length) { paras.push(cur.join(' ')); cur = []; } }
    else cur.push(l.trim());
  }
  if (cur.length) paras.push(cur.join(' '));
  return paras.join('\n\n');
}

// Handles both Education and Certifications: `Qualification · Org · note...`
function parseEducation(lines) {
  return lines
    .filter(l => l.trim() && l.trim() !== '---')
    .map(l => {
      const parts = l.split(' · ').map(s => s.trim());
      return {
        qualification: parts[0] || '',
        org:           parts[1] || '',
        note:          parts.slice(2).join(' · ') || '',
      };
    });
}

// ── Cover letter parser (format-agnostic; identical to build.js) ─────────────
const SECTION_MARKER_RE = /^`{1,3}\s*(\w+)\s*`{1,3}$/;

function parseParagraphLines(lines) {
  const paragraphs = [];
  let cur = [];
  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      if (cur.length) { paragraphs.push(cur.join(' ')); cur = []; }
    } else if (t.startsWith('- ')) {
      if (cur.length) { paragraphs.push(cur.join(' ')); cur = []; }
      const last = paragraphs[paragraphs.length - 1];
      if (Array.isArray(last)) last.push(t.slice(2));
      else paragraphs.push([t.slice(2)]);
    } else {
      cur.push(t);
    }
  }
  if (cur.length) paragraphs.push(cur.join(' '));
  return paragraphs;
}

function parseCoverLetterDraft(content, role) {
  const lines = content.split('\n');

  // Explicit format: file contains at least one ``` section ``` marker
  if (lines.some(l => SECTION_MARKER_RE.test(l.trim()))) {
    const sections = {};
    let current = null;
    for (const line of lines) {
      const m = line.trim().match(SECTION_MARKER_RE);
      if (m) { current = m[1]; sections[current] = []; continue; }
      if (current) sections[current].push(line);
    }

    const salutParagraphs = [];
    let salutBuf = [];
    for (const l of (sections.salutation || [])) {
      const t = l.trim();
      if (!t) { if (salutBuf.length) { salutParagraphs.push(salutBuf.join(' ')); salutBuf = []; } }
      else salutBuf.push(t);
    }
    if (salutBuf.length) salutParagraphs.push(salutBuf.join(' '));
    const salutation = salutParagraphs.join('\n');

    const paragraphs = parseParagraphLines(sections.paragraphs || []);

    const signOffRaw = (sections.signOff || []).map(l => l.trim()).filter(Boolean)[0] || 'Sincerely,';
    const signOff = signOffRaw.endsWith(',') ? signOffRaw : signOffRaw + ',';

    return { ...CONTACT, title: role, date: formatDate(), recipient: {}, salutation, paragraphs, signOff, signature: '' };
  }

  // Legacy inference format (backward compat for existing drafts)
  let bodyStart = 0;
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

  const bodyLines  = lines.slice(bodyStart);
  let salutation   = '';
  let signOff      = 'Sincerely,';
  const paragraphs = [];
  let cur          = [];
  let inBody       = false;
  const SIGNOFF_RE = /^(sincerely|regards|kind regards|warm regards|yours sincerely),?$/i;

  for (const line of bodyLines) {
    const t = line.trim();
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
      if (Array.isArray(last)) last.push(t.slice(2));
      else paragraphs.push([t.slice(2)]);
    } else {
      cur.push(t);
    }
  }
  if (cur.length) paragraphs.push(cur.join(' '));

  return { ...CONTACT, title: role, date: formatDate(), recipient, salutation, paragraphs, signOff, signature: '' };
}

// ── Write data + render ─────────────────────────────────────────────────────
function writeDataFile(filename, varName, data) {
  const js = `window.${varName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(TEMPLATE_DIR, filename), js, 'utf8');
  console.log(`Written ${filename}`);
}

function generatePDF(htmlFile, pdfDest) {
  const genScript = path.join(TEMPLATE_DIR, 'generate-pdf.js');
  const cmd = `node "${genScript}" "${htmlFile}" "${pdfDest}"`;
  console.log('Generating:', path.basename(pdfDest));
  execSync(cmd, { cwd: TEMPLATE_DIR, stdio: 'inherit' });
}

// ── Main ────────────────────────────────────────────────────────────────────
const company = process.argv[3] || inferCompany(appDir);

const resumeMd = readFile(path.join(appDir, 'resume-draft.md'));
if (!resumeMd) { console.error('resume-draft.md not found in ' + appDir); process.exit(1); }

// 1. Parse both drafts and write BOTH data files first, so a later Puppeteer
//    failure never leaves a stale cover-letter data file from a prior run.
const resumeData = { ...parseResumeDraft(resumeMd), phone: CONTACT.phone };
writeDataFile('resume-narrative-data.js', 'RESUME', resumeData);
const role = resumeData.title;

const coverMd = readFile(path.join(appDir, 'cover-letter-draft.md'));
if (coverMd) {
  writeDataFile('cover-letter-data.js', 'COVER_LETTER', parseCoverLetterDraft(coverMd, role));
} else {
  writeDataFile('cover-letter-data.js', 'COVER_LETTER', null);
}

// 2. Generate PDFs. The resume uses the narrative template; the cover letter
//    uses the same cover-letter.html as build.js (format is identical).
const resumePdfName = `Alan Soto - ${role} - ${company} - Resume.pdf`;
generatePDF('resume-narrative.html', path.join(appDir, resumePdfName));

if (coverMd) {
  const clPdfName = `Alan Soto - ${role} - ${company} - Cover Letter.pdf`;
  generatePDF('cover-letter.html', path.join(appDir, clPdfName));
}

console.log('\nDone. PDFs written to', appDir);
