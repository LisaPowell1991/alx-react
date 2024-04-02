const path = require("path");

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext][query]',
                },
            },
        ],
    },
};