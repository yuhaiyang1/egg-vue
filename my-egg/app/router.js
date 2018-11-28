'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const user = require('./route/user')
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  user(app);
  // router.post('/user', controller.user.getinfo)
};
