const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "lib/public");
const APP_DIR = path.resolve(__dirname, "src/public");

const extractLess = new ExtractTextPlugin({
    filename: "css/[name].css"
});

const config = {
    entry: APP_DIR + "/js/index.js", //[APP_DIR + "/js/index.js", APP_DIR + "/less/master.less"],
    output: {
        path: path.resolve(__dirname, BUILD_DIR),
        filename: "js/[name].js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react", "stage-3"]
                }
            }]
    	}, {
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        extractLess
    ]
};

module.exports = config;