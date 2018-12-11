const Service = require('egg').Service;
const fetch = require('node-fetch')
class UploadService extends Service {
  async index ( form ) {
    const result = await this.ctx.curl('http://127.0.0.1:7002/upload', {
      method: 'post',
      headers: form.getHeaders(),
      dataType: 'json',
      stream: form
    })
    return result
  }
}
module.exports = UploadService;