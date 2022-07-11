
const express = require('express');

const app = express();

// IE 缓存响应
app.get('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')

  
    response.send('hello IE - 222')
})

// 自定义请求头响应
app.all('/json-server',(request,response)=>{
    
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    

    const data= {
        name:'tkoyist+++++++',
        age:21
    }
    // 现在我们尝试接受请求后返回一个对象数据，但是send 方法只接受字符串数据的，所以我们这里要用到JSON
    
    // 使用JSON.stringify 方法将数据转换为JSON 字符串
    const str = JSON.stringify(data)


    response.send(str)
})

// 延时响应，模拟请求超时
app.get('/timeout',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置延时器模拟请求超时
    setTimeout(() => {
        response.send('hello IE - 222') 
    }, 2500);
})

// Axios 服务
app.all('/axios',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')

        response.send('hello axios') 
})

// fetch 服务
app.all('/fetch',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')

        response.send('hello axios') 
})


// 启动监听
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...");
})