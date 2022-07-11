import { PureComponent } from "react"
import store from "../store"

// 该函数用于将组件与redux 直接联系起来，而减少重复代码的书写
export default function connect(mapStateToProps,mapDispatchToProps){
  // 该函数返回一个高阶组件,高阶组件函数会将传入的组件进行处理，在处理过程中将组件需要用到的redux 中的状态与方法都传递给需要使用redux 的组件中
  return function (WarpComponent){
    return class extends PureComponent{
      constructor(props) {
        super(props)

        this.state={
          storestate:mapStateToProps(store.getState())
        }
      }

      componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
          this.setState({
            storestate:mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount(){
        this.unsubscribe()
      }

      render(){
        return(
          <WarpComponent  {...this.props} 
                          {...mapStateToProps(store.getState())}
                          {...mapDispatchToProps(store.dispatch)}/>
          // 这里获取到的组件就是我们需要进行redux 绑定的组件，我们可以直接在这里对其进行处理，将需要的状态数据和方法作为参数传入
        )
      }
    }
  }

}