const express = require("express"),
  app = express(),
  dist = "dist";

const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;

app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));
app.use(express.static(dist));
app.use(express.static("node_modules"));
app.get("/procedimiento", (request, response) => {
  response.sendFile(`${__dirname}/Taller 1.pdf`);
});
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
