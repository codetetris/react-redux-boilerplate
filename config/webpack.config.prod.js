const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const baseConfig = require('./webpack.config.base')
const packageJson = require('../package.json')

const config = {
  ...baseConfig,
  mode: 'production',

  entry: {
    app: './src/index.js',
    vendor: Object.keys(packageJson.dependencies)
  },

  plugins: [

    ...baseConfig.plugins,

    new CleanPlugin(['dist'], {
      root: path.join(__dirname, '..')
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  output: {
    filename: 'js/[name]_[chunkhash].js'
  }
}

module.exports = config
