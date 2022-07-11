
const express = require('express');

const app = express();


// app.get('/server',(request,response)=>{
//     response.setHeader('Access-Control-Allow-Origin','*')

  
//     response.send('hello ajax')
// })

app.all('/json-server',(request,response)=>{
    
    response.setHeader('Access-Control-Allow-Origin','*')


    response.setHeader('Access-Control-Allow-Headers','*')
    

    const data= {
        name:'tkoyist',
        age:21
    }
    // 现在我们尝试接受请求后返回一个对象数据，但是send 方法只接受字符串数据的，所以我们这里要用到JSON
    
    // 使用JSON.stringify 方法将数据转换为JSON 字符串
    const str = JSON.stringify(data)


    response.send(str)
})


app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...");
})