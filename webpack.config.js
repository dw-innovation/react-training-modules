  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
       index: './src/index.ts',
       examples: './src/examples.tsx',
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
