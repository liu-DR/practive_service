const { mysqlQuery, response } = require('../utils/help');

/**
 * 登录
 * POST /chat/user/login
 * @name 用户名称
 * @password 用户密码
 * @avaterImg 用户头像
 */


const loginApi = async (req, res, next) => {
    const { name, password } = req.query
    const loginSql = `select * from user_info where user_name='${name}' and user_password='${password}'`
    const dataList = await mysqlQuery(loginSql, res);

    if(dataList?.length){
        response(res, 200, dataList, '')
        return;
    }
    response(res, 200, null, '用户名或密码不正确')
}

module.exports = {
    loginApi,
}