const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const environment = env.ENVIRONMENT;

  // Define the environment file path
  const envPath = path.join(__dirname, `./config/.env.${environment}`);

  // Start DotEnv
  const envVariables = dotenv.config({ path: envPath }).parsed || process.env;

  // Convert Environment Variables -> Object
  const envKeys = Object.keys(envVariables).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envVariables[next]);
    return prev;
  }, {});

  // Returns the Webpack Object
  return {
    entry: {
      app: './src/index.tsx',
    },
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: path.join(__dirname, './dist'),
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    // Dev server options
    devServer: {
      contentBase: path.join(__dirname, './dist'),
      port: 4200,
      inline: true,
      hot: true,
      historyApiFallback: true,
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        '@': path.join(__dirname, './src'),
      },
    },

    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { cacheDirectory: true, babelrc: true },
          },
        },
        { test: /\.css$/, loader: 'style-loader' },
        { test: /\.css$/, loader: 'css-loader' },
        {
          test: /\.(jp?g|png|gif|svg|ico)$/i,
          use: [{ loader: 'file-loader', options: { outputPath: 'assets/' } }],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin(envKeys),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './public', 'index.html'),
        favicon: path.join(__dirname, './public', 'favicon.ico'),
      }),
      new CopyPlugin({
        patterns: [{ from: './public/reset.css', to: './reset.css' }],
      }),
    ],
  };
};
