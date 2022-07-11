import React,{Component} from 'react'
import store from'./store/index'
import About from'./About_getdataBySaga'
import {addAction} from'./store/actionCreators'

// 唯一需要发生变化的地方，就是使用react_redux 中的connect，而使用方法与我们之前自己定义的connect 是完全相同的
import {connect} from'react-redux'

// react-redux 的原理就是通过context 进行数据共享，在根组件中获取所有store 并共享到所有子组件中


class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>
                    当前计数：{this.props.counter}
                </h2>
                <button onClick={()=>{this.props.add_ten()}}>+10</button>
                <div>-------------------------------------------</div>
                <About/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
  return {
    counter:state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return{
    add_ten:function(){
      dispatch(addAction(10))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)