const Service = require('egg').Service;
const rp = require('request-promise')
const api = `https://api.douban.com/v2/movie/in_theaters`
const apiKey = '0b2bdeda43b5688921839c8ecb20399b'
class HomeService extends Service {
  async list (query) {
    // start  - count 条数
    let { city , start, count } = query
    start = (start - 1) * 15
    const url = `${api}?apiKey=${apiKey}&city=${city}&start=${start}&count=${count}`
    const result = JSON.parse(await rp(url))
    return result
  }
}
module.exports = HomeService;