import React, { PureComponent } from 'react'
/**
 * 高阶函数：
 *  接受一个函数作为参数，或者返回值是一个参数的函数
 * 高阶组件：
 * 接受一个组件作为参数，返回值是一个组件的函数
 * 没错，高阶组件的本质是一个函数
 * 一般是用于对某个组件进行加工，然后返回加工完成的新组件
 * 
 * 由于函数的返回值是一个组件，所以我们可以直接使用函数的返回值作为组件使用
 * - 创建待处理组件
 * - 创建高阶组件
 * - 将待处理组件放入高阶组件并获取返回值（处理完成的组件）
 * - 使用处理完成的组件
 */
export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 向高阶组件传递props */}
        <SSon name='tkoyist'/>
      </div>
    )
  }
}


class Son extends PureComponent {
  render() {
    return (
      <div>
        son组件内部的信息
        {this.props.name}
      </div>
    )
  }
}

// 创建高阶组件
// 这个函数就是一个高阶组件，我们可以使用它对组件进行加工
function AfterSon (SonCom){
  return class yes extends PureComponent{
    render(){
      return(
      // 我们向高阶组件传递数据的情况下，本质是传递到了当前组件（高阶组件函数返回值组件）中，但是我们当然是希望传递到高阶组件中的待处理组件中的
      // 这里就可以使用前面的 {...} 语法，直接将数据全部传递给子组件
      <SonCom {...this.props}/>
      )
    }
  }
  
}

// 向高阶组件中传入待处理组件并获取处理完毕的组件，之后就可以直接使用这个组件了
const SSon = AfterSon(Son)