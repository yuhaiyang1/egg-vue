'use strict';
const _ = require('lodash')
const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { name, password }  = this.ctx.query
    let result = {}
    result = await this.ctx.service.user.find({ name, password })
    if (_.isEmpty(result)) {
      result = await this.ctx.service.user.insertData({ name, password , identity: 'nomal' })
    }
    this.ctx.session.user = result
    this.ctx.body = {
        success: true,
        response: result
    }
  }
  async logout() {
    this.ctx.session = {}
    this.ctx.body = {
        success: true,
        response: true
    }
  }
}

module.exports = UserController;
