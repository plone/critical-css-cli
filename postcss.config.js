module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'advanced'
    }),
    require('postcss-import')({})
  ]
}
