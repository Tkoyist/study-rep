// 当模块数据过多，导入复杂的时候，可以使用
import * as aaa from"./1-aaa.js" 
// 这种方法将导入的所有数据放入一个对象当中，我们需要的时候直接去对象中取出，提高了导入代码效率也避免了导入数据和内部数据的变量冲突
var flag = false

console.log(aaa.num1);
console.log(aaa.num1);

export{
    flag
}