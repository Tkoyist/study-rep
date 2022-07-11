import React,{Component} from 'react'
import store from'./store/index'

// 导入actionCreators 中我们所需要的action 构造方法
import {
  addAction
}from'./store/actionCreators.js'


// 尝试在react 组件中使用redux
export default class About extends Component{
    constructor(props){
        super(props)
        
        this.state={
          counter:store.getState().counter
        }
    }

    componentDidMount(){
      // 在组件的生命周期函数中为组件添加store 中的依赖数据的监听，当依赖数据发生改变时调用监听回调更新state(从而更新视图)
      store.subscribe(()=>{
        // 当store 中的状态改变时会调用当前的回调函数
        this.setState({
          counter:store.getState().counter
        })
      })
    }

    render(){
        return(
            <div>
                <h2>
                    当前计数：{this.state.counter}
                </h2>
                {/* 使用事件响应函数，在事件响应函数中通过store 的dispatch 方法修改state */}
                <button onClick={()=>{this.add_one()}}>+1</button>
            </div>
        )
    }

    add_one(){
      // 使用导入的action 构造方法，传入参数构造出我们想要的action对象
      // 通过store 中的dispatch 方法，传入action 对象修改store 中的state
      store.dispatch(addAction(1))
      // 但是由于我们没有使用setstate 方法修改state，甚至没有修改state，只是修改了store 中的state，所以当前并不会引起视图更新
      // 想要视图更新就必须调用setState 方法
      // 我们的处理方案是为当前组件添加监听（在生命周期函数中添加监听）
      // 在监听中修改当前组件的state，每当store 中的state被修改时，就调用我们预先传入的监听回调，在回调中更新当前组件的state属性
      
    }
}