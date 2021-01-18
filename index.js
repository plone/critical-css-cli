'use strict'

const generator = require('./critical')
const path = require('path')
const pkgJson = require(path.join(__dirname, 'package.json'))

const { version } = pkgJson

function main (urls, options) {
  console.log('run', urls)
  const { dimensions = '1300x900', output = './' } = options

  const promises = urls.map((url, index) => {
    const fname = `critical-${index}.css`
    const promise = generator
      .generateCritical(url, dimensions, path.join(output, fname))
    return promise
  }
  )
  Promise.all(promises).then(allCss => {
    console.log(allCss.length)
  })
    .catch((err) => {
      console.error(err.name)
      console.error(err.message)
    })
}

const { Command } = require('commander')
const program = new Command()

program
  .version(version)
  .option('-o', '--output', 'Output directory')
  .option(
    '-d',
    '--dimensions',
    'Comma-separated dimension rectangles, like "1300x900,1600x1000"')
  .arguments('<url...>')
  .action(main)

program.parse(process.args, process.argv)
