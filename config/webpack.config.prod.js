import webpack from 'webpack'
import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import CleanPlugin from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import baseConfig from './webpack.config.base'

const config = {

  ...baseConfig,

  plugins: [

    ...baseConfig.plugins,

    new CleanPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-build',
      chunks: ['main'],
      minChunks: ({ resource }) =>
        /node_modules\/(react(-dom)?|fbjs)\//.test(resource)
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),

    new HtmlPlugin({
      template: path.join(path.join(__dirname, '..', 'src'), 'index.html'),
      minify: { collapseWhitespace: true },
      chunksSortMode: (chunk1, chunk2) => {
        const order = ['react-build', 'vendor', 'main']
        const left = order.indexOf(chunk1.names[0])
        const right = order.indexOf(chunk2.names[0])
        return left - right
      }
    })
  ].concat(process.env.ANALYZER ? new BundleAnalyzerPlugin() : [])
}

export default config
