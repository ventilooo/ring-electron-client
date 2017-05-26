const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: "electron",

    // This enables the creation of source maps,
    // which improve the debuggability of the application
    // by allowing you to see where an error was raised.
    devtool: "source-map",

    // Entry file to startsbuilding from.
    // entry.jsx is the renderer process,
    // main.js is for the main process.
    // Electron will be pointed at the main bundle,
    // while the Renderer will point to entry bundle.
    entry: {
        entry: './app/App.jsx',
        main: './main.js'
    },

    // Location and filename pattern of the
    // final build output files.
    output: {
        path: path.join(__dirname, 'build'),
        filename: "[name].bundle.js"
    },

    devServer: {
        //content from here will be automatically served
        contentBase: './app/public',
        publicPath: 'http://localhost:8182/build/'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, "app/styles"),
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.jsx?$/,
          include: path.resolve(__dirname, "app"),
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
