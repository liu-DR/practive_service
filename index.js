const router = require('express').Router();
const app = require('express')();
const mysqlDB = require('./utils/db')

// 加载CORS模块
const  cors = require('cors');

//连接mysql数据库
mysqlDB.connect((err) => {
    //回调函数，用来返回连接失败错误信息
    if(err){
        console.log("数据库连接失败，原因是" + err)
    }else{
        console.log("数据库连接成功")
    }
})
 
// body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
const bodyParser = require('body-parser');
const arrRoutes = require('./routesApi/routes');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors()); // 注入cors模块解决跨域

// // 接口返回封装
// app.use(resAPI);
// // 请求拦截处理
// app.use(interceptor);

for (const route of arrRoutes) {
    app.use(route.path, route.component);
}
app.use(router);

app.listen(8085, () => {
    console.log('服务已启动 8085')
})

module.exports = {
    app,
    mysqlDB
}
