const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: false,
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		fallback: {
			"zlib": require.resolve("browserify-zlib"),
			"worker_threads": false,
			"fs": false,
			"path": require.resolve("path-browserify"),
			"stream": require.resolve("stream-browserify"),
			"stream/web": false, // Use an empty module as a fallback
			"http": require.resolve("stream-http"),
			"https": require.resolve("https-browserify"),
			"net": false
		}
	},
	devServer: {
		static: './dist',
		compress: true,
		open: true,
		hot: true,
		port: 8564,
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
			template: './dist/index.html',
		}),
		new webpack.NormalModuleReplacementPlugin(
			/^node:/,
			(resource) => {
				resource.request = resource.request.slice(5);
			}
		),
	],
};