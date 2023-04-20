const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DefinePlugin = require("webpack").DefinePlugin;
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index")
module.exports = {
  resolve:{
    modules: ["node_modules"], // 配置依赖包的默认路径，
    alias: { 
      "js": path.resolve(__dirname,"./src/js"), //配置样式简单的路径
      "@": path.resolve(__dirname,"./src") // 把 src 这个常用目录修改为 @
    },
    extensions: [".js",".less",".css",".vue"] //配置了这些我们就不写那些后缀名啦
  },

  devServer: {
    port: 9999, // 修改端口为 9999
    compress: true, // 启用压缩
    hot: true, // 确定开启热模块替换，但是仅此而已不够的
    open: true, // 开启服务自动开启浏览器
    proxy: {
      "/api": {
        target: "http://localhost:9999",
        pathRewrite: { "^/api": "" },
      },
    },
  },

  entry: "./src/index.js", // 入口
  output: {
    // 出口
    path: path.resolve(__dirname, "dist"), // 使用 path 模块，在根目录新建文件夹
    filename: "bundle.js", // 指定打包的 js 文件名
    assetModuleFilename: "asset/[hash:6]-[name]-[ext]", // 指定文件夹名，和资源各自文件名
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "asset/[hash:6]-[name]-[ext]",
        },
      },
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "./asset",
        },
      ],
    }),
    new DefinePlugin({
      BASE_URL: "'./asset/'",
    }),
    new VueLoaderPlugin()
  ],
};
