'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const user = require('./route/user')
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.user.login)
  // router.post('/user', controller.user.getinfo)
};
