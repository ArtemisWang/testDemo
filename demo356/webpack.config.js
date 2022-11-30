/*
 * @Author: artemis
 * @Date: 2021-12-17 13:47:31
 * @LastEditTime: 2021-12-17 13:47:32
 * @LastEditors: artemis
 * @Description: 
 */
const path = require('path');

module.exports = {
  entry: {
    app: './test.txt'
  },
  module: {
    rules: [{
      test: /\.txt$/,
      use: [
        './loaders/loader2.js', './loaders/loader1.js'
      ]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].txt'
  }
};
