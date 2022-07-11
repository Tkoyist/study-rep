const http = require('http')

// 当我们创建一个服务的时候，会传入一个回调函数，回调函数中包含了request 和response 两个参数对象
// 其中request 对象就是包含了请求相关的数据
const server = http.createServer((req,res)=>{
  // 请求url
  console.log(req.url);
  
})

server.listen(8000,()=>{
  console.log("请求成功");
})