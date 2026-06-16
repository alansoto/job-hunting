import puppeteer from 'puppeteer';
import { pathToFileURL } from 'url';
import path from 'path';

const jobs = [
  ['resume.html', process.argv[2] || 'resume.pdf'],
  ['cover-letter.html', process.argv[3] || 'cover-letter.pdf'],
];

const browser = await puppeteer.launch({ headless: true });
try {
  for (const [html, out] of jobs) {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(path.resolve(html)).href, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction('window.__paginated === true', { timeout: 60000 });
    await page.pdf({
      path: path.resolve(out),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await page.close();
    console.log('Wrote ' + path.resolve(out));
  }
} finally {
  await browser.close();
}
