const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: {
    app: './src/index.js',
  },

  output: {
    filename: '[name].[hash].js',
    chunkFilename: "[name].[chunkhash].js",
    publicPath: 'dist/',
    path: path.resolve('./dist'),
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
    },
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              parser: 'babel-eslint'
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              publicPath: 'dist'
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  // Options for resolving module requests
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },

  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      url: `https://app.lkondo.com`,
      template: 'src/index.html',
    }),
  ]
};
