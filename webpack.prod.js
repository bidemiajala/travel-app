const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/app.js',
    output: {
        libraryTarget: 'var',
        library: 'Client',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/client/icons', to: 'icons' },
                { from: 'src/client/images', to: 'images' },
            ],
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: false,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        }),
        new Dotenv(),
        new WorkboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
};
