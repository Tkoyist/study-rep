// 导入axios 
import axios from"axios"

// 创建发送请求的实例，将一些基本设置在这里设置好
// 在外部需要发送请求的时候，直接导入本文件，使用我们在这里定义好的请求函数即可

// 我们在这里只负责发送请求，发送请求之后成功或失败的处理结果都应由外部决定
// 我们提出两个方案 
// 1。在外部将成功失败处理函数作为回调函数传入我们在本文件中定义then函数，并根据需求调用两个回调函数 

// 创建axios 实例，确定基本配置,注意这里创建不能使用new 去创建，而要使用axios.create 创建
// 使用create 函数创建出来的实例是一个函数，我们就可以在其他地方调用该函数发送请求

// config 包含了 params 中需要的数据
// export function request(config,succes,failure){
//     // 我们也可以将这三个需要的数据打包成一个对象
//     const instance1 = axios.create({
//         baseURL:'http://152.136.185.210:7878/api/hy66',
//         timeout:5000
//     })

//         instance1(config)
//         .then(()=>{
//             succes()
//         })
//         .catch(()=>{
//             failure()
//         })
// }


// 2.使得函数返回一个Promnise 对象
export function request(config){
    // 返回一个Promise 对象
    // return new Promise((resolve,rejected)=>{
        // 传入Promise对象的参数是一个有两个参数的函数
        // 两个参数也是函数，调用resolve 会执行then,调用rejected 会执行catch
        // then catch 都是挂载在Promise对象之下的
        const instance = axios.create({
            baseURL:'http://152.136.185.210:7878/api/hy66',
            timeout:5000
        })

        // 创建拦截器
        instance.interceptors.request.use(
        config =>{
            console.log("成功拦截请求成功发送");
            return config
        },
        err => {
            console.log("请求发送失败被拦截");
        }
        )

        // 真正发送网络请求的地方
        // instance(config)
        // .then(res=>{
        //     resolve(res)
        // })
        // .catch(err=>{
        //     rejected(err)
        // })
        // 我们在这里是在用蠢方法，instance 本身就是返回一个Promise 对象
        // 该对象存在then catch 两个方法，网络请求成功或失败会调用这两个方法
        // 然后我们又在这个内部的Promise 对象中的then 和 catch 函数内部
        // 加上外部传入的成功和失败方法，相当于我们在这里创建的Promise 只是一个毫无意义的中转站
        // 我们直接将instance 的返回值返回，在外部为其添加.then 和 .catch 
        // instance 内部请求成功和失败的时候会自动调用外部定义的then 和 catch

        // instance 的返回值就是一个Promise！
        // so
        return instance(config)


    // })
}