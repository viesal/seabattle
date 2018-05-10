'use strict';

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/static',
        filename: "build.js"
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: [/node_modules/, /static/],
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['babel-preset-env']
            //         }
            //     },
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: [/static/]
            }
        ]
    }
}