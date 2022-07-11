/**
 * 需求
 * 在app 中有一个页面购物车，我们希望包装购物车组件，使其能检测当前的login 状态，如果为false 则不显示页面
 */
import React, { PureComponent } from 'react'

class CartPage extends PureComponent {
  render() {
    return (
      <div>
        购物车页面
      </div>
    )
  }
}

// 创建高阶组件函数
function loginJudge(Com){
  // 这么写是不行的，我们在最开始使用高阶组件函数处理组件的时候，是没有Com.props 这个属性的，是访问不到任何东西的，我们只能在jsx中访问到该属性
  // 因为当外部代码使用到jsx 的时候,代表着已经在使用返回的组件了,那么自然是已经有props 属性了
  // if(Com.props.isLogin){
    return class extends PureComponent{
      render(){
        return(
          <div>
            {this.props.isLogin?<Com/>:null}
          </div>
        )
      }
    }
  // }
  // else{
  //   return null
  // }
}

// 获取处理完成的组件
const LoginCartPage = loginJudge(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 我们希望使用购车页面时由主页传入一个属性，购物车根据该属性决定是否需要显示 */}
        <LoginCartPage isLogin={true}/>
        <LoginHome isLogin={true}/>
      </div>
    )
  }
}


// 多个组件可以使用高阶函数快速高效的修改
class Home extends PureComponent {
  render() {
    return (
      <div>
        主页面
      </div>
    )
  }
}

const LoginHome = loginJudge(Home)