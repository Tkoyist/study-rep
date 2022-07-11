const path = require('path')


// 获取路径与文件的信息
const filename = '/user/hp/index.js'
console.log(path.dirname(filename));
// 获取路径
console.log(path.basename(filename));
// 获取文件名
console.log(path.extname(filename));
// 获取文件后缀名

// 路径的拼接
console.log(path.join('deskep',filename));
// jion 直接拼接，没有T特殊效果
console.log(path.resolve('deskep',filename));
// resolve 会在拼接完成之后对路径进行识别，如果路径的开头有相对路径的符号例如 / ./ ../ 则会将这些相对路径转化为绝对路径放在开头
// 在webpack 的配置当中，路径别名的设置就是使用了这个方法