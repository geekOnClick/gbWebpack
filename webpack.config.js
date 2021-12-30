// Импортируем плагины
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// Переключаем режим dev, или prod
let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', //выходной файл куда собирается проект
        assetModuleFilename: "assets/[hash][ext][query]", //все шрифты и изображения компилируются в папку assets
        clean: true, // очистка папки dist при сборке проекта
    },
    devtool: 'source-map', //Исходные карты, можно определить в каком из файлов допущена была ошибка
    optimization: {
        splitChunks: { //Дробление файлов
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ImageMinimizerPlugin({
            severityError: "warning",
            minimizerOptions: {
                plugins: [
                    ["gifsicle", { optimizationLevel: 3, interlaced: true }],
                    ["mozjpeg", { quality: 80 }],
                    ["pngquant", { quality: [0.7, 0.8] }],
                    [
                        "svgo",
                        {
                            name: "preset-default",
                            params: {
                                overrides: {
                                    removeViewBox: false,
                                },
                            },
                        },
                    ],
                ],
            },
        }),

    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset/resource",
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(mp3|mp4)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/sounds/[hash][ext][query]",
                },
            },
            // {
            //     test: /\.mp4$/i,
            //     type: "asset/resource",
            //     generator: {
            //         filename: "assets/[hash][ext][query]",
            //     },
            // },
        ]
    },
}