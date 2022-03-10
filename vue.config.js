module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-record/'
    : '/',
  css: {
    extract: false
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  }
}
