const Service = require('egg').Service;
class UserService extends Service {
  async find (user = {} ) {
    const { name, password } = user
    const result = await this.app.model.User.findOne({
      name, password
    })
    console.log(result, 'res')
    return result
  }
  async insertData (user = {} ) {
    const { name, password } = user
    console.log(this.app.model.User, 'this.app.model.User')
    const result = await this.app.model.User.create({
      name, password
    })
    // 判断是否插入成功
    return result
  }
}
module.exports = UserService;