#!/usr/bin/env node

"use strict";
const generator = require("./critical");
const url = process.env.URL;

generator
  .generateCritical(url)
  .then((css) => {
    console.log(css);
  })
  .catch((err) => {
    // console.error(err);
    console.error(err.name);
    console.error(err.message);
  });
