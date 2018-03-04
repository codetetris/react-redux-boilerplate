const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const baseConfig = require('./webpack.config.base')

const config = {

  ...baseConfig,
  mode: 'production',
  plugins: [

    ...baseConfig.plugins,

    new CleanPlugin(['dist'], {
      root: path.join(__dirname, '..')
    })
  ],
  optimization: {
    runtimeChunk: true
  },
  output: {
    filename: 'js/[name]_[chunkhash].js'
  }
}

module.exports = config
