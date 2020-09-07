module.exports = {
  "publicPath": 'mzrchzx-zz.github.io',
  "css": {
    "loaderOptions": {
      "scss": {
        "prependData": "\n          @import \"@/scss/_variables.scss\";\n          @import \"@/scss/_fonts.scss\";\n          @import \"@/scss/_medias.scss\";\n          @import \"@/scss/_mixins.scss\";\n        "
      }
    }
  },
  "devServer": {
    "watchOptions": {
      "clientLogLevel": "warning"
    }
  },
  "transpileDependencies": [
  ]
}