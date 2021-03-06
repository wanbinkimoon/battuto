var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, "src"),
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./battuto/battuto.js",
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'stage-0'],
				plugins: ['transform-decorators-legacy', 'transform-class-properties'],
			}
		}]
	},
	output: {
		path: __dirname + "/src/battuto/",
		filename: "battuto.min.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			sourcemap: false
		}),
	],
};
