#!/usr/bin/env node

'use strict'

const generator = require('./critical')
const path = require('path')
const pkgJson = require(path.join(__dirname, 'package.json'))

const { version } = pkgJson

function main (urls, options) {
  console.log('run', urls)
  const { dimensions = '1300x900', location = './' } = options

  const promises = urls.map((url, index) =>
    generator
      .generateCritical(url, dimensions, `${location}/critics-${index}.css`)
  )
  Promise.all(promises).then(allCss => {
    console.log(allCss)
  })
    .catch((err) => {
      console.error(err.name)
      console.error(err.message)
    })
}

const { Command } = require('commander')
const program = new Command()

program.version(version).option('-o', '--output', 'Output directory').arguments('<url...>').action(main)

program.parse(process.args, process.argv)
