const url = require('url')
const User = require('../model/rules')
const template = require('art-template'); // 引入art-template模板引擎

module.exports = async(req, res) => {
    const { query } = url.parse(req.url, true)
    const id = query.id.replace(/^\"|\"$/g, '') //通过正则表达式，去除_id两边的双引号
    const userUpData = await User.findOne({ _id: id })
    const hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头', '吃饭', '睡觉', '打豆豆'];
    let body = []
    hobbies.forEach(items => {
        var ho = {}
        if (userUpData.hobbies.includes(items)) {
            ho.name = items;
            ho.checked = "checked";
        } else {
            ho.name = items;
            ho.checked = "";
        }
        body.push(ho)
    })
    let html = template('updata', { userUpData, body })
    res.end(html)
}