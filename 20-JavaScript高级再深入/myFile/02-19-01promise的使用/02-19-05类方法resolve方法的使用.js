// 注意resolve 方法与回调当中的resolve 方法是不同的，它是属于promise 类当中的类方法，对它的使用与then 方法类似，直接使用一个promise对象调用该方法即可
// 它的作用是将一个普通数据转化为promise 对象当中的数据
const promise1 = Promise.resolve('aaaa')
promise1.then(res=>{
  console.log(res);
})
// 上面这个代码就是创建了一个promise 对象，该对象的状态为resolve 状态值为aaaa
// 等同于
const promise2 = new Promise((resolve,reject)=>{
  resolve('aaaa')
})