const baseConfig = require('./webpack.config.base')

const config = {
  ...baseConfig,
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    ...baseConfig.plugins
  ]
}

module.exports = config
