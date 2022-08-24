const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, './src/index.html')
})

module.exports = {
    mode: 'development',
    entry: './src/main.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'], // 添加.tsx与.ts后缀解析
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    },
    devServer: {
        port: 9001,
        host: 'localhost',
        open: true
    },
    plugins: [htmlPlugin]
}