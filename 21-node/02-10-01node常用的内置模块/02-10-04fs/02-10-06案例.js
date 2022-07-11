const fs = require('fs')

const filepath = './data.txt'
// 注意读取文件的方式是从当前文件所在位置通过各种方式去访问所需的文件
// 获取指定文件的基本信息

// - 三种操作方式

// - 同步操作
const info = fs.statSync(filepath)
// 直接将文件路径传入 fs 的statSync 方法，方法就会返回指定文件的信息
console.log(info);


// - 异步操作（回调地狱，直接学promise）
// 接口就是fs.stat
// 直接传入两个参数，第一个参数是读取的文件的路径，第二个参数即是读取完成之后需要进行的回调操作


// - 异步promise
fs.promises.stat(filepath).then(val=>{
  console.log(val);
})
// 直接调用fs.promises.stat ，将文件路径传入，就会返回一个promise 对象，对象的val 就会获取到指定文件的信息，就可以使用then 接受使用
// fs.promise 本身应该就是一个接口，接口当中包含了大量返回promise对象的api供我们使用
