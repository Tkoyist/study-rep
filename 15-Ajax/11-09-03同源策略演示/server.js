const express = require('express')
// require 函数用于加载模块

const app = express();

// 当收到get 请求，请求home 时，由该方法决定接收到的请求怎么处理，返回什么数据 
app.get('/home',(request,response)=>{
    // __diename 表示当前文件的绝对路径，即server.js 的绝对路径，这里我们传入绝对路径,访问到index.html 并将该页面作为响应值返回
    // 当我们向9000 端口中的/home发送请求时（即访问该端口页面时）sendFlie 就会将我们指定的页面作为返回值返回 
    response.sendFile(__dirname+'/index.html')
})

app.get('/data',(request,response)=>{
    response.send('dadadadadada')
})

app.listen(9000,()=>{
    console.log('服务器启动');
})