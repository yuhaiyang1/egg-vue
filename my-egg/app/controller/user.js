'use strict';
const _ = require('lodash')
const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { name, password }  = this.ctx.request.body
    let reult = {}
    result = this.ctx.service.user.find({ name, password })
    
    if (_.isEmpty(result)) {
      result = this.ctx.service.user.insert({ name, password })
    }
    this.ctx.body = {
        success: true,
        data: result
    }
  }
}

module.exports = UserController;
