const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const htmlWebpack = require('html-webpack-plugin')
const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const { resolve } = require('path')

module.exports = webpackMerge(commonConfig, {
	plugins: [
		new webpack.DefinePlugin({
			DEVELOPMENT: JSON.stringify(true)
		}),
		new CaseSensitivePathsPlugin(),
		new htmlWebpack({
			template: './src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
		// new webpack.NormalModuleReplacementPlugin()
	],
	devServer: {
		port: 1234,
		host: '0.0.0.0',
		hot: true,
		inline: true,
		contentBase: resolve(__dirname, '..', 'src'),
		compress: true,
		historyApiFallback: true,
		open: false, // opens browser
		overlay: {
			warnings: true,
			errors: true
		}
	}
})
