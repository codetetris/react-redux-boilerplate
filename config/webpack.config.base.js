const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  src: path.join(__dirname, '..', 'src')
}

const config = {
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      store: path.join(paths.src, 'store')
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: paths.src,
        use: {
          loader: 'standard-loader',
          options: {
            error: false,
            snazzy: true,
            parser: 'babel-eslint'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
        use: {
          loader: 'file-loader?name=media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        use: {
          loader: 'url-loader?name=media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html')
    })
  ]
}

module.exports = { ...config }
