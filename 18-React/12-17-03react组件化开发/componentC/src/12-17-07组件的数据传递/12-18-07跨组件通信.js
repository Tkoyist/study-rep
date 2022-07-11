import React, { Component } from 'react'
/**
 * 当跨越多层组件进行通信的时候，一层一层的传递数据不仅效率极低，而且十分麻烦
 * vue 中出现了vuex 事件总线用于状态管理，react 当中当然也会有类似的功能实现
 * 
 * context 语法
 */


export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      msg:'来自App 组件的数据'
    }
  }
  render() {
    return (
      <div>
        {/* <Son msg={this.state.msg}></Son> */}
        {/* 使用层层转运的方式，将数据一层一层的传输到需要的位置，代码量大，且复杂，且耦合度高（明明只是两个组件的事情却牵扯到了这么多无关组件，如果发生变故，那么这些无关组件都要被影响） */}
        
        <Son {...this.state}/>
        {/* 进行一点优化之后，使用了jsx 的语法糖（属性拓展），注意这是jsx 的语法糖，虽然看起来和对象的结构很像，但是本质上是不同的，在这里使用对象的结构，子组件接受到的数据是一系列变量，是无法解析的 */}
        {/* 这个语法称之为Spread Attributes */}

        {/* 这种方法虽然省去了不少时间，但是依然麻烦，而且耦合度依然很高，我们还是需要一个和vuex功能相同的API */}
        {/* 由此隆重推出context */}

      </div>
    )
  }
}


class Son extends Component {
  render() {
    return (
      <div>
        {/* <GSon msg={this.props.msg}/> */}

        <GSon {...this.props}/>
      </div>
    )
  }
}

class GSon extends Component {
  render() {
    return (
      <div>
        {this.props.msg}
      </div>
    )
  }
}