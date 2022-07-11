// then 方法接受一个回调函数作为参数,会在promise 内部的异步任务完成之后,根据promise 的状态与值执行相应的回调
// then 方法存在于promise 的原型对象当中

let promise = new Promise((resolve,reject)=>{
  resolve('ok')
})

// 同一个promise 可以多次调用then 方法（注意promise.then.then 并不是同一个promise 多次调用的then 方法，而是前面的then 方法返回的promise 对象调用后面的then 方法）
// promise.then(res=>{console.log(res);})
// promise.then(res=>{console.log(res);})
// promise.then(res=>{console.log(res);})


// 这种情况并不是最初的promise 调用了then 方法，而是前一个then 返回的promise 调用了then 方法
// promise.then(res=>{console.log(res);}).then(res=>{console.log(res);})


// then 方法内部的回调函数可以存在返回值
// then 方法的返回值是promise
// - 如果返回值是一个普通值，那么该值会作为then方法返回的promise 对象的value 值传入
// promise.then(res=>{console.log(res);return 'aaaaaa';}).then(res =>{console.log(res);return 'bbbb'}).then(res=>{console.log(res);})
// -- 这也算是一种链式调用，通过then 的默认返回实现

// - 如果then 方法的返回值是一个promise 对象
// 那么就是将一个新的promise 对象作为参数传入了then方法返回的promise 当中，本质上就是resolve 接受promise 作为参数的情况，这种情况下，外部的promise 的状态由内部的promise的状态决定
// 即then 返回的promise的状态由then 内部的回调函数返回的promise 对象的状态决定
promise.then(res=>{
  // then 方法内部的回调函数返回一个promise
  return new Promise((resolve,reject)=>{
    // 将 promise in then 作为回调函数返回的promise 的value 传入
    resolve('promise in then')
  })
  // 使用另外一个then 方法获取前一个then 方法返回的promise 的value ,发现与then 方法返回的promise 返回的value 一致
}).then(res=>{console.log(res);})