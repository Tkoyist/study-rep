import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()

        this.state={
            count:0
        }

        console.log('执行了组件构造函数');
    }
    render() {
        console.log('执行了组件的render函数');
        return (
            <div>
                <button onClick={()=>{this.fun()}}></button>
            </div>
        )
    }

    fun(){
        this.setState({
            count:this.state.count+1
        })
    }

    componentDidMount() {
        console.log('执行了componentDidMount方法');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('执行了组件更新方法');
    }
    
    
}
