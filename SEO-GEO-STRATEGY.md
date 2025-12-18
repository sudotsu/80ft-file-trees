# SEO/GEO Strategy for Omaha Tree Care

**Last Updated:** 2025-12-08
**Domain:** https://omahatreecare.com
**Primary Focus:** Local SEO for Omaha metro tree care services

---

## Table of Contents

1. [Current Implementation](#current-implementation)
2. [Priority Action Items](#priority-action-items)
3. [Keyword Strategy](#keyword-strategy)
4. [Geographic Targeting](#geographic-targeting)
5. [Structured Data & Schema](#structured-data--schema)
6. [Meta Tags & Social](#meta-tags--social)
7. [Recent Updates](#recent-updates)
8. [Long-Term Roadmap](#long-term-roadmap)

---

## Current Implementation

### Technical SEO ✅

- **Sitemap:** Auto-generated via `vite-plugin-sitemap` (46 URLs total)
- **Robots.txt:** Auto-generated, properly configured
- **Canonical URLs:** 100% dynamic using `CONTACT.siteUrl` constant
- **Meta Robots:** `index, follow` on all public pages
- **Analytics:** Vercel Analytics + Google Tag Manager (GTM-KX63X3X4)
- **SSG:** vite-react-ssg for pre-rendered HTML (fast FCP)

### Content Architecture ✅

**Main Pages:**
- Homepage: Winter storm prep focus + diagnostic tools CTA + trust signals
- Tools Page: Interactive risk assessment + cost estimator (SoftwareApplication schema)
- Emergency Tree Service: High-risk conversion page
- Tree Consultation: Moderate-risk conversion page

**Location Pages:** 28 neighborhood-specific pages across 8 cities:
- Omaha (multiple neighborhoods)
- Millard, Elkhorn, Gretna, Papillion, Ralston, Bellevue, Bennington

**Service Pages:** 4 service template pages:
- Tree Removal, Tree Trimming, Tree Health Assessment, Winter Tree Prep

**Internal Linking:**
- ServiceAreas component links to all location pages
- Each neighborhood page links to 4 service pages
- Service pages link back to locations (bidirectional)
- **Total internal links:** 100+

### Structured Data ✅

**Implemented Schemas:**

1. **LocalBusiness Schema** (HomePage.jsx) - **FULLY DYNAMIC**:
   - Uses `CONTACT.*` constants for ALL values (zero hardcoding)
   - Real street address: `5634 Corby St # 1`
   - Geo-coordinates: `41.28431, -96.00133`
   - 8 cities in areaServed (Omaha, Gretna, Millard, Elkhorn, Papillion, Bellevue, Bennington, Ralston)
   - `hasOfferCatalog` with 5 structured Service offerings
   - Social profiles: midwestroots.info, Facebook, LinkedIn, Google Maps

2. **LocalBusiness Schema** (LocationTemplate.jsx) - Per neighborhood:
   - Neighborhood-specific geo-coordinates from `neighborhoodData.json`
   - areaServed with Place type and coordinates
   - hasMap property linking to Google Maps
   - Opening hours, contact info

3. **BreadcrumbList Schema** - On location and service pages:
   - Hierarchical navigation schema
   - Enables breadcrumb rich snippets

4. **Service Schema** (ServiceTemplate.jsx):
   - Provider info with LocalBusiness nested
   - Service description and URL
   - BreadcrumbList for navigation

5. **SoftwareApplication Schema** (ToolsPage.jsx):
   - Free diagnostic tool markup
   - Author credits main business

6. **FAQPage Schema** (index.html):
   - 6 high-value questions
   - Targets "People Also Ask" boxes
   - Optimized for featured snippets

7. **HowTo Schema** (index.html):
   - Step-by-step tree assessment guide
   - Links to tools page

### Social Media & OpenGraph ✅

**All pages include:**
- OpenGraph: title, description, url, image, site_name
- Twitter Cards: card type, title, description, image
- City-specific social images (e.g., `/images/Omaha-Nebraska.webp`)

---

## Priority Action Items

### 🔴 CRITICAL - This Week

#### 1. Google Business Profile Setup (HIGHEST ROI)
**Impact:** 50%+ of local search visibility

**Strategy:** Hybrid Migration Approach
- **Phase 1 (Now-Month 3):**
  - Keep midwestroots.info as primary GBP website
  - Add omahatreecare.com as secondary URL
  - Build citation consistency for omahatreecare.com on new listings

- **Phase 2 (Month 4-6):**
  - Update GBP primary URL to omahatreecare.com
  - Update top 10 citations (Yelp, HomeAdvisor, Angie's List)

- **Phase 3 (Month 6+):**
  - 301 redirect midwestroots.info → omahatreecare.com
  - Full consolidation

**Action Items:**
- Claim/verify GBP listing
- Upload logo and 5-10 service photos
- Add all 8 service area cities
- Set up Google Posts schedule
- Enable messaging and booking

#### 2. Google Search Console Verification
**Impact:** Essential for indexing monitoring

- Verify domain ownership
- Submit sitemap: `https://omahatreecare.com/sitemap.xml`
- Monitor Core Web Vitals
- Check for manual actions
- Review indexing coverage

#### 3. Fix Missing `prioritizeSeoTags` on Emergency/Consultation Pages
**Files:**
- `src/pages/EmergencyTreeService.jsx:43`
- `src/pages/TreeConsultation.jsx:42`

**Fix:**
```jsx
<Head prioritizeSeoTags>  // Add this
```

#### 4. Fix Hardcoded Phone Numbers
**Files:**
- `src/pages/EmergencyTreeService.jsx:104`
- `src/pages/TreeConsultation.jsx:103`

**Fix:**
```jsx
// ❌ Current
href="tel:4028123294"

// ✅ Fix
href={`tel:${CONTACT.phoneRaw}`}
```

---

### 🟡 HIGH PRIORITY - This Month

#### 5. Create City Hub Pages
**Impact:** HIGH - Internal linking, keyword coverage

**Missing Pages:**
- `/locations/omaha` (hub for 19 Omaha neighborhoods)
- `/locations/millard` (hub for Millard neighborhoods)
- `/locations/elkhorn` (hub for Elkhorn neighborhoods)
- `/locations/gretna` (hub for Gretna neighborhoods)
- `/locations/papillion` (hub for Papillion neighborhoods)
- `/locations/ralston`
- `/locations/bellevue`
- `/locations/bennington`

**Each hub should:**
- List all child neighborhoods
- Include city-level SEO content
- Link to service pages
- Have LocalBusiness schema with city-level areaServed

#### 6. Add Service → Location Internal Linking
**Impact:** HIGH - PageRank flow, user navigation

**Implementation:**
- Add "Service Areas" section to `ServiceTemplate.jsx`
- Link to top 5-8 high-value neighborhoods:
  - Dundee, Millard, Elkhorn, West Omaha, Aksarben, Papillion, Bellevue, Gretna

#### 7. Add Service Schema to Emergency/Consultation Pages
**Impact:** MEDIUM - Rich results eligibility

**Pattern from ServiceTemplate.jsx:**
```javascript
{
  "@type": "Service",
  "serviceType": "Emergency Tree Removal",
  "provider": {
    "@type": "LocalBusiness",
    "name": CONTACT.businessName,
    // ...
  }
}
```

#### 8. Verify All Neighborhood Geo Coordinates
**Impact:** MEDIUM - Maps accuracy

**Action:** Audit `src/data/neighborhoodData.json`
- Ensure all 28 neighborhoods have accurate lat/lng
- Verify coordinates match actual neighborhood centers
- Use Google Maps to get precise coordinates

---

### 🟢 MEDIUM PRIORITY - Next 2-3 Months

#### 9. Add Review Schema Markup
**Impact:** MEDIUM - Star ratings in SERPs

**Prerequisites:**
- Get 5+ Google reviews first
- Calculate average rating

**Implementation:**
```javascript
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "23"
}
```

#### 10. Build Local Citations
**Impact:** MEDIUM - NAP consistency, authority

**Platform Priority:**
1. Yelp (FREE)
2. Angie's List / Angi (PAID but high ROI)
3. HomeAdvisor (PAID - lead gen)
4. Thumbtack (PAID - lead gen)
5. Better Business Bureau (PAID)
6. Yellow Pages
7. Chamber of Commerce

**NAP to Use:**
- Name: Midwest Roots Tree Services
- Address: 5634 Corby St # 1, Omaha, NE 68104-4128
- Phone: (402) 812-3294
- **Website: omahatreecare.com** (NOT midwestroots.info)

#### 11. Add Twitter Card to HomePage
**Impact:** LOW-MEDIUM

**Missing:**
```jsx
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image:alt" content="Professional tree care services in Omaha" />
```

#### 12. Email Consistency Review
**Current:** `andrew@midwestroots.info`
**Consider:** `andrew@omahatreecare.com`

**Trade-offs:**
- ✅ Better brand consistency with new domain
- ❌ Requires email migration
- ❌ May lose email history

**Decision:** Recommend keeping current email for now, consider switch in Phase 3 of GBP migration

---

### 🔵 LONG-TERM - 3-6 Months

#### 13. Seasonal Content Strategy
**Impact:** HIGH for traffic

**Content Ideas:**

**Winter (Nov-Feb):**
- "Omaha Winter Storm Tree Prep Checklist"
- "Ice Load Calculator for Nebraska Trees"
- "When to Remove vs. Brace Ice-Damaged Trees"

**Spring (Mar-May):**
- "EAB Treatment Decision Guide for Omaha"
- "Best Time to Plant Trees in Nebraska"
- "Spring Storm Damage Assessment"

**Summer (Jun-Aug):**
- "Drought Stress in Omaha Trees"
- "Summer Pruning Best Practices"

**Fall (Sep-Oct):**
- "Fall Tree Health Assessment Checklist"
- "Preparing Trees for Winter"

#### 14. Add FAQ Schema to Location Pages
**Impact:** MEDIUM

**Example:**
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What tree species are common in Dundee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dundee features mature American Elms, Silver Maples, and Oak trees..."
      }
    }
  ]
}
```

#### 15. Implement Breadcrumb UI Component
**Impact:** LOW (schema already exists)

**Action:**
- Create `<Breadcrumb>` component
- Add to LocationTemplate and ServiceTemplate
- Style to match site design

#### 16. Image Optimization
**Impact:** MEDIUM - Page speed

**Current Issues:**
- Missing explicit width/height attributes
- No loading="lazy" on below-fold images
- No responsive srcset

**Fix:**
```jsx
<img
  src="/images/Omaha-Nebraska.webp"
  alt="Tree service in Omaha, Nebraska"
  width="1200"
  height="630"
  loading="lazy"
  srcset="/images/Omaha-Nebraska-400.webp 400w,
          /images/Omaha-Nebraska-800.webp 800w,
          /images/Omaha-Nebraska-1200.webp 1200w"
/>
```

#### 17. Code Splitting for Performance
**Current:** Single bundle
**Recommended:** Route-based code splitting

**Impact:** Faster First Contentful Paint (FCP)

---

## Keyword Strategy

### Primary Keywords (High Volume, High Intent)

| Keyword | Monthly Volume | Difficulty | Current Targeting |
|---------|---------------|------------|-------------------|
| omaha tree service | 720 | Medium | ✅ Homepage, Locations |
| tree removal omaha | 590 | Medium | ✅ Service page |
| omaha tree care | 390 | Low | ✅ Title tags, H1s |
| tree service omaha ne | 210 | Low | ✅ Meta, locations |
| emergency tree service omaha | 70 | Low | ✅ Dedicated page |
| tree consultation omaha | 40 | Low | ✅ Dedicated page |

### Geographic Long-Tail Keywords

| Keyword Pattern | Example | Pages |
|----------------|---------|-------|
| tree service [neighborhood] omaha | tree service dundee omaha | 28 |
| [city] tree removal | bellevue tree removal | 8 |
| tree care [city] ne | tree care papillion ne | 8 |

**Total targeting:** 50+ unique long-tail combinations

---

## Geographic Targeting

### Service Area Coverage

**8 Cities, 28 Neighborhoods:**

**Omaha & Annexed Areas:**
- Core Omaha neighborhoods (Dundee, Benson, Midtown, etc.)
- Millard (annexed, 4 neighborhoods)
- Elkhorn (annexed, 4 neighborhoods)

**Independent Cities:**
- Gretna (3 neighborhoods)
- Papillion (2 neighborhoods)
- Ralston (1 neighborhood)
- Bellevue (1 neighborhood)
- Bennington (1 neighborhood)

### Geo-Targeting Implementation ✅

- ✅ Precise lat/lng coordinates for all 28 neighborhoods (from `neighborhoodData.json`)
- ✅ City-specific landing pages
- ✅ LocalBusiness schema per neighborhood with geo coordinates
- ✅ Google Maps integration via hasMap property
- ✅ City-specific social sharing images
- ⚠️ Missing: City hub pages (only neighborhoods exist)

---

## Structured Data & Schema

### Schema Inventory

| Schema Type | Location | Status | Notes |
|------------|----------|--------|-------|
| LocalBusiness | HomePage.jsx | ✅ Complete | 100% dynamic, uses CONTACT.* |
| LocalBusiness | LocationTemplate.jsx | ✅ Complete | Per neighborhood, dynamic geo |
| BreadcrumbList | LocationTemplate.jsx | ✅ Complete | 3-level hierarchy |
| BreadcrumbList | ServiceTemplate.jsx | ✅ Complete | 3-level hierarchy |
| Service | ServiceTemplate.jsx | ✅ Complete | 4 service pages |
| Service | EmergencyTreeService.jsx | ❌ Missing | TODO |
| Service | TreeConsultation.jsx | ❌ Missing | TODO |
| SoftwareApplication | ToolsPage.jsx | ✅ Complete | Diagnostic tool |
| FAQPage | index.html | ✅ Complete | 6 questions |
| HowTo | index.html | ✅ Complete | 3-step guide |
| AggregateRating | None | ❌ Missing | Need reviews first |

### Centralized NAP Data

**All schema now uses `CONTACT` constant from `src/constants.js`:**

```javascript
export const CONTACT = {
  phone: '(402) 812-3294',
  phoneRaw: '+14028123294',
  email: 'andrew@midwestroots.info',
  businessName: 'Midwest Roots Tree Services',
  siteUrl: 'https://omahatreecare.com',

  // Address
  streetAddress: '5634 Corby St # 1',
  addressLocality: 'Omaha',
  addressRegion: 'NE',
  postalCode: '68104-4128',
  addressCountry: 'US',

  // Geo (MUST BE NUMBERS, not strings)
  latitude: 41.28431,
  longitude: -96.00133,

  // Social
  socialProfiles: [
    'https://midwestroots.info',
    'https://facebook.com/midwestrootsomaha',
    'https://www.linkedin.com/company/midwestrootsomaha/',
    'https://maps.google.com/?cid=2577349893469380478'
  ]
}
```

**Impact:**
- ✅ Change business info ONCE → updates EVERYWHERE
- ✅ Zero hardcoded values in schema
- ✅ Type-safe with constants
- ✅ Consistent NAP across all pages

---

## Meta Tags & Social

### Standard Pattern (All Pages)

```jsx
<Head prioritizeSeoTags>
  <title>{dynamic title with location/service}</title>
  <meta name="description" content="{unique per page}" />
  <link rel="canonical" href={`${CONTACT.siteUrl}/page-path`} />

  {/* OpenGraph */}
  <meta property="og:title" content="{page title}" />
  <meta property="og:description" content="{page description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={socialImage} />
  <meta property="og:site_name" content={CONTACT.businessName} />

  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{page title}" />
  <meta name="twitter:description" content="{page description}" />
  <meta name="twitter:image" content={socialImage} />
</Head>
```

### Canonical URL Best Practice

**✅ ALWAYS use CONTACT constant:**
```jsx
import { CONTACT } from '../constants';
<link rel="canonical" href={`${CONTACT.siteUrl}/page-path`} />
```

**❌ NEVER hardcode:**
```jsx
<link rel="canonical" href="https://omahatreecare.com/page-path" />
```

---

## Recent Updates

### December 8, 2024 - Schema Consolidation

**✅ Completed:**
1. **Removed duplicate LocalBusiness schema from index.html**
   - Was causing NAP conflicts
   - Had hardcoded values (not maintainable)

2. **Upgraded HomePage.jsx LocalBusiness schema**
   - Now 100% dynamic using CONTACT constants
   - Added real street address
   - Expanded areaServed from 3 to 8 cities
   - Fixed Facebook URL
   - Added proper `hasOfferCatalog` with 5 services
   - Replaced invalid `serviceType` array

3. **Centralized ALL business data in constants.js**
   - Added address fields (street, city, state, zip)
   - Added geo coordinates
   - Added socialProfiles array
   - Single source of truth for NAP

4. **Kept valuable schemas in index.html**
   - FAQPage (6 questions)
   - HowTo (3-step guide)

**Files Modified:**
- `index.html` - Removed LocalBusiness (86 lines)
- `src/pages/HomePage.jsx` - Upgraded LocalBusiness schema
- `src/constants.js` - Added address, geo, social data

### December 7, 2024 - Canonical URL Fixes

**✅ Completed:**
1. Fixed hardcoded canonical URLs on EmergencyTreeService and TreeConsultation
2. Now using `CONTACT.siteUrl` constant for all canonical URLs
3. Updated documentation with canonical URL best practices

**Files Modified:**
- `src/pages/EmergencyTreeService.jsx`
- `src/pages/TreeConsultation.jsx`
- `LOCATION-PAGE-STRATEGY.md`

### Previous Updates (December 2024)

**Location Pages:**
- ✅ Added geo-coordinates to all 28 neighborhoods (from neighborhoodData.json)
- ✅ Implemented BreadcrumbList schema
- ✅ Added OpenGraph and Twitter Card meta tags
- ✅ Created service linking section (4 services per neighborhood)
- ✅ Dynamic social images per city

**SEO Bug Fixes:**
- ✅ Fixed SSG title tag rendering on Emergency/Consultation pages
- ✅ Removed duplicate content
- ✅ Added vite-react-ssg Head component

---

## Long-Term Roadmap

### Quarter 1 (Jan-Mar 2025)
- ✅ Complete critical SEO infrastructure (GBP, GSC)
- ✅ Fix all code-level SEO issues
- ✅ Create city hub pages
- ⏳ Get 10+ Google reviews
- ⏳ Build 10 local citations

### Quarter 2 (Apr-Jun 2025)
- ⏳ Publish 8-12 seasonal blog posts
- ⏳ Expand to 50+ neighborhood pages (if demand)
- ⏳ Add review schema markup
- ⏳ Launch video content strategy
- ⏳ Begin GBP migration (Phase 2)

### Quarter 3 (Jul-Sep 2025)
- ⏳ Achieve top 3 rankings for 10+ primary keywords
- ⏳ Generate 50+ organic leads/month
- ⏳ Complete GBP migration
- ⏳ Build advanced link acquisition

### Quarter 4 (Oct-Dec 2025)
- ⏳ 301 redirect midwestroots.info → omahatreecare.com
- ⏳ Full brand consolidation
- ⏳ Dominate Omaha tree service local pack

---

## KPIs to Track

### Monthly Metrics
- Organic search traffic (Google Analytics)
- GBP impressions/clicks/calls
- Keyword rankings (top 20 positions)
- Google reviews count and average
- Tool completions
- Phone call conversions

### Quarterly Goals

**Q1 2025:**
- GBP views: 500+/month
- Organic traffic: 1,000+/month
- Top 10 rankings: 5+ keywords
- Google reviews: 10+

**Q2 2025:**
- GBP views: 1,000+/month
- Organic traffic: 2,000+/month
- Top 3 rankings: 3+ keywords
- Tool completions: 50+/month

**Q4 2025:**
- GBP views: 2,000+/month
- Organic traffic: 5,000+/month
- Top 3 rankings: 10+ keywords
- Leads: 100+/month

---

## Resources

### SEO Tools in Use
- ✅ Google Tag Manager (GTM-KX63X3X4)
- ✅ Vercel Analytics
- ✅ vite-react-ssg (SSG)
- ✅ vite-plugin-sitemap (auto-generation)

### Pending Setup
- ❌ Google Search Console
- ❌ Google Analytics 4
- ❌ Google Business Profile

### Schema.org Validators
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

---

## Contact

**Business:** Midwest Roots Tree Services
**Phone:** (402) 812-3294
**Email:** andrew@midwestroots.info
**Website:** https://omahatreecare.com
**Address:** 5634 Corby St # 1, Omaha, NE 68104-4128

---

**Document Owner:** Midwest Roots Tree Services
**Last Review:** 2025-12-08
**Next Review:** 2026-01-08
