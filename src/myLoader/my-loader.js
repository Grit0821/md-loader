// loader 是一个导出模块的函数

const loaderUtils = require('loader-utils')

module.exports = function (source, sourceMap) {
  // 获取到用户给当前 Loader 传入的 options
  const options = loaderUtils.getOptions(this)
  console.log("options->", options)
  // 通过 this.callback 告诉 Webpack 返回的结果
  this.callback(null, source.replace('world', ', Grit'), sourceMap);
  return;
};



