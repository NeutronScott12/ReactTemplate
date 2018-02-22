const { resolve } = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
	disable: process.env.NODE_ENV === 'development'
})

module.exports = {
	// context: resolve(__dirname, 'src'),
	entry: {
		vendor: [
			'react',
			'graphql',
			'formik',
			'react-apollo',
			'react-redux',
			'react-helmet'
		],
		path: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: resolve(__dirname, '..', 'dist'),
		publicPath: '/',
		chunkFilename: '[id].chunk.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css|sass)$/,
				include: /node_modules/,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						},
						{
							loader: 'postcss-loader',
							options: { sourceMap: true }
						},
						{
							loader: 'resolve-url-loader'
						}
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['ts-laoder']
			},
			{
				test: [/\.(png|woff|woff2|eot|ttf|svg|bmp|gif|jpe?j)$/],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 100000
						}
					}
				]
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
				use: [{ loader: 'file-loader' }]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx']
	},
	plugins: [
		extractSass,
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		new ManifestPlugin()
		// new FaviconsWebpackPlugin('favicon.png')
	]
}
