import React,{Component} from 'react'


// 在其他的js文件中创建组件并导出，就可以在其他文件中使用该组件了
export default class App extends Component{
    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

    render(){
        return(
            <div>
                <h2>
                    当前计数:{this.state.count}
                </h2>

            </div>
        )
    }
}