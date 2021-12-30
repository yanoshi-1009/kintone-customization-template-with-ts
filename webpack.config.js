const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: { index: "./src/js/index.ts" },
  resolve: {
    alias: {
      modules: __dirname + "/node_modules",
      common: __dirname + "/common"
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/i,
        type: "asset"
      }
    ]
  },
  optimization: {
    minimizer: [
      // https://webpack.js.org/plugins/terser-webpack-plugin/#preserve-comments
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /@license/i
          }
        }
      })
    ]
  }
};
