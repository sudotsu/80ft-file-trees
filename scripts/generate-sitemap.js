import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Setup File Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCATIONS_DATA_PATH = path.join(__dirname, '../src/data/locations.json');
const SERVICES_DATA_PATH = path.join(__dirname, '../src/data/services.json'); // <--- NEW: Services Path
const PUBLIC_SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const BASE_URL = 'https://omahatreecare.com';

console.log('📖 Reading location data from:', LOCATIONS_DATA_PATH);

try {
  // 2. Read the Data
  const locationsData = JSON.parse(fs.readFileSync(LOCATIONS_DATA_PATH, 'utf-8'));
  const servicesData = JSON.parse(fs.readFileSync(SERVICES_DATA_PATH, 'utf-8')); // <--- NEW: Read services data

  // 3. Define Static Pages (The main menu items)
  const staticPages = [
    '',
    '/tools',
    '/emergency-tree-service-omaha',
    '/tree-consultation-omaha'
  ];

  // 4. Start Building XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Helper to append URL blocks
  const addUrl = (urlPath, priority = '0.8', freq = 'weekly') => {
    const date = new Date().toISOString().split('T')[0];
    xml += `
  <url>
    <loc>${BASE_URL}${urlPath}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  };

  // 5. Add Static Pages
  staticPages.forEach(page => addUrl(page, '1.0'));

  // 6. Add Location Pages
  console.log('🌍 Processing location pages...');
  let locationCount = 0;
  Object.keys(locationsData).forEach(city => {
    // Add City Hub (e.g., /locations/omaha)
    addUrl(`/locations/${city}`, '0.9');
    locationCount++;

    // Add Neighborhoods (e.g., /locations/omaha/dundee)
    const neighborhoods = locationsData[city];
    neighborhoods.forEach(hood => {
      addUrl(`/locations/${city}/${hood}`, '0.8');
      locationCount++;
    });
  });

  // 7. NEW: Add Service Pages
  console.log('🎯 Processing service pages...');
  let serviceCount = 0;
  Object.keys(servicesData).forEach(serviceId => {
    // Path structure matches the new route: /services/tree-removal
    addUrl(`/services/${serviceId}`, '0.9', 'monthly');
    serviceCount++;
  });


  // 8. Close and Write File
  xml += `
</urlset>`;

  fs.writeFileSync(PUBLIC_SITEMAP_PATH, xml);
  const totalPages = staticPages.length + locationCount + serviceCount;
  console.log(`\n✅ Success! Generated sitemap with ${totalPages} URLs.`);
  console.log(`📍 Saved to: ${PUBLIC_SITEMAP_PATH}`);

} catch (error) {
  console.error('\n❌ Error generating sitemap:', error.message);
  console.error('Check that src/data/locations.json and src/data/services.json exist and are valid JSON.');
}

// Final action items remain the same: run the script, commit the changes, and push.