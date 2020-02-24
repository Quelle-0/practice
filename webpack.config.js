const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    //入口文件的路径
    entry: "./src/app.tsx",
    output: {
        //打包的输出路径
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // 添加需要解析的文件格式
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // title: '蚂蚁',
            template: './index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
    },
    // 启用sourceMap
    devtool: "source-map",
}