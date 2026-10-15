import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { ARTICLES, HOMEPAGE_SEO } from '../src/data/articles';
import { ROUTE_ALIASES } from '../src/router';

const SITE_ORIGIN = 'https://bandra-bites-phi.vercel.app';
const DIST_DIR = path.resolve(process.cwd(), 'dist');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function prerender() {
  console.log('🚀 Starting Bandra Bites Static Site Generation (SSG)...');

  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template file not found at ${templatePath}. Ensure vite build runs first.`);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  // All 11 canonical routes
  const routes = [
    '/',
    ...ARTICLES.map((a) => a.route),
  ];

  for (const route of routes) {
    const isHomepage = route === '/';
    const article = ARTICLES.find((a) => a.route === route);

    const title = isHomepage
      ? HOMEPAGE_SEO.metaTitle
      : article
      ? article.seoBaseline.metaTitle
      : 'Bandra Bites: Best Cafés & Food in Bandra West Mumbai';

    const description = isHomepage
      ? HOMEPAGE_SEO.metaDescription
      : article
      ? article.seoBaseline.metaDescription
      : 'Curated café and food guide for Bandra West, Mumbai.';

    const keywords = isHomepage
      ? [HOMEPAGE_SEO.primaryKeyword, ...HOMEPAGE_SEO.secondaryKeywords]
      : article
      ? [article.seoBaseline.primaryKeyword, ...article.seoBaseline.secondaryKeywords]
      : [];

    const canonicalUrl = `${SITE_ORIGIN}${isHomepage ? '' : route}`;
    const ogImage = `${SITE_ORIGIN}${article ? article.heroImage : '/assets/images/hero_bandra_cafe_1791895097942.webp'}`;
    const ogType = isHomepage ? 'website' : 'article';

    const structuredData = isHomepage
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Bandra Bites',
          url: canonicalUrl,
          description: description,
          publisher: {
            '@type': 'Organization',
            name: 'Bandra Bites'
          }
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article!.headline,
          description: description,
          image: ogImage,
          datePublished: '2026-09-01T08:00:00+05:30',
          dateModified: '2026-10-15T12:00:00+05:30',
          author: {
            '@type': 'Organization',
            name: 'Bandra Bites Editorial Desk'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Bandra Bites',
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}/assets/images/hero_bandra_cafe_1791895097942.webp`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl
          }
        };

    // Render full React application HTML synchronously with target route
    const appHtml = renderToString(React.createElement(App as React.ComponentType<{ initialPath?: string }>, { initialPath: route }));

    let pageHtml = baseHtml;

    // Replace <title>
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

    // Replace or insert meta description
    if (pageHtml.includes('name="description"')) {
      pageHtml = pageHtml.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${escapeHtml(description)}"`);
    } else {
      pageHtml = pageHtml.replace('</head>', `  <meta name="description" content="${escapeHtml(description)}" />\n</head>`);
    }

    // Replace or insert canonical link
    if (pageHtml.includes('rel="canonical"')) {
      pageHtml = pageHtml.replace(/<link\s+rel="canonical"\s+href="[^"]*"/i, `<link rel="canonical" href="${canonicalUrl}"`);
    } else {
      pageHtml = pageHtml.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
    }

    // Replace or insert keywords
    if (pageHtml.includes('name="keywords"')) {
      pageHtml = pageHtml.replace(/<meta\s+name="keywords"\s+content="[^"]*"/i, `<meta name="keywords" content="${escapeHtml(keywords.join(', '))}"`);
    } else {
      pageHtml = pageHtml.replace('</head>', `  <meta name="keywords" content="${escapeHtml(keywords.join(', '))}" />\n</head>`);
    }

    // OpenGraph Tags
    const updateOrInsertMeta = (prop: string, val: string) => {
      const regex = new RegExp(`<meta\\s+property="${prop}"\\s+content="[^"]*"`, 'i');
      if (regex.test(pageHtml)) {
        pageHtml = pageHtml.replace(regex, `<meta property="${prop}" content="${escapeHtml(val)}"`);
      } else {
        pageHtml = pageHtml.replace('</head>', `  <meta property="${prop}" content="${escapeHtml(val)}" />\n</head>`);
      }
    };

    updateOrInsertMeta('og:title', title);
    updateOrInsertMeta('og:description', description);
    updateOrInsertMeta('og:url', canonicalUrl);
    updateOrInsertMeta('og:image', ogImage);
    updateOrInsertMeta('og:type', ogType);

    // Twitter Tags
    const updateOrInsertTwitter = (name: string, val: string) => {
      const regex = new RegExp(`<meta\\s+name="${name}"\\s+content="[^"]*"`, 'i');
      if (regex.test(pageHtml)) {
        pageHtml = pageHtml.replace(regex, `<meta name="${name}" content="${escapeHtml(val)}"`);
      } else {
        pageHtml = pageHtml.replace('</head>', `  <meta name="${name}" content="${escapeHtml(val)}" />\n</head>`);
      }
    };

    updateOrInsertTwitter('twitter:card', 'summary_large_image');
    updateOrInsertTwitter('twitter:title', title);
    updateOrInsertTwitter('twitter:description', description);
    updateOrInsertTwitter('twitter:image', ogImage);

    // Replace or insert structured data JSON-LD
    const jsonLdTag = `<script id="seo-jsonld" type="application/ld+json">\n${JSON.stringify(structuredData, null, 2)}\n    </script>`;
    if (pageHtml.includes('id="seo-jsonld"')) {
      pageHtml = pageHtml.replace(/<script\s+id="seo-jsonld"[^>]*>[\s\S]*?<\/script>/i, jsonLdTag);
    } else {
      pageHtml = pageHtml.replace('</head>', `  ${jsonLdTag}\n</head>`);
    }

    // Insert rendered App into <div id="root"></div>
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Output paths
    if (isHomepage) {
      fs.writeFileSync(path.join(DIST_DIR, 'index.html'), pageHtml, 'utf-8');
      console.log(` ✅ Rendered [Homepage]: / -> dist/index.html`);
    } else {
      const subDir = path.join(DIST_DIR, route.slice(1));
      fs.mkdirSync(subDir, { recursive: true });
      fs.writeFileSync(path.join(subDir, 'index.html'), pageHtml, 'utf-8');
      // Also write clean html file directly in dist for hosting servers supporting either convention
      fs.writeFileSync(path.join(DIST_DIR, `${route.slice(1)}.html`), pageHtml, 'utf-8');
      console.log(` ✅ Rendered [Article]: ${route} -> dist/${route.slice(1)}/index.html`);
    }
  }

  // Also prerender legacy route aliases so any historical link seamlessly works
  for (const [legacyRoute, targetRoute] of Object.entries(ROUTE_ALIASES)) {
    const targetDir = path.join(DIST_DIR, targetRoute.slice(1));
    const targetHtmlPath = path.join(targetDir, 'index.html');
    if (fs.existsSync(targetHtmlPath)) {
      const aliasContent = fs.readFileSync(targetHtmlPath, 'utf-8');
      const aliasDir = path.join(DIST_DIR, legacyRoute.slice(1));
      fs.mkdirSync(aliasDir, { recursive: true });
      fs.writeFileSync(path.join(aliasDir, 'index.html'), aliasContent, 'utf-8');
      fs.writeFileSync(path.join(DIST_DIR, `${legacyRoute.slice(1)}.html`), aliasContent, 'utf-8');
      console.log(` ↪️  Mapped [Alias]: ${legacyRoute} -> dist/${legacyRoute.slice(1)}/index.html`);
    }
  }

  // Generate sitemap.xml
  const sitemapUrls = routes.map((r) => {
    const loc = `${SITE_ORIGIN}${r === '/' ? '' : r}`;
    const priority = r === '/' ? '1.0' : '0.8';
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-10-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(` 🗺️  Generated sitemap.xml with 11 canonical routes`);

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;

  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'robots.txt'), robotsTxt, 'utf-8');
  console.log(` 🤖 Generated robots.txt`);

  console.log('🎉 SSG Prerendering Completed Successfully!');
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
