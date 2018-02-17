import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const paths = {
  src: path.join(__dirname, '..', 'src')
}

const config = {
  entry: [path.join(__dirname, '../', 'src', 'index')],

  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'js/[name]_[chunkhash].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      // TODO
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        include: paths.src,
        options: {
          error: false,
          snazzy: true,
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /src\/styles/],
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
        loader: 'file-loader?name=/media/[name].[hash:8].[ext]'
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url-loader?name=/media/[name].[hash:8].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html')
    })
  ]
}

export default { ...config }
