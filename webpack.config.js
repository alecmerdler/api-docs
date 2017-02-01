var webpack = require('webpack');

var config = {
    entry: "./app/main.ts",
    output: {
        filename: "build/bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".ts", ".css", ".scss"],
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                loader: "svg-url-loader"
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    devtool: "cheap-eval-source-map",
};

module.exports = config;
