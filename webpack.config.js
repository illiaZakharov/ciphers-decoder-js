const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const getOptimizationConfig = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (!isDev) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
        ];
    }

    return config;
}

const getFileName = (extention) => {
    return isDev ? `[name].${extention}` : `[name].[hash].${extention}`;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: { main: './app/index.js' },
    output: {
        filename: getFileName('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new HTMLPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: !isDev,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: getFileName('css'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                },
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                use: ['file-loader'],
            },
            {
                test: /\.s[ca]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    optimization: getOptimizationConfig(),
    devServer: {
        port: 4200,
        hot: isDev,
    },
}
