// 导入模块
const Events = require('events')
// 此处导入的events 本质上是一个类，而非常规的对象

// 创建events 实例
const event1 = new Events()
// 实例实现了以下功能
// - 接受事件与响应函数并对应的保存，并对其进行监听
// - 通过实例可以进行某个事件的触发与接收


// 事件的监听
event1.on('click',(...args)=>{
  console.log("click事件触发"+args)
})
// 可多次监听同一事件，事件触发时重复调用
event1.on('click',(...args)=>{
  console.log("click事件触发2"+args)
})


// 发出事件,并传入参数(注意这里是事件的发出而非触发，因为发出的事件不一定会被触发)
event1.emit('click','lzl','lol')