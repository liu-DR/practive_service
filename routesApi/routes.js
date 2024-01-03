const app = require('express')();
const { loginApi } = require('./userInfoApi');

// 挂载所有api路由
const routes = [
    {
        path: '/chat/auth/login',
        component: app.post('/', loginApi)
    }
]

module.exports = routes