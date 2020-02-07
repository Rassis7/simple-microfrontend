const path = require("path");

module.exports = () => {
  return {
    entry: {
      index: "./rootComponent.js"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "release"),
      libraryTarget: "amd",
      library: "reactApp"
    },
    module: {
      rules: [
        {
          test: /\.js/,
          use: ["babel-loader?cacheDirectory"],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        { parser: { system: false } }
      ]
    },
    devServer: {
      historyApiFallback: true,
      watchOptions: { aggregateTimeout: 300, poll: 1000 },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization"
      }
    },
    externals: ["react", "react-dom"]
  };
};
