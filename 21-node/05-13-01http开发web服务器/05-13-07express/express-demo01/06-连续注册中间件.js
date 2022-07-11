const express = require('express')

const app = express()

// 连续注册中间件
// 我们可以在调用中间件注册方法（use get post 等时，直接传入多个中间件）
// 但是他们与分开写的性质相同，还是需要调用next 方法执行下一个中间件
// 可以理解为一个语法糖
app.get('/home',(req,res,next)=>{
  console.log('路径匹配中间件');
  res.end()
  next()
},
(req,res,next)=>{
  console.log('路径匹配中间件');
})


app.listen(8000)