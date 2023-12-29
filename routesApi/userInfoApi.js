const app = require('express')();
const mysqlDB = require('../index')

/**
 * POST /chat/user/login
 * @name 用户名称
 * @password 用户密码
 * @avaterImg 用户头像
 */

app.post('/', (req, res, next) => {
    const params = req.query
    console.log(params,'params');
})

module.exports = app