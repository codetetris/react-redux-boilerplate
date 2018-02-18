import webpack from 'webpack'
import path from 'path'
import baseConfig from './webpack.config.base'
import Dashboard from 'webpack-dashboard'
import DashboardPlugin from 'webpack-dashboard/plugin'

const dashboard = new Dashboard()

const config = {
  ...baseConfig,

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    ...baseConfig.entry
  ],

  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'js/[name]_[hash].js',
    publicPath: '/'
  },

  devtool: 'source-map',

  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(dashboard.setData)
  ],

  devServer: {
    quiet: true,
    hot: true,
    port: '3000',
    inline: true,
    historyApiFallback: true
  }
}

export default config
