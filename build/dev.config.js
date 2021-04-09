const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',

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
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
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
    new HtmlWebpackPlugin({
      chunks: ['app'],
      template: 'src/index.html',
    })
  ]
};
