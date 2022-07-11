/**
 * 经过前面的学习，我们已经可以使用node 执行js 代码，并获取js 当中的数据进行一些简单的操作了
 * 但是我们依然无法通过node 修改js 文件，例如传入参数
 */
console.log('hello node');

/**
 * 向node 传递参数，我们可以在使用node 运行某个文件的时候直接在之后添加上键值对，或者直接添加上一个变量名，这些参数就会被添加进入node
 * 在node 的process 全局对象的arg 属性当中
 * 
 * - 例如
 *  node .\02-08-02向node传递参数.js lzl age=21
 * 就是向当前node 的process 全局对象当中添加了 lzl 这一参数，并添加了 age:21 这样一个键值对参数
 */
console.log(process);
// 注意process 是一个全局对象，我们可以直接访问到该对象
console.log(process.argv[3]);
// 我们也可以直接获取某个参数
// 当然也能进行一些简单的操作