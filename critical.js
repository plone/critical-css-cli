'use strict'

const critical = require('critical')

const DEFAULT_OUTPUT = '/var/app/output/'

const generateCritical = async (url, size, location) => {
  location = location ?? process.env.LOCATION ?? DEFAULT_OUTPUT

  const dimensions = size.split(',').map((item) => {
    const val = item.trim().split('x')
    return {
      width: parseInt(val[0]),
      height: parseInt(val[1])
    }
  })

  console.log('Generating critical css for: ', url)

  // also available: html, uncritical
  const { css } = await critical.generate({
    strict: false,
    rebase: false,
    minify: true,
    src: url,
    target: {
      css: __dirname + `${location}/critical.css`
    },
    penthouse: {
      timeout: 40000,
      pageLoadSkipTimeout: 30000
    },
    dimensions
  })

  console.log(`Done. Critical css saved in ${location}/critical.css`)
  return css
}

module.exports = {
  generateCritical
}
