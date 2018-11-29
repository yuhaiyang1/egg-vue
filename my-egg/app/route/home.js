'use strict';

/**
 * 首页相关的路由
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/movies', controller.home.movieList)
};
