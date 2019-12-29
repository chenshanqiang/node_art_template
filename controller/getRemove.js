const url = require('url')
const User = require('../model/rules')
module.exports = async(req, res) => {
    const { query } = url.parse(req.url, true)
    const id = query.id.replace(/^\"|\"$/g, '') //通过正则表达式，去除_id两边的双引号
    await User.findOneAndDelete({ _id: id })
    res.writeHead(301, {
        Location: '/list'
    })
    res.end()
}