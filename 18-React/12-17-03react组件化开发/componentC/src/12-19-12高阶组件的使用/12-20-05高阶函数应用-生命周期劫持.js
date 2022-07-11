import React, { PureComponent } from 'react'

/**
 * 需求
 * 我们想使用高阶函数来获取组件的渲染事件
 * 在每个待处理组件的生命周期函数中添加我们想要的代码
 * 当然是使用高阶组件了
 */

 class CartPage extends PureComponent {
  render() {
    return (
      <div>
        购物车页面
        购物车页面
        购物车页面
        购物车页面
        购物车页面
        购物车页面
        购物车页面
        购物车页面
                                    
      </div>
    )
  }
}

function getTime(Com){
  return class extends PureComponent{
    componentWillMount(){
      this.time = Date.now()
    }
    componentDidMount(){
      console.log(Date.now()-this.time);
    }    

    render(){
      return(
        <Com/>
      )
    }
  }
}

const TimeCart = getTime(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeCart/>
      </div>
    )
  }
}
