import React, { PureComponent,Fragment } from 'react'
/**
 * fregment
 * 我们知道一个组件的返回值是只能有一个根组件，也必须要一个根组件的
 * 但是如果我们确实不希望存在根组件，就可以导入react 包中的 fragment 类，将其作为根组件包裹组件内部的jsx 代码
 * react 读取到fragment 不会在dom 中添加，而是会直接依次添加fragment 的内部jsx
 * 我觉得可能会用于例如css 选择器中的层级选择，如果有组件的根元素在，我们是很难选择到组件内部的dom 的，但是fragment 的出现就解决了这个问题
 */
export default class App extends PureComponent {
  constructor(props) {
    super(props)
    
    this.state={
      name:'tkoyist'
    }
  }
  render() {
    return (
      <Fragment name={this.state.name}>
        {/* fragment 是可以传入数据的 */}
        <div>1221321132</div>
        <div>1221321132</div>
        <div>1221321132</div>
        <div>1221321132</div>
        <div>1221321132</div>
        <div>1221321132</div>
      </Fragment>
      // 在dom 中是没有fragment 元素的，该元素根本就没有渲染
    )
  }
}
export default class App extends PureComponent {
  constructor(props) {
    super(props)
    
    this.state={
      name:'tkoyist'
    }
  }
  render() {
    return (
      <>
        {/* 空标签是fragment的一个语法糖，但是空标签不能传入数据 */}
        <div>1221321132</div>
        <div>1221321132</div>
        <div>1221321132</div>
        <div>1221321132</div>
        <div>1221321132</div>
        <div>1221321132</div>
      </>
    )
  }
}
