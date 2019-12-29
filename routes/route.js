const getRouter = require('router'); // 引入router模块
const router = getRouter(); // 获取路由对象

// 获取用户数据列表
router.get('/list', require('../controller/list'));
// 用户添加界面
router.get('/add', require('../controller/getAdd'));
// 删除用户
router.get('/remove', require('../controller/getRemove'));
// 修改数据
router.get('/modify', require('../controller/getModify'));

// 提交修改数据
router.post('/modify', require('../controller/postModify'));
// 添加用户
router.post('/add', require('../controller/postAdd'));
module.exports = router;