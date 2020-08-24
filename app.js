const express = require("express"),
  app = express(),
  dist = "dist";

app.use(express.static(dist));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/${dist}/index.html`);
});

app.get(
  "/node_modules/workbox-sw/build/importScripts/:version",
  (request, response) => {
    response.sendFile(
      `${__dirname}/node_modules/workbox-sw/build/importScripts/${request.params.version}`
    );
  }
);

module.exports = app;
