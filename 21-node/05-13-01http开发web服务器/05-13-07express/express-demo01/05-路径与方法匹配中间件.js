const express = require('express')

const app = express()

// 添加一个路径与方法匹配中间件
// 不在调用use方法，而是get 或者post方法，本质与路径匹配中间件相同，都是为中间件添加上了约束，使得符合条件的http请求才能触发中间件
app.get('/home',(req,res,next)=>{
  console.log('路径匹配中间件');
  res.end()
})


app.listen(8000)