'use strict';

module.exports = appInfo => {
  const config = exports = {};
  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543029610119_4473';

  // 设置中间件
  config.middleware = ['gzip', 'middlewareOne'];

  // 处理 cors
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  // 连接 mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '192.168.0.49',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'egg',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  
  // 先 ignore 掉 csrf
  config.security = {
    csrf: {
      enable: false,
    }
  };
  return config;
};
