const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {

    entry: {
        'app': './src/main.ts',
        'vendor': './src/vendor.ts',
        'polyfills': './src/polyfills.ts'
        
    },

    output: {
    	path: path.join(__dirname, 'bin'),
        filename: 'js/[name].bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    module: {
        rules: [
            // tell webpack HOW to react when a file is included in your application
        ]
    },

    plugins: [
		// finetune the behaviour of specific plugins
    ]
}; 