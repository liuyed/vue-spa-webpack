"use strict";
let path = require('path');
let webpack = require('webpack');
// var CleanWebpackPlugin = require('clean-webpack-plugin');//清空发布目录

module.exports = {
    entry: {
        // 修改vendor需要对应修改config下面的version版本控制
        // 修改vendor需要对应修改config下面的version版本控制 
        // 修改vendor需要对应修改config下面的version版本控制  
        vendor: ['vue','vuex','vue-router','axios','qs','js-cookie','babel-polyfill']
    },
    output: {
        path: path.join(__dirname, '../dist/static/js'),
        filename: '[name].js',
        library: '[name]',
    },
    plugins: [
        //清空发布目录
        // new CleanWebpackPlugin(['dist'], {
        //     root: path.resolve(__dirname, '../'), // An absolute path for the root 
        //     verbose: true,// Write logs to console.
        //     dry: false // Do not delete anything, good for testing.
        //  }),
        new webpack.DllPlugin({
            /**
             * path
             * 定义manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(__dirname,'../dist/static/js','[name]-manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
        //使用压缩丑化js插件
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            drop_console: true,
            pure_funcs: ['console.log']
          },
          sourceMap: false
        }),
    ]
};