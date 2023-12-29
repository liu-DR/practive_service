const mysql = require('mysql')
const db = mysql.createConnection({
    host: '127.0.0.1', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    prot: 3306,
    password: 'liudr000628', // 登录数据库的密码
    database: 'chat_database', // 指定要操作哪个数据库
})

module.exports = db