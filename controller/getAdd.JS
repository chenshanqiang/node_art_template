const template = require('art-template'); // 引入art-template模板引擎

module.exports = async(req, res) => {
    let html = template('add', {})
    res.end(html);
}