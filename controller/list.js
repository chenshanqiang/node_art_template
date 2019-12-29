const template = require('art-template'); // 引入art-template模板引擎
const User = require('../model/rules')

module.exports = async(req, res) => {
    let UserList = await User.find()
    let html = template('list', { UserList })
    res.end(html);
}