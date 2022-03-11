const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'docs'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'scss'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs'),
        },
        compress: true,
        historyApiFallback: true,
        devMiddleware: {
            writeToDisk: true,
        },
        port: 8080
    },
    externals: {
        react: 'React',
        axios: 'axios',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'Heroes',
            template: path.join(__dirname,'public', 'index.html')
        })
    ]
}