import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\7ec1e4e1-24dc-4ed9-b883-fcceae726798';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Capture desktop
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto('http://localhost:4174/', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(outDir, 'desktop_view.png'), fullPage: true });
    console.log('Captured desktop_view.png');
    await page.close();
  }

  // Capture tablet
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 768, height: 1024 });
    await page.goto('http://localhost:4174/', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(outDir, 'tablet_view.png'), fullPage: true });
    console.log('Captured tablet_view.png');
    await page.close();
  }

  // Capture mobile
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 812 });
    await page.goto('http://localhost:4174/', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(outDir, 'mobile_view.png'), fullPage: true });
    console.log('Captured mobile_view.png');
    await page.close();
  }

  await browser.close();
  console.log('All screenshots captured cleanly with new pages per viewport!');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
