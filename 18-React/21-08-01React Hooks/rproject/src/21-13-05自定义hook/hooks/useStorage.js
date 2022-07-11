import {useEffect,useState} from'react'
export default function useName(inputName){
  const [name, setname] = useState(()=>{
    return window.localStorage.getItem("name")
  })

  useEffect(() => {
    // window.localStorage.setItem('name',inputname)
    // 上面这种写法有用才有鬼了，inputName 是我们调用useName 时传入的数据，但是我们在组件中真正使用useName 的时候是没有传入参数的
    // 而我们修改name 使用的也是我们传递出去的setname 函数
    // setname 修改name -> 页面刷新 -> 进入useEffect -> 发现绑定的name 数据发生了变化 -> 函数执行 -> 修改storage
    window.localStorage.setItem('name',name)
  }, [name])

  /**
   * 刚才一直在想，怎么样能即返回数据，又返回处理数据的函数，想半天没想出来，一看老师代码，妈的不就是useState 吗，返回一个数组，两个都放里面不就得了
   */
  return [name,setname]
}