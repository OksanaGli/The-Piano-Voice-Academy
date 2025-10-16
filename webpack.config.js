const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: 'eval-cheap-module-source-map',
    watch: !isProduction,
    entry: ['./src/index.js', './src/sass/style.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'script.js',
      clean: true,
      assetModuleFilename: '[name][ext]'                
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              targets: "defaults",
              presets: [
                ['@babel/preset-env']
              ]
            }
          }
        }, {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader, 
              'css-loader'
            ]
          }, {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' 
          ]
        }, {
          test: /\.(svg|jpe?g|pdf|png|ico|gif)$/,
          type: 'asset/resource',          
        }, 
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
          sources: {
            list: [
            {
              tag: 'img',
              attribute: 'src',
              type: 'src',             
            },
            {
              tag: 'a',
              attribute: 'href',              
              type: 'src',
              filter: (tag, attribute, attributes) => {
                const hrefValue = attributes.find(attr => attr.name === 'href')?.value || '';
                return hrefValue.endsWith('.pdf');
              },
            },
            {
              tag: 'link',
              attribute: 'href',
              type: 'src',
              filter: (tag, attribute, attributes) => {
                const relValue = attributes.find(attr => attr.name === 'rel')?.value || '';
                return ['icon', 'apple-touch-icon', 'manifest'].includes(relValue);
              }
            }                    
          ]
         }              
        },         
      }       
    ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',                    
      }),
      new HtmlWebpackPlugin({
        template: 'sveden.html',
        filename: 'sveden.html',                        
      }),      
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/js/bvi.min.js',
            to: 'js/bvi.min.js'
          },
          {
            from: './src/css/bvi.min.css', 
            to: 'css/bvi.min.css'
          },
          {
            from: './src/img/img', 
            to: 'img'
          },
          {
            from: './src/img/favicons/android-chrome-192x192.png', 
            to: 'icons'
          },
          {
            from: './src/img/favicons/android-chrome-512x512.png', 
            to: 'icons'
          },             
        ]
      })
    ]      
  } 

  return config;
}