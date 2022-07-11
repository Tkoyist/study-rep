import React, { PureComponent } from 'react'
import axios from'axios'

export default class App extends PureComponent {
  constructor(props){
    super(props)

    this.state={
      item:[]
    }
  }

  componentDidMount(){
    // axios({
    //   // 资源地址
    //   url:'http://httpbin.org/get',
    //   // url 参数，会在发送请求时直接添加到url中
    //   params:{
    //     name:'tkoyist'
    //   },
    //   // http 请求方法，默认是get，所以如果发送get 请求可以忽略此行代码
    //   method:'get'
    //   // 返回值是一个promise 对象
    // }).then(res=>{
    //   console.log(res);
    // }).catch(reason=>{

    // })

    // // 发送post 请求
    // axios({
    //   // 资源地址
    //   url:'http://httpbin.org/post',
    //   // post请求为保证数据的安全性，不会将参数添加到url 中，而是放到请求体中，所以我们不使用params 传递参数，而使用data传递
    //   data:{
    //     name:'tkoyist',
    //     method:"post"
    //   },
    //   // 请求方法
    //   method:'post'
    // }).then((res,reason)=>{
    //   console.log(res);
    // })

    // axios.get('http://httpbin.org/get',{
    //   params:{
    //     name:'tkoyist'
    //   }
    // }).then((res,reason)=>{
    //   console.log(res);
    // })
    
    // console.log('*--------------------');
    // const instance = axios.create({
    //   baseURL:'http://httpbin.org'
    // })
    // instance({
    //   url:'/get',
    //   params:{
    //     name:'instance'
    //   }
    // }).then(res=>{
    //   console.log(res);
    // })

    /**
     * Axios 拦截器
     * axios 已经为我们预定义了拦截器，我们可以通过拦截器在axios 请求发送的成功与失败发送或者响应的成功与失败接受的时候调用我们传入的回调函数
     *  
     */ 

    axios.interceptors.request.use(config=>{
      // 例如在请求发送接受到响应之前，显示一个loading组件
      // 在发送数据之前，将数据序列化

    },err=>{

    })

    axios.interceptors.response.use(res=>{
      // 对返回数据进行处理（例如直接获取data中的数据）
    },err=>{
      // 打印错误信息
    })
  }

  render() {
    return (
      <div>
        app
      </div>
    )
  }
}
