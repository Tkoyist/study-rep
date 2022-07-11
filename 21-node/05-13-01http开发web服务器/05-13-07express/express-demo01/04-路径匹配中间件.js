const express = require('express')

const app = express()

// 添加一个路径匹配中间件
app.use('/home',(req,res,next)=>{
  console.log('路径匹配中间件');
  res.end()
})
// 路径中间件相当于是添加了路径约束的普通中间件，功能上与普通中间件相同，但是它只在http请求的路径与中间件路径匹配时才会生效，不匹配则会被忽视

app.listen(8000)