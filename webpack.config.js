const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
    './src/assets/scss/style.scss'
  ],
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward-optional',
          }
        }
      },
      {
        test: /\.m?js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{ loader: 'eslint-loader', options: { emitWarning: true } }]
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              // Or array of paths
              resources: [
                './src/assets/scss/modules/_vars.scss'
              ]
            },
          }]
        })
      },
      {

      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './img/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './img/[name].[ext]'
          }
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/app.min.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets/img',
        to: './img'
      },
      {
        from: './src/assets/fonts',
        to: './fonts'
      }
    ]),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    alias: {
      atoms: path.resolve(__dirname, 'src/js/ui/atoms'),
      molecules: path.resolve(__dirname, 'src/js/ui/molecules'),
      organisms: path.resolve(__dirname, 'src/js/ui/organisms'),
      templates: path.resolve(__dirname, 'src/js/ui/templates'),
      pages: path.resolve(__dirname, 'src/js/ui/pages'),
      features: path.resolve(__dirname, 'src/js/features'),
      constants: path.resolve(__dirname, 'src/js/constants'),
      utils: path.resolve(__dirname, 'src/js/utils'),
      store: path.resolve(__dirname, 'src/js/store'),
      img: path.resolve(__dirname, 'src/assets/img'),
      HOC: path.resolve(__dirname, 'src/js/HOC'),
      config: path.resolve(__dirname, 'src/js/config'),
      hooks: path.resolve(__dirname, 'src/js/hooks'),
      src: path.resolve(__dirname, 'src/js'),
      services: path.resolve(__dirname, 'src/js/services'),
      context: path.resolve(__dirname, 'src/js/context'),
    }
  },
  devtool: 'source-map',
  devServer: {
    port: 8080,
    overlay: true
  }
};
