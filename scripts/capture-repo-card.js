#!/usr/bin/env node

/**
 * Capture the repo card as an image
 *
 * Usage:
 *   1. Start dev server: npm run dev
 *   2. Run this script: node scripts/capture-repo-card.js
 *   3. Image saved to: public/images/repo-card.png
 */

const puppeteer = require('puppeteer');
const path = require('path');

/**
 * Capture the repo card preview page and save it as a PNG image.
 *
 * Loads http://localhost:3000/repo-card-preview in a headless browser, waits for network idle and fonts, and writes a 1200×630 PNG to ../public/images/repo-card.png (relative to this script).
 *
 * @throws {Error} If navigation, screenshot, or browser operations fail; the original error is rethrown.
 */
async function captureRepoCard() {
  console.log('🚀 Starting browser...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set viewport to exact dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2 // For high-DPI displays
    });

    console.log('📄 Loading page...');
    await page.goto('http://localhost:3000/repo-card-preview', {
      waitUntil: 'networkidle0'
    });

    // Wait a bit for fonts to load
    await page.waitForTimeout(1000);

    console.log('📸 Capturing screenshot...');
    const outputPath = path.join(__dirname, '../public/images/repo-card.png');

    await page.screenshot({
      path: outputPath,
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 630
      }
    });

    console.log('✅ Success! Image saved to:', outputPath);
    console.log('\nNext steps:');
    console.log('1. Add to GitHub: Repo Settings → Social Preview → Upload image');
    console.log('2. Commit: git add public/images/repo-card.png');
    console.log('3. Visit the credits page: http://localhost:3000/credits');

  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

/**
 * Checks whether the local development server is responding at /repo-card-preview.
 *
 * @returns {boolean} `true` if the server responds with a successful HTTP status, `false` otherwise.
 */
async function checkDevServer() {
  try {
    const response = await fetch('http://localhost:3000/repo-card-preview');
    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * Checks whether the local dev server is running and, if so, captures the repo card image.
 *
 * If the dev server is not running, prints instructions to start it and exits the process with status 1.
 */
async function main() {
  const isRunning = await checkDevServer();

  if (!isRunning) {
    console.error('❌ Dev server not running!');
    console.log('\nPlease start the dev server first:');
    console.log('  npm run dev');
    console.log('\nThen run this script again.');
    process.exit(1);
  }

  await captureRepoCard();
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});