/**
 * 我们在一个事件响应函数中进行多个setstate 操作的情况下，这些操作会被合并，只有最后一个操作会生效
 * 
 * 在内部，对state的更新是将所有的setstate 放入了一个队列，然后依次将里面的操作取出执行
 * 但是每一次执行（每一次数据的合并 assign）都是将初值与修改值进行合并，所以如果后面还有操作，那么前面的操作就会被覆盖掉，只有最后一次修改会生效
 */
 import React, { Component } from 'react'
 export default class App extends Component {
   constructor(props){
     super(props)
 
     this.state={
       count:0
     }
   }
   render() {
     return (
       <div>
         当前计数：{this.state.count}
         <button onClick={()=>{this.add()}}>+</button>
       </div>
     )
   }
 
   add(){
    /**
     * 如果我们希望操作不被合并（应该说是覆盖）
     * 我们可以使用向setstate 中传入一个函数，使用函数来修改数据
     * 函数会接受来自react 的两个参数 preState,props 
     * 我们先不讨论后者，前者顾名思义，和reduce 一样，是上一次state修改结果的值，我可以在这里获取到上一次setstate修改后的state，然后进行处理，然后处理结果又会作为参数传入下一个setstate 的内部函数中
     * 
     * 底层是在循环处理state 处理之前先判断setstate 的参数的性质，如果是一个函数，就将当前的state（可能是上一次处理完成之后的state）传入函数的pre 参数当中，然后获取回调的返回值（处理之后的state）再进行合并操作
     * 如果是一个对象，则直接进行合并
     * 两种操作是可能混合出现的，但是在数据处理之前都会先判断，所以不影响
     * 
     * 前面说过，向setstate中传入对象的情况下，每一次都会将初值（preState）与修改过后的值（partialState）进行合并，而我们又说函数式serState 会修改preState，那么两者的混用的情况0都可以解决了
     * 但是react 还是会将所有的setstate 全部合并到一个队列链表之中，然后再异步执行0.= 
     */
    this.setState((pre,props)=>{
      return{
        count:pre.count+1
      }
    })
   }
 }
 