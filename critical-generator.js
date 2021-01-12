"use strict";

const critical = require("critical");

const generateCritical = async (url) => {
  console.log("generating critical css for", url);
  const { css, html, uncritical } = await critical.generate({
    strict: false,
    rebase: false,
    minify: false,
    base: "dist",
    src: url,
    penthouse: {
      timeout: 40000,
      pageLoadSkipTimeout: 30000,
    },
    dimensions: [
      {
        // these can also be taken from env
        height: 375,
        width: 812,
      },
      {
        height: 768,
        width: 1024,
      },
      {
        height: 1280,
        width: 800,
      },
      {
        height: 1980,
        width: 1280,
      },
    ],
  });

  console.log(`done!`);
  return css;
};

module.exports = {
  generateCritical,
};
