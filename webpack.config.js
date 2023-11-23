/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',  
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: './dist', 
        },
        port: 6060,
        open: true,
        hot: true,
    },
    // performance: {
    //     hints: false,
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'media/[name][ext]',
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //           name: '[name].[ext]',
            //           esModule: false,
            //           outputPath: 'media/', 
            //         },
            //       },
            //     ],
            //   },
        ],
    },
};
