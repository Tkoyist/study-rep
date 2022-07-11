import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            // 我们之前说一个render函数最外层只能有一个元素，但是如果我们确实需要同时返回多个元素，那么我们可以将多个代码片段放到一个数组中
        [
            <div>1111</div>,
            <div></div>
        ]
            )
    }
}
