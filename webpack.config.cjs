const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tailwindcss = require('tailwindcss');

module.exports = {
  target: "node", // Set target to 'node' for server-side bundle
  entry: {
    server: "./src/main.tsx", // Entry point for server-side bundle
  },
  output: {
    filename: "[name].js", // Use dynamic name for output file based on entry point
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "./dist/ssr"),
    publicPath: "/", // Output directory
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Use Babel to transpile JavaScript files
        exclude: /node_modules/,  
        // resolve: {
        //   extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        // },
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: [tailwindcss,"postcss-preset-env",  "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index2.html", // base html
    }),
  ],
};
