var webpack = require('webpack');

var config = {
    entry: "./app/app.module.js",
    output: {
        filename: "build/bundle.js"
    },
    resolve: {
        extensions: ["", ".js"],
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
            }
        ]
    },
    devtool: "source-map",
};

module.exports = config;
