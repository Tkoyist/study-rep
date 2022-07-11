import React,{useEffect,useState} from 'react'

function Tab(){
  useLoggingLife()
  return <h1>TAB</h1>
}
function Center(){
  useLoggingLife()
  return <h1>CENTER</h1>
}
function Bottom(){
  useLoggingLife()
  return <h1>BOTTOM</h1>
}

// function loggingLife(){
//   useEffect(() => {
//     console.log('组件创建');
//     return () => {
//       console.log('组件销毁');
//     }
//   }, [])
// }
// 我们可以看到，在函数中直接使用hook 会导致直接报错，之前刚开始讲hook 的时候就有说过，是不能直接在函数中使用hook 的，hook 只能在组件的表层直接使用

// 这时候就可以引出自定义hook 了，我们前面有过定义，自定义hook 就是对逻辑代码的抽离，我们可以将各种hook 抽离出来，将其直接放到自定义hook 中使用
// 第一要素就是，自定义hook 必须使用 use 作为开头（并且格式要符合驼峰标识，即use 之后的第一个字母需要大写），其本质也是一个函数，不过它没有上面的问题
function useLoggingLife(){
  useEffect(() => {
    console.log('组件创建');
    return () => {
      console.log('组件销毁');
    }
  }, [])
}
// 现在我们就可以直接在子组件中使用自定义hook 了

export default function HookDemo01() {
  /**
   * 先说结论，自定义hook 本身只是对一些逻辑代码的抽取
   * 
   * 需求Demo
   *  现在我们要求让多个不同的组件在创建和销毁时分别打印
   *  最先想到的当然是useEffect 
   * 试试看
   *  首先，我们单独在每一个组件中都为其添加上useEffect 当然是没有问题的，但是肯定是过于麻烦了
   *  我们当然会想到将相关的逻辑代码使用函数抽离出来，然后在每个组件直接使用函数
   * 试试看
   *  
   */

  const [isshow, setisshow] = useState(true)
  return (
    <div>
      {isshow&&<div>
      <Tab/>
      <Center/>
      <Bottom/>
      </div>}
      <button onClick={e=>{setisshow(!isshow)}}>changeShow</button>
    </div>
  )
}

