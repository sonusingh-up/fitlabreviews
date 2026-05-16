/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://fitlabreviews.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/contact'],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/'] },
    ],
    additionalSitemaps: [],
  },

  // Custom priority per route type
  transform: async (config, path) => {
    // Homepage
    if (path === '/') return { loc: path, changefreq: 'daily',  priority: 1.0, lastmod: new Date().toISOString() }
    // Review pages — highest SEO value
    // Review pages + hub
    if (path === '/reviews')                 return { loc: path, changefreq: 'weekly',  priority: 0.95, lastmod: new Date().toISOString() }
    if (path.startsWith('/reviews/'))        return { loc: path, changefreq: 'weekly',  priority: 0.9,  lastmod: new Date().toISOString() }
    // Best hub + category pages — highest intent
    if (path === '/best')                    return { loc: path, changefreq: 'weekly',  priority: 1.0,  lastmod: new Date().toISOString() }
    if (path.startsWith('/best/'))           return { loc: path, changefreq: 'weekly',  priority: 0.9,  lastmod: new Date().toISOString() }
    // Ingredients hub + pages
    if (path === '/ingredients')             return { loc: path, changefreq: 'weekly',  priority: 0.85, lastmod: new Date().toISOString() }
    if (path.startsWith('/ingredients/'))    return { loc: path, changefreq: 'weekly',  priority: 0.8,  lastmod: new Date().toISOString() }
    // Compare hub + pages
    if (path === '/compare')                 return { loc: path, changefreq: 'weekly',  priority: 0.85, lastmod: new Date().toISOString() }
    if (path.startsWith('/compare/'))        return { loc: path, changefreq: 'weekly',  priority: 0.8,  lastmod: new Date().toISOString() }
    // Content hubs
    if (['/stacks','/protocols','/research','/blog'].includes(path))
      return { loc: path, changefreq: 'weekly',  priority: 0.75, lastmod: new Date().toISOString() }
    // Trust pages
    if (['/about','/authors','/methodology','/scoring-rubric','/conflicts-policy'].includes(path))
      return { loc: path, changefreq: 'monthly', priority: 0.5,  lastmod: new Date().toISOString() }
    // Exclude old URLs from sitemap
    if (path.startsWith('/all-') || path.startsWith('/best-of'))
      return null

    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() }
  },
}
