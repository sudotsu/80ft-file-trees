# Omaha Tree Care

A professional tree care platform for Omaha homeowners, featuring diagnostic tools, location-specific pages, and service information. Built with Next.js for optimal SEO and performance.

## Live Site

**Production URL:** https://omahatreecare.com

## What This Is

A comprehensive tree care platform that helps Omaha homeowners:
- Assess tree hazards using ISA (International Society of Arboriculture) standards
- Identify tree species and care needs
- Diagnose common tree problems, pests, and diseases
- Understand DIY vs. professional tree care
- Get cost estimates for tree services in Omaha
- Find local tree services by neighborhood

## Technology Stack

- **Framework:** Next.js 14 (Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Analytics:** Vercel Analytics + Speed Insights
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel

## Architecture

### Next.js Pages Router

This site uses Next.js with the Pages Router for:
- **Static Generation:** All pages pre-rendered at build time
- **Dynamic Routes:** Location and service pages generated from JSON data
- **API Routes:** `/sitemap.xml` and `/robots.txt` dynamically generated
- **Benefits:**
  - Perfect SEO (fully crawlable HTML)
  - Fast page loads
  - Optimal Core Web Vitals

### Key Directories

```
├── pages/                      # Next.js pages
│   ├── index.tsx              # Homepage
│   ├── tools.tsx              # Diagnostic tools
│   ├── services/
│   │   ├── index.tsx          # Services directory
│   │   └── [slug].tsx         # Dynamic service pages
│   ├── locations/
│   │   ├── index.tsx          # Locations directory
│   │   ├── [city].tsx         # City hub pages
│   │   └── [city]/[neighborhood].tsx  # Neighborhood pages
│   └── _app.tsx               # App wrapper
├── components/                 # React components
├── src/data/                  # JSON data files
│   ├── services.json          # Service definitions
│   ├── locations.json         # Location structure
│   └── neighborhoodData.json  # Neighborhood content
├── public/                    # Static assets
│   └── images/                # Image files
└── styles/                    # Global styles
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

**Prerequisites:**
- **Node.js 18.17+** (download from https://nodejs.org)
- npm 9+ (comes with Node.js)

```bash
# Check your versions
node --version  # Should be 18.17.0 or higher
npm --version   # Should be 9.0.0 or higher
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build with all static pages pre-rendered.

### 4. Start Production Server

```bash
npm start
```

## npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production + validate sitemap |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run validate:sitemap` | Validate sitemap routes |

## Available Tools

### 1. Species Identifier
Helps homeowners identify tree species and learn care requirements specific to Omaha's climate.

### 2. Hazard Assessment
Uses ISA arborist standards to calculate tree risk based on:
- Root & trunk condition
- Branch structure
- Tree health
- Target assessment (proximity to structures)

**Risk Levels:** Low, Moderate, High, Extreme (scored 1-16)

### 3. Common Problems
Diagnoses tree ailments including:
- Diseases (Oak Wilt, Dutch Elm Disease, etc.)
- Pests (Emerald Ash Borer, bagworms, etc.)
- Environmental stress
- Nutrient deficiencies

### 4. DIY vs Professional
Helps homeowners decide what they can safely do themselves vs. when to call a professional arborist.

### 5. Cost Estimator
Provides realistic price ranges for:
- Tree removal
- Pruning/trimming
- Stump grinding
- Emergency services
- Treatment programs

## Location Pages

The site includes **42 location-specific pages**:
- 8 city hub pages (Omaha, Millard, Elkhorn, Gretna, Papillion, Ralston, Bellevue, Bennington)
- 33 neighborhood pages across the metro area
- Each with unique content, geo-coordinates, and local tree information

## Service Pages

4 main service pages:
- Tree Removal
- Tree Trimming
- Tree Health Assessment
- Winter Tree Prep

Plus 2 conversion pages:
- Emergency Tree Service
- Tree Consultation

## Features

### SEO Optimization
- All pages statically generated at build time
- Comprehensive meta tags and OpenGraph data
- Structured data (LocalBusiness, Service, BreadcrumbList schemas)
- Omaha-specific keywords and content
- 42 URLs in sitemap
- Dynamic robots.txt

### Performance
- All pages pre-rendered
- Optimized images with next/image (where applicable)
- Code splitting per route
- Tailwind CSS (purged in production)

**Lighthouse Scores:**
- Performance: 45-95 (varies by page)
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Analytics
- Vercel Analytics for page views
- Vercel Speed Insights for performance monitoring
- Google Tag Manager integration

## Data Files

Content is managed in JSON files for easy updates:

### `src/data/services.json`
Defines all service types with:
- Title, description
- Benefits
- Meta descriptions
- Pricing information

### `src/data/locations.json`
Defines the location hierarchy:
- Cities
- Neighborhoods per city

### `src/data/neighborhoodData.json`
Detailed content for each neighborhood:
- Description and vibe
- Common tree species
- Local tree issues
- Geo coordinates
- Meta descriptions

## Development

### Adding a New Service

1. Add to `src/data/services.json`
2. Page will be auto-generated at `/services/[slug]`
3. Rebuild to generate static page

### Adding a New Location

1. Add city/neighborhood to `src/data/locations.json`
2. Add content to `src/data/neighborhoodData.json`
3. Page will be auto-generated at `/locations/[city]/[neighborhood]`
4. Rebuild to generate static page

### Styling

- Uses Tailwind CSS utility classes
- Global styles in `styles/globals.css`
- Dark mode ready (uses system preference)
- Mobile-first responsive design

## Deployment

### Deploying to Vercel

**Option 1: GitHub Integration (Recommended)**
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Vercel auto-detects Next.js configuration
4. Automatic deployments on push

**Option 2: Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Custom Domain

Already configured for `omahatreecare.com` via Vercel DNS.

## Configuration

### Environment Variables

No environment variables required for basic functionality. Optional:
- Analytics IDs (configured in code)
- EmailJS credentials (if adding contact forms)

### Next.js Config (`next.config.js`)

- Output: standalone
- Security headers
- Redirects (e.g., /home → /)
- Route generation logic

## SEO

### Structured Data

Every page includes appropriate schema:
- LocalBusiness (with geo-coordinates)
- Service
- BreadcrumbList
- FAQPage (homepage)
- HowTo (homepage)

### Meta Tags

All pages have:
- Unique title and description
- Canonical URLs
- OpenGraph tags
- Twitter Card tags

### Sitemap

- Auto-generated during build
- Available at `/sitemap.xml`
- 42 URLs indexed
- Updated automatically when routes change

## Contact & Support

**Business:** Midwest Roots Tree Services
**Phone:** (402) 812-3294
**Email:** andrew@midwestroots.info
**Website:** https://midwestroots.info
**Address:** 5634 Corby St # 1, Omaha, NE 68104-4128

## Documentation

- **IMAGE-OPTIMIZATION-GUIDE.md** - How to optimize images
- **EMAILJS-SETUP.md** - Adding contact forms (optional)
- **SEO-GEO-STRATEGY.md** - SEO strategy and roadmap
- **public/images/README.md** - Image folder guidelines
- **public/tools/DOCUMENTATION.md** - Detailed tool documentation

## License

Proprietary - Midwest Roots Tree Services © 2024
