const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'webpack Boilerplate',
            template: "./src/index.html"})
        //new CleanWebpackPlugin({})
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"] 
            }
        ]
    }
}