'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const user = require('./route/user')
const home = require('./route/home')
module.exports = app => {
  const { router, controller } = app;
  user(app);
  home(app);
  // router.post('/user', controller.user.getinfo)
};
