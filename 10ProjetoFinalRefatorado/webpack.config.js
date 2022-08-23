/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path');

module.exports = {
    entry: './js/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './'),
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
};

