const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path : __dirname + "/dist",
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['source-map-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|mp4)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    devServer: {
        historyApiFallback: true
    },
}