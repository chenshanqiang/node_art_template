const url = require('url')
const querystring = require('querystring')
const User = require('../model/rules')


module.exports = (req, res) => {
    const { query } = url.parse(req.url, true)
    const id = query.id.replace(/^\"|\"$/g, '') //通过正则表达式，去除_id两边的双引号
    let formData = ''
    req.on('data', chunk => {
        formData += chunk
    })
    req.on('end', async() => {
        let user = querystring.parse(formData)
        await User.updateOne({ _id: id }, user)
        res.writeHead(301, {
            Location: '/list'
        })
        res.end()
    })
}