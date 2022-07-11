import React,{Component} from 'react'
// import store from'./store/index'

// 导入actionCreators 中我们所需要的action 构造方法
import {
  addAction
}from'./store/actionCreators.js'
import connect from'./utils/connect'


// 尝试在react 组件中使用redux
function About(props){
  return(
    <div>
                <h2>
                    当前计数：{props.counter}
                </h2>
                {/* 使用事件响应函数，在事件响应函数中通过store 的dispatch 方法修改state */}
                <button onClick={()=>{props.add_one()}}>+1</button>
            </div>
        )
      }

  // 定义组件需要依赖的状态
  const mapStateToProps = state => {
    return{
      // conuter:store.getState().counter
      // 这样写是没有错误的，但是我们不这样写，因为我们希望需要导入store 的文件越少越好，依赖于store 的文件越少越好，如果我们使用上面的方式，那么每个需要使用store 的文件中
      // 都需要导入store 这样显然是效率较低的，我们直接将mapStateToProps 定义为一个函数，在connect 文件中获取store，并将store中的state作为参数传入mapStateToProps
      // 就能在connect 中根据传入的数据确定需要的state，并在connect 中将其作为参数导入组件的props 中，使其可以通过props 直接访问到state
      counter:state.counter
    }
  }

  // 定义组件需要的依赖状态的修改函数
  const mapDispatchToProps = dispatch => {
    // 与mapStateToProps 类似，为了减少对store 文件的依赖，使用函数形式接受dispatch，将所有组件与store.dispatch 的联系都放到connect 中统一处理
    return{
      add_one:function(){
        dispatch(addAction(1))
        // 由于对数据的操作方式和操作的值需要组件自行决定，所以action 的创建和导入还是需要在组件声明的页面导入和创建，即actioncreators 包的导入是无法省略的
      }
    }
  }

  // 我们调用connect 方法，该方法接受两个参数，分别对应状态和函数，然后返回一个高阶组件，该高阶组件接受需要使用redux 的组件，将其包装之后直接返回
  // 返回的组件经过高阶组件的处理，已经将redux 中需要的状态和方法作为参数传入了当前组件的props 中，此时的组件中的 prop 中的数据访问才有意义
  export default connect(mapStateToProps,mapDispatchToProps)(About)
  // 由于我们之后需要使用的组件都是处理完成之后的组件，所以直接返回connect()() 的返回值即可