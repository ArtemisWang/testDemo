/*
 * @Author: artemis
 * @Date: 2022-01-24 19:28:00
 * @LastEditTime: 2022-12-02 15:48:55
 * @LastEditors: artemis
 * @Description: 
 */
const {
  name
} = require('./package');
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: '0.0.0.0',
    port: 8080
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};