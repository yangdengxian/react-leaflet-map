const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
    devtool: debug ? "inline-sourcemap" : null,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },{
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },{ 
            test: /\.css$/, 
            loader: 'style-loader!css-loader' 
        }]
    },
    // 不限制打包大小
    performance: { 
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};