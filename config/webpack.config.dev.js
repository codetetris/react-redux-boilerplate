import webpack from 'webpack'
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
