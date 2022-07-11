// 当模块数据过多，导入复杂的时候，可以使用
import * as aaa from"./src/js/1-aaa.js" 
import "./src/css/noemal.css"
// 这种方法将导入的所有数据放入一个对象当中，我们需要的时候直接去对象中取出，提高了导入代码效率也避免了导入数据和内部数据的变量冲突
var flag = false

console.log(aaa.num1);
console.log(aaa.num1);
// 当模块的数据发生改变之后，我们需要将模块重新打包以更新 bundle.js 文件
// 因为我们在html文件中本质使用的是 boundle.js 文件，只是这个文件是由我们通过webpack打包而来
// 也就是说webpack将我们需要的模块整合成为了一个单独的js文件，供我们直接使用，我们无需再关注模块间的引用，直接使用打包后的模块打包文件即可
// 且webpack可解析多种模块引用方式
console.log("被打包数据已更新");

export{
    flag
}