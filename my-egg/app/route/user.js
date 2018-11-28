'use strict';

/**
 * 用户相关的路由
 */
module.exports = app => {
  const { router, controller } = app;
  return router.post('/login', controller.user.login)
};
