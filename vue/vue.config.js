// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'utils': '@/utils',
        'assets': '@/assets',
        'components': '@/components',
        'service': '@/service',
      }
    }
  },
  devServer: {
      host: '0.0.0.0',
      public: 'localhost:8080',
      port: 8080,
      proxy: {
        '/api': {
            target: 'http://47.95.195.206:8080/channelManage/pay',
            "secure": false,
            changeOrigin: true,     // 跨域
            pathRewrite: {
              '^/api': '/'          
            }
        }
      }
  }
}