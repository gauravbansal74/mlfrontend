'use strict';

/**
 * Default dev server configuration.
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackBaseConfig = require('./Base');

const baseDist = './dist';

class WebpackDevConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      entry: {
        app: './client.js',
        index: './containers/routes/Index',
        login: './containers/routes/Login',
        dataSource: './containers/routes/DataSource',
      },
      output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve('./dist/assets'),
        publicPath: 'http://demo.atdesk.co/assets/'
      },
      devtool: 'eval',
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
        new webpack.IgnorePlugin(/^\.\/i18n$/, /parsleyjs$/),
        new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
        new CleanWebpackPlugin([baseDist]),
        new HtmlWebpackPlugin({
          title: 'Development'
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'vendor.bundle.js',
          minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          moment: 'moment',
          'window.jQuery': 'jquery',
          'window.parsley': 'parsleyjs',
          'immutable': 'immutable',
          'Immutable': 'immutable',
          'window.Immutable': 'immutable',
          'draft-js': 'draft-js',
          popperjs: 'popperjs',
          'React': 'react',
          'ReactDOM': 'react-dom',
          Popper: ['popperjs', 'default'],
        })
      ]
    };
  }
}

module.exports = WebpackDevConfig;
