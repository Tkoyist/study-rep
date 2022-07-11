import React, { Component } from 'react'

// 定义组件，定义完成之后就可以在对应的作用域内使用组件
function Header(){
    return (
        <div>我是头部</div>
    )
}
function Main(){
    return (
        <div>我是主体</div>
    )
}

export default class App extends Component {
    render() {
        return (
            <div>
                App组件，现在尝试在其内部使用多个组件
                在组件中使用组件，没有vue 中繁琐的过程，无需注册，直接通过组件标签使用即可 
                既然存在父子组件的关系，那必然存在父子组件间的数据传递

                <Header/>
                <Main/>
            </div>
        )
    }
}
