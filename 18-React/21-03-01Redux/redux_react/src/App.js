import React,{Component} from 'react'
import store from'./store/index'
import About from'./About_getdataBySaga'
import {addAction} from'./store/actionCreators'
// 导入需要的action构造器


// 在其他的js文件中创建组件并导出，就可以在其他文件中使用该组件了
export default class App extends Component{
    constructor(props){
        super(props)

        this.state={
          // 1 在组件state 定义的最初就将初值赋值为store 中的状态
          counter:store.getState().counter
        }
    }

    componentDidMount(){
      // 2 在组件的事件监听函数中订阅store 中的状态变化
      // 并获取到订阅的返回值（订阅卸载），在组件生命周期结束的时候取消订阅，我们将其作为组件的属性进行保存，方便之后的使用
      this.unsubscribue=store.subscribe(()=>{
        // 在监听回调中设置，当store 中的状态发生改变时，令组件的状态也相应的改变，所以需要借助setState()
        this.setState({
          counter:store.getState().counter
        })
      })
    }

    // 注意这里是 Will Un mount
    componentWillUnmount(){
      // 4 通过前面获取到的取消订阅的函数取消订阅
      this.unsubscribue()
    }

    render(){
        return(
            <div>
                <h2>
                    当前计数：{this.state.counter}
                </h2>
                <button onClick={()=>{this.add_ten()}}>+10</button>
                <div>-------------------------------------------</div>
                <About/>
            </div>
        )
    }

    add_ten(){
      // 3 通过导入的action 构造器构造我们需要的action,并传入store 中的dispatch 方法用于修改store
      store.dispatch(addAction(10))
    }
}