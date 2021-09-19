const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const dotenv = require('dotenv-webpack');
const paths = require('./paths');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.tsx'],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // This is a fix so that HMR works
  target: 'web',

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      // Fonts and SVGs: Inline files
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
      },
    ],
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/assets',
          to: 'assets',
          noErrorOnMissing: true,
          // globOptions: {
          // ignore: ['*.DS_Store', '**/assets/css'],
          // },
        },
        {
          from: paths.public,
          to: paths.build,
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'FizzBuzz',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
    }),
    new dotenv({ path: `${__dirname}/config.env` }),
    // Run type checking and linting on separate processes to speed up compilation
    new ForkTsCheckerWebpackPlugin(),
  ],
};
