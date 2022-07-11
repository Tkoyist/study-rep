import React from 'react'

// export default class App extends Component {
//     constructor() {

//     }
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }


// 函数式组件
// - 函数式组件是一个函数，不存在this
// - 但是没有内部状态，创建数据之后，每次执行函数都会刷新，所以每次渲染状态都相同（hooks可以改善，之后再讲）
export default function App(){
    return(
        <div>这是一个函数式组件

            <div>
                <div>
                    vscode 是世界上最好的编程环境！
                </div>
            </div>
        </div>
    )
}