'use strict';

const Controller = require('egg').Controller;
const doubanApi = `https://api.douban.com/v2/movie/in_theaters`
class HomeController extends Controller {
  async movieList() {
    // apikey：固定值0b2bdeda43b5688921839c8ecb20399b
    // city：所在城市，例如北京、上海等
    // start：分页使用，表示第几页
    // count：分页使用，表示数量
    // client：客户端信息。可为空
    // udid：用户 i可为空
    const { start, count } = this.ctx.request.body
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
