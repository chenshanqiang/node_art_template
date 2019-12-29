const querystring = require('querystring')
const User = require('../model/rules')

module.exports = (req, res) => {
    let formData = ''
    req.on('data', chunk => {
        formData += chunk
    })
    req.on('end', async() => {
        await User.create(querystring.parse(formData))
        res.writeHead(301, {
            Location: '/list'
        })
        res.end()
    })
}