const webpack = require("webpack");
const path = require("path");
const APP_DIR = path.resolve(__dirname,"client");
const BUILD_DIR = path.resolve(__dirname,"dist");


//const rules = loaders
const config = {
	entry:APP_DIR + "index.js",
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
	}
};

module.exports = config;