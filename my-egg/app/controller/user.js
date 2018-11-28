'use strict';
const _ = require('lodash')
const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { name, password }  = this.ctx.query
    let result = {}
    result = await this.ctx.service.user.find({ name, password })
    console.log(result, 'result')
    if (_.isEmpty(result)) {
      result = await this.ctx.service.user.insertData({ name, password , identity: 'nomal' })
    }
    this.ctx.body = {
        success: true,
        response: result
    }
  }
}

module.exports = UserController;
