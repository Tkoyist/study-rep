// 1 引入express
const express = require('express');

// 2 创建应用对象
const app = express();

// 3 创建路由规则
app.get('/',(request,response)=>{
    // 这里传入了两个参数，其中request 是对请求报文的封装，response 是对响应报文的封装

    // 5 设置响应
    response.send('hello express')
})

// 4 监听端口启动服雾
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...");
})

// 6 在集成终端中启动监听
// node 文件名，

// 我们向127.0.0.1:8000 发送request 请求的时候，就会调用response ，执行对应代码，而send 中的数据就是该请求的响应的响应体