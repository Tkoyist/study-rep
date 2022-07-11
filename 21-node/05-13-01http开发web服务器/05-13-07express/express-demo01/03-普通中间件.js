/**
 * 前面说道express本质上是对一些列中间件的调用
 * 
 * 因此，我们可以粗略的认为express的核心就是一系列的中间件
 * 这里我们就先介绍普通的中间件
 */

const express = require('express')
// 导入express 函数

const app = express()
// 创建服务

// 为服务注册中间件（为服务添加行为）
app.use((req,res,next)=>{
  console.log('一个普通的中间件');

  next()
  // 调用next 会执行下一个中间件，而不会退出
})

app.use((req,res,next)=>{
  console.log('第二个普通的中间件');
  res.end('end server')
  // 结束当前请求
})


app.listen(8000,()=>{
  console.log("普通中间件启动完成");
})
// 挂载监听端口，并自定义启动后行为
