const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: path.resolve(__dirname, 'src'),
			use: ['babel-loader']
		},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000,
						},
					}]
			}
		]
	},
	devServer: {
		contentBase:  path.resolve(__dirname, 'dist'),
		port: 9000,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html" //source html
		})
	]
};
