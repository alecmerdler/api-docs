var webpack = require('webpack');

var config = {
    entry: "./app/app.module.js",
    output: {
        filename: "build/bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".ts", ".css", ".scss"],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    devtool: "source-map",
};

module.exports = config;
