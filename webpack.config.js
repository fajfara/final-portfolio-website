const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'; */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        /* new CleanWebpackPlugin(['dist']), */
        new HtmlWebpackPlugin({
            title: 'Anže Fajfar',
            template: './src/index.html'
        }),
        extractCSS
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: extractCSS.extract([
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ])
            }

        ]

    }

};