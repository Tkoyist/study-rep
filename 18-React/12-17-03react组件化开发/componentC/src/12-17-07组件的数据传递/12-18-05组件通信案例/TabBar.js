import React, { Component } from 'react'
// import './TabBar.css'

export default class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state={
      active:-1,
      items:['流行','新款','精选']
      
    }
  }
  render() {
    let changeShow = this.props.changeShow
    return (
      <div className='tabBox'>
        {
          this.state.items.map((item,index)=>{
            return(
              // 我们在这种情况下完全不需要通过事件响应函数做一次item 数据的周转，我们这里是定义箭头函数而不是执行箭头函数
              // 即使我们在这里的箭头函数的参数中写一个item 也只是相当于给箭头函数定义了一个形参，而不是传入了数据
              // 我们完全可以直接在箭头函数内部使用需要的参数,反正箭头函数的定义域没有问题
              <div onClick={e=>{changeShow(item);this.state.active=index}} className={this.state.active === index?'active':''}>
                {item}
              </div>
            )
          })
        }
      </div>
    )
  }
}
