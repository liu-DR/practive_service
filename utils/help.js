const mysqlDB = require('./db')


/**
 * 返回值格式统一
 * @param {*} res 
 * @param 状态码 status 
 * @param 数据值 data 
 * @param 提示信息 msg 
 */
const response = (res, status, data, msg) => {
    res.status(status).json({
        code: status,
        data: data || null,
        message: msg
    })
}

/**
 * sql查询语句
 * @param sql语句 sql 
 * @param 响应回复 res
 */
const mysqlQuery = (sql, res) => {
    return new Promise((resolve, reject) => {
        mysqlDB.query(sql, (err,result) => {
            if(err) {
                response(res, 500, '', err.sqlMessage)
                reject();
            } else {
                resolve(result);
            }
        })
    })
}




module.exports = {
    mysqlQuery,
    response
}