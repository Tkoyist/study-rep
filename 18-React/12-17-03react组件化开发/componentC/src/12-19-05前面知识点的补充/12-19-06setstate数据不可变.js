import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      friends:[
        {name:'lili',age:21},
        {name:'lucy',age:21},
        {name:'tkoyist',age:21}
      ],
      counter:0
    }
  }

  /**
   * 现在来说说为什么不直接对state进行修改
   * 假设我们现在需要进行性能优化，使用shouldComponentUpdate 进行判断
   */
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState.friends !== this.state.friends)
  //     return true
  //   return false
  // }
  // 如上面的代码所示，如果我们使用这种方式进行了性能优化，会发现之后怎么都会刷新
  // 因为我们使用旧的state 中的对象直接修改传给了新的state 就像浅拷贝一样，本质上其实新旧state中的数据是指向同一个对象的，判断永远都是相等为true
  // 所以我们对引用类型进行处理的时候要对其进行深拷贝，使用深拷贝的数据修改赋值

  // 即使state中的存储的数据不是对象，而是普通数据，我们直接修改（例如使用++ 代替+1）数据，依然会发现修改前后state内部的属性值完全相等，虽然过程不同，但结果是完全一致的

  // ****但是如果我们使用普通的Component 进行操作，不使用PureComponent 进行优化，或者是不使用shouldComponentUpdate，那么也不会存在区别
  // 我感觉可能会影响setState 的合并
  

  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        {
          this.state.friends.map((item,index)=>{
            return(
              <div key={item.name}>
                <div>姓名：{item.name}---年龄：{item.age}</div>
                <button onClick={()=>{this.add(index)}}>+1</button>
              </div>
            )
          })
        }
        <button onClick={()=>{this.new()}}>new</button>
        计数：{this.state.counter}
        <button onClick={()=>{this.addCounter()}}>++</button>
      </div>
    )
  }
  
  add(index){
    console.log(this.state.friends[index].age);
    this.state.friends[index].age++
    this.setState({
      friends:this.state.friends
    })
  }

  new(){
    const Fri = {name:'tom',age:88}
    this.setState({
      friends:[...this.state.friends,Fri]
    })
  }
  /**
   * 经过验证，果然和猜想的一样，setState操作的合并也被阻止了，因为每一次调用setState 的时候都修改了prestate 的值，在setState 链表中，每一次的prestate 的值都在改变
   * 换句话说，原本的情况下prestate 的值在每一次setState 操作当中是不变的，都指向一个state 对象，但是我们在下面这种直接修改state 值的情况下每一次都将prestate指向的state对象的数据改变了，所以下一次拿到的prestate 的值和最初的prestate 的值就是不同的了
   */
  addCounter(){
    console.log(this.state.counter);
    this.setState({
      counter:++this.state.counter
    })
    this.setState({
      counter:++this.state.counter
    })
    this.setState({
      counter:++this.state.counter
    })
    this.setState({
      counter:++this.state.counter
    })
  }
}
