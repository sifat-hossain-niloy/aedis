/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.aedis.ltd",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
