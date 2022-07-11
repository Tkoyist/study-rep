import Vue from 'vue'
import App from './App.vue'
import axios from"axios"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// 以下均是使用全局axios，之后我们全部使用单独创建的axios 实例

// 创建Axios 实例
// 参数是一个对象，对象中存储基本设置
// const instance1 = axios.create({
//   baseURL:'http://152.136.185.210:7878/api/hy66',
//   timeout:5000
// })

// // 使用创建的实例,传入相应的参数，会创建一个数据请求
// instance1({
//   url:"/home/multidata",
//   params:{
//     type:'pop',
//     page:1

//   }
// }).then(res=>{
//   console.log(res);
// })


// 使用导入的request 模块内部的axios 发送请求

// import {request} from"./network/request"

// request({
//   url:"/home/multidata",
// },
// ()=>{
//   console.log("成功运行拿到数据");
// },
// ()=>{
//   console.log("拿不到数据");
// }
// )

// 使用导入的request 模块内部的axios 发送请求2.0
// 调用request 返回一个Promise 对象，我们可以在这里为其挂载then 和catch

import {request} from"./network/request"

request({
  url:"/home/multidata",
})
.then(res=>{
  console.log("成功拿到数据");
  console.log(res);
})
.catch((err)=>{
  console.log("没能成功拿到数据");
})




// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
//   // methed:'post'
//   // 通过该选项确定使用什么方式获取数据post 或 get
// }).then(res=>{
//   console.log(res);
// })
// axios 会返回一个Promise 对象，所以我们直接为其添加.then(),
// 注意取回的Promise 内部已经调用resolve 方法了

// axios({
//   url:"http://123.207.32.32:8000/home/data?type=sell&page=1%27",
//   // 在使用get 请求的时候，可以直接在url 中传入参数 ?之后即是传入的参数
// }).then(res =>{
//   console.log(res);
// })

//   // 也可以使用params 属性传入，该属性指向一个对象
// axios({
//   url:"http://123.207.32.32:8000/home/data?type=sell&page=1%27",
//   // 框架内部会自动对params 上的数据进行拼接，拼接到url 中
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res =>{
//   console.log(res);
// })

// 尝试传入多个并发请求，使用axios 的all 方法

// 将共同的配置抽离出来
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
// // 网页地址
// axios.defaults.timeout = 5000
// // 设置全局响应事件，发送请求后开始计时，过时未收到返回信息会报错，单位 ms

// axios.all([
//   axios({
//     url:"/home/multidata"
//     // 添加了baseurl 之后，我们定义的url 信息会直接添加到baseurl 之后
//   }),
//   axios({
//     url:"/home/data",
//     params:{
//       type:'sell',
//       page:5
//     }
//   })
// // ]).then((res) => {
// //   console.log(res);
// //   console.log(res[0]);
// //   console.log(res[1]);
// //   // 并发请求的返回值会被放到一个数组里返回
// // })

// // 我们也可以使用axios.spread 方法分别获取数据
// ]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
//   // 这样就能分开获取数据
// }))