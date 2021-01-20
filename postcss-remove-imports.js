module.exports = (opts = { }) => {
  return {
    postcssPlugin: 'remove-imports',

    AtRule: {
      import: atRule => {
        atRule.remove()
      }
    }
  }
}
module.exports.postcss = true
