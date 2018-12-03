'use strict';

const Controller = require('egg').Controller;
const doubanApi = `https://api.douban.com/v2/movie/in_theaters`
class HomeController extends Controller {
  async movieList() {
    const { pageSize = 15, pageNum = 1 , cityCode ='北京' } = this.ctx.query
    const result = await this.ctx.service.home.list({
      start: pageNum,
      count: pageSize,
      city: cityCode
    })
    this.ctx.body = {
      success: true,
      response: result
    }
  }
}

module.exports = HomeController;
