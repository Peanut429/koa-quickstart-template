/**
 * 响应处理模块
 */
module.exports = async (ctx, next) => {
  try {
    // 调用下一个中间件
    await next()

    // 处理响应结果
    // 如果直接写入在body中，则不做处理
    // 如果写在ctx.body为空，则使用 state 作为响应
    ctx.body = ctx.body ? ctx.body : {
      code: ctx.state.code !== undefined ? ctx.state.code : 0,
      data: ctx.state.data !== undefined ? ctx.state.data : {}
    }
  } catch (e) {
    // 设置状态码为 200 - 服务端错误
    ctx.status = 200

    // 输出详细的错误信息
    ctx.body = {
      code: -1,
      error: e && e.message ? e.message : e.toString()
    }
  }
}
