/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  module: {
    loaders: [
      {
        // Transform all .js files with Babel
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: options.babelQuery,
      },
      {
        // Transform our own .css files with PostCSS and CSS-modules
        test: /\.css$/,
        exclude: /node_modules/,
        loader: options.cssLoaders,
      },
      {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        loader: options.vendorCssLoaders,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make jQuery and fetch available
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether',
      fetch: 'exports?self.fetch!whatwg-fetch'
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ]),
  postcss: () => [
    postcssFocus(),
    cssnext({ browsers: ['last 2 versions', 'IE > 10'] })
  ],
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '',
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'main',
      'jsnext:main',
    ],
  },
  devtool: options.devtool,
  // target: 'web', // Make window variables accessible to webpack
  progress: true,
  stats: false
});