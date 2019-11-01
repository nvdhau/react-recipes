const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//search .env file, then load all variables as global variables from process.env
require('dotenv').config();

//rules.loader is applied from last to top
//postcss-loader >> css-loader (css available in js file using require) >> style-loader (inject style to header of html file)
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: ['whatwg-fetch','./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpeg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL)
        })
    ]
}