const webpack = require('webpack');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
  },
  module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'                
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname + '/src'  // location of your src
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = config;