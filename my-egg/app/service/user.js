const Service = require('egg').Service;
class UserService extends Service {
  async find (user = {} ) {
    const { name, password } = user
    const result = this.ctx.mysql.get('user', {
      name, password
    })
    return result
  }
  async insert (user = {} ) {
    const { name, password } = user
    const result = this.ctx.mysql.inser('user', {
      name, password
    })
    // 判断是否插入成功
    return result
  }
}
module.exports = UserService;