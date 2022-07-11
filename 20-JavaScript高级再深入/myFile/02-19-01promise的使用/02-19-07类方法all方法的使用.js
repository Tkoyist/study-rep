// 接受一个数组作为参数，数组当中包含多个promise 对象，all 方法会同时执行这多个promise 对象内部的异步任务
// 执行所有的异步任务，知道数组当中的promise 都变成fulfiled 状态的时候，才会统一将结果返回，返回的结果按照传入promise的顺序放入数组当中


// all 方法，当我们使用all 方法，将多个promise 作为参数传入的时候，如果传入的所有的promise 都是filfuled 状态，那么就会直接获取到所有promise的返回值
// 否则就会等待，知道所有的promise 都变成fulfiled 状态，就返回所有promise的value，或者某个promise 变成了rejected 状态，那么all 方法就会是rejected 状态
let p1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('aaa')
  }, 0);
})
let p2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('bbb')
  }, 0);
})

let p3 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('cccc')
  }, 2000);
})


setTimeout(() => {
  console.log('ok');
  p3.then(res=>{
    console.log(res);
  })
}, 2000);

let pAll = Promise.all([p1,p2,p3])

setTimeout(() => {
  console.log('ok');
  pAll.then(res=>{
    console.log(res);
  })
}, 4000);

// 我们在代码中使用new 创建一个promise 对象时，会将异步任务代码放入Promise 方法当中，当我们运行代码时，读取到了创建Promise 对象的代码，就会直接执行其内部的异步任务了
// 哎呀 promise 内部不就是直接执行executor 函数的吗，promise 的存在时避免有些地方在异步任务还没有执行完毕的时候就直接使用异步任务的返回值，这样肯定是获取不到正确的结果的
// 所以我们在需要使用异步任务返回值的位置直接使用then 方法，使用then 方法的时候，如果promise 内部的异步任务还没有执行完成，那么就会等待，直到异步任务执行完毕，获取到正确的返回值之后，才会执行then 当中的代码