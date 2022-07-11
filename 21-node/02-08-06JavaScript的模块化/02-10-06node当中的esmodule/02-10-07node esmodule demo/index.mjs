// import {
//   name,
//   age
// }from'./modules/foo'
// 这样会报错。node 会无法找到该模块
// 这是因为没有添加后缀名
// 前面我们说过,node 实现cmj 的时候,以cmj 方式导入模块可以不用后缀名,因为node在cmj 方式中准备了一套解决方案帮我们寻找模块
// 但是node 针对与esmodule 是没有准备这样的方案的 ,之前的开发当中我们可以不添加后缀名是因为webpack 帮我们完成了这些工作,而当前的环境中并不存在webpack

import {
  name,
  age
}from'./modules/foo.mjs'
// 这样依然会报错，因为对于esmodule 而言，一个模块必须要有自己的模块身份证  package.json 文件证明当前是一个模块，才能作为esmodule 使用，而foo.js 显然不具备这样的身份证
// 我们当然不可能为一个js 文件添加 package.json ，但是针对单个文件，我们还有另外的解决方案，将该文件的后缀名改为 mjs 表明该文件是是一个模块文件，可以作为模块使用

// 注意，
// import 关键字只能在模块当中使用，虽然一个js 文件针对于 cmj 来说就是一个模块，但是在esmodule 当中是不行的
// 在esmodule 当中有两个方式确定一个模块
// - 文件夹带有模块身份证 package.json
// - 文件以 .mjs 为后缀名
// 所以index 的后缀名也必须是 .mjs，这样才能正确使用其他模块当中的导出数据
// 这种拓展名在node的运行环境下必须的，在浏览器当中不用？试试
// 妈的，浏览器中直接不支持

console.log(name,age);