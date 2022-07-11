const express = require('express')

// express 本质是一个函数
// 调用函数返回另外一个函数app
const app = express()

// 监听get请求的默认路径
// 使用get方法即监听get请求，/ 即默认路径
// 我们可以更改调用的方法与传入的第一个参数来确定监听何种方法及哪个路径
app.get('/',(req,res,next)=>{
  res.end('hello express')
})

// 例如这就是监听login路径的post请求
app.post('/login',(req,res,next)=>{
  res.end('hello login')
})

// app本质就是一个服务，即之前通过http创建的服务，在下面，我们调用它的一些方法进行一些设置，例如开启监听
app.listen(8000,()=>{
  console.log('启动成功');
})