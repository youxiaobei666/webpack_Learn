const path = require("path");
const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common");
module.exports = merge(common, {
  mode: "development",
  plugins: [new CleanWebpackPlugin()],
});
