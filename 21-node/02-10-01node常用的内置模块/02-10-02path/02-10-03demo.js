 
  // path 模块主要用于对文件路径的一些操作

  // 在不同的操作系统当中，路径相关的特殊符号可能会存在不同，这也就代表着在不同的系统下不能使用相同的方式处理路径
  // 而path 当中的一些方法则可以帮助我们根据不同的环境进行不同的处理，例如路径的拼接

// 导入path 模块
const path = require('path')
// 我们 使用了cmj 的方式导入模块，这样我们可以直接使用其他模块当中的数据，而不需要使用.mjs 后缀


// 实现路径的拼接，前面说道不同的系统下面路径的关键字符不同，那么路径的拼接就要依据环境作出相应的改变，path 就提供了方法进行处理
const basepath = 'user/hp'
const filename = 'index,js'

const filepath = path.resolve(basepath,filename)
console.log(filepath);


// 