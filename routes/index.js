/**
 * ajax 路由集合
 */
const router = require('koa-router')({
  prefix: '/app'
})
const controllers = require('../constrollers')

// 服务接口 Demo
router.get('/getDemo', controllers.demo.get)
router.post('/postDemo', controllers.demo.post)

module.exports = router
