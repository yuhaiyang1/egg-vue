module.exports = (options, app) => {
  return async function middlewareOne(ctx, next) {
      console.log("==request one==");
      await next();
      console.log("==response one==");
  }
};