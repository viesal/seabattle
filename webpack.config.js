'use strict';

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/static',
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /static/],
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['babel-preset-env']
                    // }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: [/static/]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            // {
            //     test: /\.svg$/,
            //     use: 'svg-inline-loader'
            // },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: "file-loader"
            },
        ]
    }
}