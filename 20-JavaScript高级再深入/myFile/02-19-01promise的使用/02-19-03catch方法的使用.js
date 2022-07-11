let promise = new Promise((resolve,reject)=>{
  // resolve('ok')
  reject('errrrrrrrrr')
  // throw new Error('rejected status')
})

// 在传入promise 当中的回调中，使用reject 函数抛出一个错误，在reject 函数执行时，promise的状态会变成reject 失败状态，对应的状态值也不再是value 而是reason
// promise.then(res=>{},err=>{
//   console.log(err);
// })


// 即使我们不使用reject 函数，而是使用throw 关键字直接抛出一个错误，该错误也一样会被catch 捕获
// promise.then(res=>{},err=>{
//   console.log(err);
// })
// 我们注意到，除了打印了我们预定义的err 之外，还打印了很多信息，那些信息是执行栈的状态信息，与promise 关系不大


// 简化写法，语法糖，但是这是不符合promise A+ 规范的
// promise.then(res=>{return res}).catch(err=>{console.log(err);})
// 注意是语法糖！！！！！不要认为catch 会针对then 方法的返回值调用，它依然会针对最初的promise进行操作
// promise.then(res=>{throw new Error('then err')}).catch(err=>{console.log(err);})
// 如果最初的promise 没有异常，而then 当中的promise 存在异常，那么也会抛出then 当中的err

// 如果promise 没有对应的catch 操作，而产生异常的情况下，即产生了错误，而then 没有预定的解决方案的情况下，会直接退出当前代码的运行
// promise.then(res=>{})


// catch 方法也可以存在返回值，也是一个promise 对象，该promise 对象的状态是由catch 方法的返回值决定的

// catch 可以认为是一个异常预处理函数，我们在catch 当中预定义一些代码，使得当出现一些问题的时候，代码可以直接使用我们预定义的方式去捕获处理异常，并继续运行代码，使代码不会因为promise 内部的异常直接退出
