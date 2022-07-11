import React, { PureComponent,createRef} from 'react'
/**
 * vue 里面似乎也有ref 这个属性
 * 确实是有的，在vue 中，我们是不能在父组件中直接获取到某个子组件的，但是如果给子组件绑定一个ref 属性，我们就可以在vue实例的$refs 属性中通过ref 的值访问到子组件对象，进而获取到子组件的数据，方法等
 * 
 * react 当中也是可以为一个元素直接绑定ref 属性，并赋值为一个string 类型的数据
 * 然后我们就能在该组件的父组件中使用refs 属性访问到ref 属性集合，再通过元素的ref 属性值直接访问到具体的dom 元素
 */

/**
 * react 的ref 有三种使用方式
 * - 字符串方式
 * 为一个dom 的ref 属性绑定一个字符串，我们可以直接在绑定ref属性的元素的父元素中使用refs.ref属性值  的方式访问到dom
 * - 对象方式
 *  * 先导入react 中的createRef 方法
 *  * 再为当前的组件创建一个属性，属性的值即为createRef创建出来的一个对象，用于保存ref
 *  * 将创建出来的对象绑定给需要组件的ref 属性
 *  * 在需要的地方，直接通过创建的属性访问dom（我们创建的对象已经是父组件的属性了，是可以直接使用的）
 * - 函数方式
 *  * 本质上和对象方式相同，我们会将需要的元素的dom 挂载到父组件中，作为父组件的属性保存，只是挂载方式与对象方式不同
 *  * 函数方式的挂载是为ref 传递一个函数，react 会自动调用该函数，并将当前元素的dom 作为参数传入该函数，我们就可以在函数中将dom 赋值为父组件的属性
 * 
 * 
 * 第一种方式已经不推荐了，推荐使用对象方式
 * 我们可以使用ref 访问到组件内部的组件，以及组件内部的组件的属性和方法
 * 不能在函数式组件使用ref，不过函数式组件一般也不需要获取函数式组件（即没有属性，又没有方法，没有意义）
 * 前面还在想父组件怎么传递事件给子组件，这里就来方法了
 */
export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.objectRef = createRef()
    this.functionRef = null
    
  }
  render() {
    return (
      <div>
        {/* 字符串方式绑定 */}
        <div ref='string'>hello ref</div>

        {/* 对象方式绑定 */}
        <div ref={this.objectRef}>hello ref</div>

        {/* 函数方式绑定 */}
        <div ref={(Ref)=>{this.functionRef = Ref}}>hello ref</div>

        <button onClick={()=>{this.change()}}>change</button>
      </div>
    )
  }

  change(){
    this.refs.string.innerHTML = 'hello string'

    this.objectRef.current.innerHTML = 'hello object'

    this.functionRef.innerHTML = 'hello function'
  }
}
