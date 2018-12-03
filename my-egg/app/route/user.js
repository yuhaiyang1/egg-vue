'use strict';

/**
 * 用户相关的路由
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.user.login)
  router.post('/logout', controller.user.logout)
};
