'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const user = require('./route/user')
const home = require('./route/home')
const upload = require('./route/upload')
module.exports = app => {
  const { router, controller } = app;
  user(app);
  home(app);
  upload(app);
  // router.post('/user', controller.user.getinfo)
};
