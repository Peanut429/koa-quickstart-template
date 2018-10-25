const simple = require('../mysql/simple')
async function get (ctx, next) {
  let result = await simple('select * from books')
  console.log('result: ', result)
  ctx.state.data = {
    data: result
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
