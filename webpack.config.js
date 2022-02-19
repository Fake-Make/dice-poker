const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: "source-map",
  target: "web",
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,
  },
};
