// next.config.js
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
  // Tell Next.js to look in the `src` folder for pages
  srcDir: 'src',
}
