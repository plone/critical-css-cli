#!/usr/bin/env node

"use strict";

const express = require("express");
const generator = require("./critical-generator");

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/css", (req, res) => {
  console.log(`Critical css generation for ${url}`);
  generator
    .generateCritical(url)
    .then((css) => {
      res.setHeader("Content-Type", "text/plain");
      res.send(css);
    })
    .catch((err) => {
      // console.error(err);
      console.error(err.name);
      console.error(err.message);
      res.status(500).send(`${err.name} ${err.message}`);
    });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => console.log(`listening on port ${port}...`));
