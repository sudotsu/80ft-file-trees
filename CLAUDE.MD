# CLAUDE.MD - AI Assistant Context Guide

## Project Overview

**Midwest Roots Winter Defense Site** is a high-conversion landing page for winter tree service campaigns in Omaha, Nebraska. This is a single-page React application designed to capture leads through a risk audit form and educate visitors about winter tree care services.

### Business Context
- **Target Audience**: Homeowners in Omaha and surrounding areas concerned about winter tree damage
- **Primary Goal**: Generate qualified leads through the "Free Risk Audit" form
- **Key Services**: Winter structural pruning, hazardous tree assessment, storm damage prevention
- **Contact**: andrew@midwestrootstreeservice.com

## Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 6.4.1
- **Styling**: Tailwind CSS 3.4.0
- **Icons**: Lucide React
- **Form Handling**: EmailJS (@emailjs/browser)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel
- **Domain**: omahatreecare.com (pending DNS setup)

## Project Structure

```
winter-defense/
├── src/
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles + Tailwind directives
│   └── components/
│       ├── About.jsx        # "Why Choose Us" section with story
│       ├── Footer.jsx       # Site footer with service areas
│       ├── Hero.jsx         # Landing section with CTA
│       ├── Navigation.jsx   # Top navigation bar
│       ├── RiskAuditForm.jsx # Lead capture form
│       ├── Services.jsx     # Service offerings grid
│       └── WhyUs.jsx        # Value propositions
├── public/
│   ├── images/              # Static images
│   └── tools/               # Tree care diagnostic tools (standalone HTML)
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind customization
└── vercel.json              # Vercel deployment config
```

## Key Files & Their Purposes

### `/src/App.jsx` (Lines 53-57)
Contains EmailJS configuration:
```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```
**IMPORTANT**: These are placeholder values. When EmailJS is set up, these need to be replaced with actual credentials.

### `/src/components/RiskAuditForm.jsx`
The primary lead generation form. Currently logs to console; integrates with EmailJS through App.jsx when credentials are configured.

### `/public/tools/index.html`
Standalone diagnostic tool page for tree care assessment. Independent from the main React app.

### Environment Variables
Uses `.env.example` as a template. No sensitive credentials should be committed to git.

## Development Workflow

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Create production build in dist/
npm run preview      # Preview production build locally
```

### Git Workflow
- **Main Branch**: `main` (for production-ready code)
- **Feature Branches**: Use `claude/` prefix followed by descriptive name and session ID
  - Example: `claude/update-claude-md-01Ghnb6o43VhDTkNzVGAMHv1`
- **Important**: Always push to designated feature branch, never directly to main
- **Push Command**: Use `git push -u origin <branch-name>` (branch must start with `claude/`)

### Deployment
- **Platform**: Vercel
- **Auto-Deploy**: Connected to GitHub repository
- **Production URL**: To be configured at omahatreecare.com
- **DNS**: WordPress.com domain registrar (requires CNAME or nameserver setup)

## Code Conventions

### Component Structure
- Functional components using React hooks
- Components are organized by feature/section
- Each component is self-contained in its own file
- Props are destructured in function parameters

### Styling
- Tailwind CSS utility classes for all styling
- No custom CSS except in `index.css` for base styles
- Responsive design: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Dark mode supported with `dark:` variants
- Color scheme: Emerald green (#10b981) primary, blue accents

### Naming
- Components: PascalCase (e.g., `RiskAuditForm.jsx`)
- Files: Match component name
- CSS classes: Tailwind utilities only

## Common Tasks

### Adding a New Section
1. Create component in `/src/components/SectionName.jsx`
2. Import and add to `/src/App.jsx` in appropriate order
3. Follow existing component patterns (e.g., Hero, Services)

### Updating Contact Information
Search and replace across all files:
- Phone: `(402) 555-0123` (placeholder, needs real number)
- Email: `andrew@midwestrootstreeservice.com`
- Service areas listed in Footer.jsx

### Replacing Images
1. Add images to `/public/images/`
2. Reference in components as `/images/filename.ext`
3. Key images to replace:
   - Hero background (Line ~185 in Hero.jsx)
   - Andrew's photo (Line ~310 in About.jsx)
4. See IMAGE-OPTIMIZATION-GUIDE.md for best practices

### Setting Up EmailJS
See EMAILJS-SETUP.md for complete instructions. Summary:
1. Create EmailJS account (free tier: 300 emails/month)
2. Set up email service and get Service ID
3. Create email template and get Template ID
4. Get Public Key from account settings
5. Update App.jsx lines 53-57 with actual values

## Performance & SEO

### Optimization Features
- Lazy-loaded images for faster initial load
- Minimal JavaScript bundle
- Tailwind CSS purged in production build
- Google Fonts preloaded
- Vercel Analytics for performance monitoring

### Expected Lighthouse Scores
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

### SEO Keywords (Already Implemented)
- "winter structural pruning"
- "Omaha tree care"
- "hazardous tree assessment"
- "storm damage prevention"

These are strategically placed in H1/H2 tags for local SEO optimization.

## Known Issues & Gotchas

### EmailJS Not Configured
- Form currently logs to console only
- Submissions won't be received until EmailJS is set up
- No error shown to users if credentials are invalid

### Placeholder Content
The following need to be replaced before going live:
- [ ] Phone number (currently fake: 402-555-0123)
- [ ] Hero background image
- [ ] Andrew's photo
- [ ] Blog article links (currently point to `#`)
- [ ] EmailJS credentials

### Domain Setup Pending
- Site will deploy to vercel.app subdomain initially
- Custom domain (omahatreecare.com) requires DNS configuration
- WordPress.com is the domain registrar

### Blog Section
Three blog article placeholders exist but link to `#`. Options:
1. Create actual blog posts (WordPress/Medium)
2. Link to main site's blog
3. Remove section entirely

## Security Considerations

- No authentication required (public landing page)
- EmailJS handles form submissions (no backend needed)
- No sensitive data stored client-side
- HTTPS enforced via Vercel
- Environment variables for any API keys (use `.env.example` template)

## Testing

No automated tests currently implemented. Manual testing checklist:
- [ ] Form submission works (after EmailJS setup)
- [ ] All internal links navigate correctly
- [ ] Mobile responsive on common devices
- [ ] Images load and are optimized
- [ ] Dark mode toggle works
- [ ] Accessibility: keyboard navigation, screen readers

## Additional Documentation

- **QUICK-START.md**: Getting started guide
- **DEPLOYMENT-CHECKLIST.md**: Pre-launch checklist
- **EMAILJS-SETUP.md**: Detailed EmailJS configuration
- **PROJECT-STRUCTURE.md**: Architecture overview
- **IMAGE-OPTIMIZATION-GUIDE.md**: Image best practices
- **README.md**: Comprehensive setup and deployment guide

## Tips for AI Assistants

When working on this project:

1. **Always read files before editing** - Don't assume structure
2. **Preserve existing patterns** - Match the established code style
3. **Mobile-first** - Test responsive behavior at all breakpoints
4. **Accessibility matters** - Maintain ARIA labels and semantic HTML
5. **Keep it simple** - This is a landing page, not a complex web app
6. **Check before committing** - Review DEPLOYMENT-CHECKLIST.md for gotchas
7. **Branch naming** - Always use `claude/` prefix with session ID
8. **Never push to main** - Always work on feature branches

## Questions or Issues?

- Check existing documentation files first
- Review commit history for context: `git log`
- Contact: andrew@midwestrootstreeservice.com
