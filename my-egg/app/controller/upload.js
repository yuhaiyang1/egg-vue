'use strict';
const fs = require('fs');
//node.js 路径操作对象
const path = require('path');
//egg.js Controller
const Controller = require('egg').Controller;
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
//当然你也可以不使用这个 哈哈 个人比较赖
//还有我们这里使用了egg-multipart
const md5 = require('md5');
class UploadController extends Controller {
  async index() {
    const ctx = this.ctx;
    const {query, request} =  ctx
    //egg-multipart 已经帮我们处理文件二进制对象
    const stream = await ctx.getFileStream();
    const { fields } = stream
    // 这里获取到除了文件以外的参数
    console.log(fields)
    //新建一个文件名
    const filename = md5(stream.filename) + path
        .extname(stream.filename)
        .toLocaleLowerCase();
    //文件生成绝对路径
    const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
    /* 
      待优化 这里可以自己创建一个文件

    */
    //生成一个文件写入 文件流
    const writeStream = fs.createWriteStream(target);
    try {
        //异步把文件流 写入
        await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
        //如果出现错误，关闭管道
        await sendToWormhole(stream);
        throw err;
    }
    //文件最终生成地址
    ctx.body = {
        url: '/public/uploads/' + filename
    };
  }
}

module.exports = UploadController;
