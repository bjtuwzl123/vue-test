const base=require('./webpack.config.base')
const path=require('path')
const merge=require('webpack-merge')
const MiniCssExtractPlugin =require('mini-css-extract-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const LicenseWebpackPlugin = require('../plugins/license-webpack-plugin')

module.exports=merge(base,{
    output:{
        filename:'js/[name][hash].js',
        chunkFilename:'js/vendor[id][hash].js'
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            },
            vendor:{
              test: /node_modules/,
              name: 'vendor',
              chunks:'all'
          }
        }
        }
      },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    'css-loader'
                ] 
            },
            {
              test: /.js$/,
                use: [
                    path.resolve(__dirname, '../loaders/replace-loader.js'),
                    path.resolve(__dirname, '../loaders/replace.js'),
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename:'css/[hash].css'}),
        new CleanWebpackPlugin(),
        new LicenseWebpackPlugin('MIT')
    ]
})