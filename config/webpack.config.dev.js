const webpack = require('webpack')
const path = require('path')
const baseConfig = require('./webpack.config.base')

const config = {
  ...baseConfig,
  mode: 'development',
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config
