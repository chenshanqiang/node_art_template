/*jshint esversion: 6 */
const http = require('http')
const path = require('path') //拼接路径
const app = http.createServer()
const router = require('./routes/route'); // 获取路由对象
const serveStatic = require('serve-static'); // 引入静态资源访问模块
const template = require('art-template'); // 引入art-template模板引擎

require('./model/db') //数据库连接

template.defaults.root = path.join(__dirname, 'views'); //设置模板根目录
template.defaults.extname = '.art'; //设置模板默认后缀



const serve = serveStatic(path.join(__dirname, 'public')) //设置静态目录


app.on('request', (req, res) => {
    // 启用路由功能
    router(req, res, () => {});
    // 启用静态资源访问服务功能
    serve(req, res, () => {})
})
app.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000')
})