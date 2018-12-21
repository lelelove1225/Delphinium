const Path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    index: "./src/index.js"
  },

  output: {
    filename: "js/[name].bundle.js", // 出力ファイル名（パスも含めてOK） [name]でentryの名前が入る
    path: Path.resolve(__dirname, "dist") // 出力パス 要絶対パスなのでpathモジュールを使用
  },

  // 開発中はsourcemapを出力
  devtool: process.env.NODE_ENV === "production" ? false : "source-map",

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // this will apply to both plain .js files
      // AND <script> blocks in vue files
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      // this will apply to both plain .css files
      // AND <style> blocks in vue files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js" //webpack使う場合はこっちを指定する https://jp.vuejs.org/v2/guide/installation.html#%E7%94%A8%E8%AA%9E
    }
  },

  devServer: {
    //webpack-dev-server document root設定
    contentBase: "./dist"
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
};
