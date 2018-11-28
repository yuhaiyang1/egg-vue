const Service = require('egg').Service;
class UserService extends Service {
  async find (user = {} ) {
    const { name, password } = user
    const result = await this.app.mysql.get('user', {
      name, password
    })
    return result
  }
  async insertData (user = {} ) {
    const { name, password, identity } = user
    const result = await this.app.mysql.insert('user', {
      name, password, identity
    })
    // 判断是否插入成功
    return result
  }
}
module.exports = UserService;