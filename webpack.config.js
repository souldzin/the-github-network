const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/main.js',
		'./src-styles/main.less'
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!less-loader"
				})
            }
		]
	},
	plugins: [
		new ExtractTextPlugin("main.bundle.css")
	]
}
