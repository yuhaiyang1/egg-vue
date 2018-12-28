'use strict';

// had enabled by egg
// exports.static = true;
// exports.mysql = {
//     enable: true,
//     package: 'egg-mysql',
//   };
// 编辑 config/plugin.js
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.security = {
  /*
    需要注意的是，如果要发送Cookie
    Access-Control-Allow-Origin就不能设为星号
    必须指定明确的、与请求网页一致的域名
    同时，Cookie依然遵循同源政策
    只有用服务器域名设置的Cookie才会上传
    其他域名的Cookie并不会上传
    且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie。
  */
  domainWhiteList: '*',
  csrf: {
    enable: false,
  },
};
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
exports.session = true

