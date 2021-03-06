// 所有操作系统对内部的文件都会分别为其设置一个简单的数字表示符，称之为文件标识符
// 但是不同系统的文件标识机制有细微的差别

// 而node 抽象出了各个操作系统之间的特定差异,为所有打开的文件都分配了文件标识符

const fs = require('fs')
const filepath = './data.txt'
// 获取data.txt 的文件描述符
fs.promises.open(filepath).then(val=>{
  console.log(val);
})
// 前面讲到，在node 系统中，每一个文件描述符指向一个已经被打开的文件
// 所以我们也可以直接使用某个已经被打开的文件的文件描述符直接选中某个文件（当然这种类似于别名的设置只会在同系统当中生效）

