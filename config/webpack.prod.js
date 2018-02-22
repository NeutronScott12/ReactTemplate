const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpack = require('html-webpack-plugin')
const common = require('./webpack.common.js')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(common, {
	devtool: 'source',
	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(true)
		}),
		new HtmlWebpack({
			inject: true,
			template: '../public/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				comparisons: false
			},
			mangle: {
				safari10: true
			},
			output: {
				comments: false,
				ascii_only: true
			},
			sourceMap: false
		}),
		new webpack.LoaderOptionsPlugin({
			htmlLoader: {
				minimize: false
			}
		})
	]
})
