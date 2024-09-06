const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: './src/index.js', // The entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // For loading CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this HTML file as the base
    }),
    new ModuleFederationPlugin({
      name: "Host",
      remotes: {
        Micro1: `Micro1@http://localhost:4000/moduleEntry.js`,
        Micro2: `Micro2@http://localhost:4001/moduleEntry.js`,        
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'), // The path to your static files
      },
    compress: true,
    port: 3000, // Development server will run on port 3000
    open: true,
  },
  mode: 'development', // Or 'production' depending on your environment
};
