const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
      main: './src/js/index.js'
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true,
        overlay: true,
        port: 8000,
        open: true
      },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
         
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          },
          {
            test: /\.scss$/,
            use: [
                "style-loader", 
                "css-loader", 
                "sass-loader"
            ]
        },
          {
            test: /\.html$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].html"
                }
              },
              { loader: "extract-loader" },
              { loader: "html-loader" }
            ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                   name: '[path][name].[ext]'
                }
              }
            ]
          },{
            test: /\.(mov|mp4)$/,
            use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
            ]
         },
          {
            test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
          
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      }, plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([ 
          {
            from: 'src/assets/videos'
          }

         ])
      ],
    
  
  };

 
    