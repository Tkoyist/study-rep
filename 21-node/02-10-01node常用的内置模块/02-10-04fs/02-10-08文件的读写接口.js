// 文件的写入
// 使用fs 进行文件写入，使用 fs 的 writeFile 接口，直接写入

const fs = require('fs')
// 导入库
fs.writeFile('./data.txt','hello tkoyist',{flag:"a"},err=>{
  console.log(err);
})
// 该接口参数分为四个部分 path content flag err
// 分别代表着  插入文件的路径，用于指定需要写入的文件   插入的内容   将需要插入的内容插入在文件当中的什么位置   错误处理
// 当然，这些接口也都存在同步 异步 promise异步 三种分接口的，需要使用的时候直接去官网查询