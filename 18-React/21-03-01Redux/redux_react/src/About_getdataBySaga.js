import React,{Component} from 'react'

import {
  addAction,fetcgSagaData
}from'./store/actionCreators.js'
import connect from'./utils/connect'


class About extends Component{
  constructor(props){
      super(props)
  }

  componentDidMount(){
    this.props.gethomedata()
  }

  render(){
      return(
          <div>
              <h2>
                  当前计数：{this.props.counter}
                  
              </h2>
              <button onClick={()=>{this.props.add_ten()}}>+10</button>
              <div>-------------------------------------------</div>
              
          </div>
      )
  }
}
  // 定义组件需要依赖的状态
  const mapStateToProps = state => {
    return{
      counter:state.counter
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      add_one:function(){
        dispatch(addAction(1))
      },
      // 传入获取数据的action 即fetcgSagaData
      gethomedata:function(){
        dispatch(fetcgSagaData())
      }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(About)
  // connect 函数本质上是一个高阶组件，我们使用它对当前组件进行加工，得到的加工完成的组件就是我们需要的组件，我们使用也不再使用原本的组件，而是使用加工完成的组件，即高阶组件的返回值
  // 所以我们可以看到，在About 文件中，我们导出的却不是About 而是connect 函数的返回值