  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
       index: './src/index.ts',
       digger: './src/digger-modules/index.tsx',
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.js', '.tsx']
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: "ts-loader" },
        { test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/, },
        //
        //  the following config options base64 encode all included images, and
        //    put them inline into the generated html.
        //      why? because: I want the generated js to be as easily included anywhere as possible,
        //        as a single file bundle, so you don't have to worry about where to host the images
        //
        { test: /\.(png|jpg|gif)$/i,
          use: [
            { loader: 'url-loader',
              options: {
                // the limit, for some reason, is 'true' when the file is allowed
                // to be any size.  'false' will default to file-loader after a certain
                // filesize, instead of base64 encoding
                limit: true }}]},
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 9002,
      hot: true,
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '_dist'),
      clean: true,
    },
  };
