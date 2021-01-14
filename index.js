#!/usr/bin/env node

"use strict";
const generator = require("./critical");
const url = process.env.URL;
const dimensions = process.env.DIMENSIONS || "1300x900";
const location = process.env.LOCATION || "/var/app/output/critical.css";

generator
  .generateCritical(url, dimensions, location)
  .then((css) => {})
  .catch((err) => {
    // console.error(err);
    console.error(err.name);
    console.error(err.message);
  });
