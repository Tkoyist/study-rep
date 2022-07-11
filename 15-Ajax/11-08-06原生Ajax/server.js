// 1 引入express
const express = require('express');

// 2 创建应用对象
const app = express();

// 3 创建路由规则
app.get('/server',(request,response)=>{// 当url的路径第二段是/server 的时候，才会执行当前的回调函数（和vue router 很像），注意这是url 如果不传入对应url会默认访问/ 而/ 没有设置则会返回无法找到
    // 这里传入了两个参数，其中request 是对请求报文的封装，response 是对响应报文的封装

    // 6 设置响应头，使其可以跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    // 5 设置响应体
    response.send('hello ajax')
})

// 还要将post 修改为 all 才能使我们自定义的请求头有效
// 因为当我们自定义请求头信息之后，xhr 还会自动发送一个OPTIONS 类型的请求，因为我们自定义头之后，xhr 需要确定请求头是否可用，需要发送一个OPTIONS请求用于确定
// 而我们修改之前，发送的OPTIONS 请求服务器无法识别，无法给出对应的响应，前端就无法确定该自定义头自否可用，所以请求失败
// 我们修改为all 之后，options 请求也能接受到，所以能够成功运行
app.all('/server',(request,response)=>{// 当url的路径第二段是/server 的时候，才会执行当前的回调函数（和vue router 很像），注意这是url 如果不传入对应url会默认访问/ 而/ 没有设置则会返回无法找到
    // 这里传入了两个参数，其中request 是对请求报文的封装，response 是对响应报文的封装
    
    // 6 设置响应头，使其可以跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //    设置响应头，使其可以接受除原生接收头之外的接受头，自定义头信息的时候设置origin 与设置headers 之间不是覆盖的关系，而是添加的关系，两者都要存在才能保证自定义头的正常使用
    response.setHeader('Access-Control-Allow-Headers','*')
    
    // 5 设置响应体
    response.send('hello ajax POST')
})

// 4 监听端口启动服雾
app.listen(8000,()=>{// 端口存在唯一性，不可多个服务占用同一端口，需释放之前端口才可再次使用端口
    console.log("服务已经启动，8000端口监听中...");
})