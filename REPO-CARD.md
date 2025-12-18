# Repository Social Card

This repo includes a custom-designed social preview card featuring a terminal theme with tree data structures (a clever pun for a tree care business! 🌳).

## Design

The card features:
- GitHub dark theme aesthetic
- Code background with `TreeNode` data structures
- Terminal window showing the tech stack
- 1200x630px (perfect for GitHub/OpenGraph)
- 40pt safe borders (nothing gets cropped!)

## How to Generate the Image

### Option 1: Automated Script (Recommended)

**Requirements:**
- Node.js 18.17+ (for global `fetch()` API)
- Puppeteer

```bash
# 1. Check Node.js version
node --version  # Should be 18.17.0 or higher

# 2. Install Puppeteer (one-time setup)
npm install -D puppeteer

# 3. Start dev server
npm run dev

# 4. In another terminal, run the capture script
node scripts/capture-repo-card.js

# 5. Image saved to: public/images/repo-card.png
```

**Note:** If you're using Node.js 16, see the compatibility note in `scripts/capture-repo-card.js`.

### Option 2: Manual Screenshot

```bash
# 1. Start dev server
npm run dev

# 2. Visit http://localhost:3000/repo-card-preview

# 3. Open browser DevTools (F12)
# 4. Toggle device toolbar (Ctrl+Shift+M)
# 5. Set dimensions to 1200x630
# 6. Take screenshot (or use browser screenshot tool)
```

### Option 3: Browser Extensions

Install any screenshot extension that allows custom dimensions:
- **Awesome Screenshot** (Chrome/Firefox)
- **Fireshot** (Chrome/Firefox)
- Set to capture 1200x630px area

## Setting as GitHub Social Preview

Once you have the image:

1. Go to your GitHub repo
2. Click **Settings** → **General**
3. Scroll to **Social Preview**
4. Click **Edit** → **Upload an image**
5. Select `public/images/repo-card.png`
6. Save!

Now when you share your repo on:
- Twitter/X
- LinkedIn
- Discord
- Slack
- Facebook

It will show your custom card! 🎉

## Easter Egg: Credits Page

We also created a fun credits page showcasing the design and migration story.

**Visit the [credits page](http://localhost:3000/credits)** to see:
- Migration timeline (Vite → Next.js)
- Live embed of the repo card
- Tech stack stats
- Easter egg code snippet
- Animated gradients

You can link to this from your main site as a fun developer detail!

## Preview the Design

- [Live preview page](http://localhost:3000/repo-card-preview)
- [Credits page](http://localhost:3000/credits)

## Customization

To modify the card, edit:
- **Design:** `pages/repo-card-preview.tsx`
- **Content:** Change text in the terminal section
- **Colors:** Adjust the GitHub theme colors

## The TreeNode Pun 🌲

The background code features binary tree data structures (`TreeNode`, `inorderTraversal`, etc.) - a perfect metaphor for a tree care business. Computer science trees meet real trees!

```typescript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;  // Left branch
    this.right = null; // Right branch
  }
}
```

---

**Created with:** Next.js, TypeScript, Tailwind CSS, and a lot of ❤️
