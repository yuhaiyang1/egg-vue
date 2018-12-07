'use strict';

/**
 * 首页相关的路由
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/upload', controller.upload.base64)
};
