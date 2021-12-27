// Импортируем плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Переключаем режим dev, или prod
let mode = 'development'
if (process.env.NODE_ENV === 'production') {
   mode = 'production'
}

console.log(mode + ' mode')
module.exports = {
   mode: mode,
   entry: {
      scripts: './src/main.js'
   },
   output: {
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
      })],
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
               {
                  loader: "postcss-loader",
                  options: {
                     postcssOptions: {
                        plugins: [
                           [
                              "postcss-preset-env",
                              {
                                 // Options
                              },
                           ],
                        ],
                     },
                  },
               },
               "sass-loader",
            ],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         }
      ]
   },
}