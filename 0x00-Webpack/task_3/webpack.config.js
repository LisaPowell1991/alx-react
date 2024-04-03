const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new HTMLWebpackPlugin({
            filename: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    mode: 'development',
    entry: {
        header: {
            import: './modules/header/header.js',
            dependOn: 'shared',
        },
        body: {
            import: './modules/body/body.js',
            dependOn: 'shared',
        },
        footer: {
            import: './modules/footer/footer.js',
            dependOn: 'shared',
        },
        shared: 'jquery',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 8564,
    },

    performance: {
        hints: false,
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][hash][ext]',
                },
            },
        ],
    },
};