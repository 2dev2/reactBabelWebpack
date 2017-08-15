const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const APP_DIR = path.resolve(__dirname,"client");
const BUILD_DIR = path.resolve(__dirname,"dist");


const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
	//template:path.join(APP_DIR,"index.html"),
	template:'./client/index.html',
	//path:BUILD_DIR,
	filename:"index.html",
	inject: 'body'
});

//const rules = loaders
const config = {
	entry:'./client/index.js',
	output :{
		path:BUILD_DIR,
		filename:"bundle.js"
	},
	module:{
		loaders:[{
				test:/\.js$/,
				exclude:/node_module/,
				loader:["babel-loader","eslint-loader"]
			},
			{
				test:/\.jsx$/,
				exclude:/node_module/,
				loader:"babel-loader"
			}
		]
	},
	plugins: [htmlWebpackPluginConfig]
};

module.exports = config;