async function get (ctx, next) {
  ctx.state.data = {
    msg: 'hello koa2'
  }
}

async function post (ctx, next) {
  const {name} = ctx.query
  ctx.state.data = `hello ${name}`
}

module.exports = {
  get,
  post
}
