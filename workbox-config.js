module.exports = {
  globDirectory: "./dist/",
  globPatterns: ["**/*.{html,js}"],
  swDest: "./dist/sw.js",
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp("https://api-ratp.pierre-grimaud.fr"),
      handler: "StaleWhileRevalidate",
    },
  ],
};
