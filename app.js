const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const response = require('./middlewares/response')
const config = require('./config')

const app = new Koa()

//使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由
const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.server_port)
