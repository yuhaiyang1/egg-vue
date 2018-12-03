module.exports = (options, app) => {
  return async function middlewareOne(ctx, next) {
      const { url, session } = ctx
      if (url.includes('/login') || url.includes('/logout')) {
        await next();
      } else {
        // 其它接口且session 为空
        if (!session.user) {
          ctx.body = {
            success: false,
            errMsg: '登录失效'
          }
        } else {
          await next()
        }
      }
  }
};