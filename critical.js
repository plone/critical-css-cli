"use strict";

const critical = require("critical");

const generateCritical = async (url, size, location) => {
  const dimensions = size.split(",").map((item) => {
    const val = item.trim().split("x");
    return {
      width: parseInt(val[0]),
      height: parseInt(val[1]),
    };
  });

  console.log("generating critical css for", url);
  const { css, html, uncritical } = await critical.generate({
    strict: false,
    rebase: false,
    minify: true,
    src: url,
    target: {
      css: __dirname + `${location}/critical.css`,
    },
    penthouse: {
      timeout: 40000,
      pageLoadSkipTimeout: 30000,
    },
    dimensions,
  });

  console.log(`Done. critical.css saved in ${location}/critical.css `);
  return css;
};

module.exports = {
  generateCritical,
};
