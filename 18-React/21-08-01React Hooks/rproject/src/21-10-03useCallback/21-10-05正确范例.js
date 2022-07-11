import React,{useState,useCallback,memo} from 'react'

// const Hybutton = (props)=>{
//   console.log(props.title + '重新渲染');
//   return <button onClick={props.add}>+1</button>
// }
/**
 * 在当前的情况下，其实show 的改变对 hybutton 来说并没有任何意义，但是由于hybutton 是 UseCallbackDemo01的子组件，当UseCallbackDemo01 组件重新渲染的时候就会导致hybutton 也重新渲染
 * 这显然是我们不想要的，所以使用memo 函数，将当前的函数组件包装成为pure 组件
 */
 const Hybutton = memo((props)=>{
  console.log(props.title + '重新渲染');
  return <button onClick={props.add}>+1</button>
})
/**
 * 包装成为pure 组件之后，我们发现，add01 依然会在UseCallbackDemo01 重新渲染的时候都会重新渲染，
 * 为什么呢？传入props的数据并没有发生改变啊？
 * 因为我们将add01 函数传入了，而add01 函数在UseCallbackDemo01 组件每次刷新的时候add01 函数都是一个新创建的函数了，对于memo 来说，就是传入props 的add 属性的属性值已经改变了，所以add01 依然会每次刷新
 * 而与之对应的add02，由于add2 函数使用了useCallback 进行加工，所以传入 hybutton02 的add 属性的数据是一直不变的，所以memo 会认定其无需重新渲染
 * 
 * 这才是useCallback 的正确使用方式
 * 即在将父组件的函数作为参数传递给子组件使用时，为了避免不必要的刷新，使用useCallback 对传入子组件的函数进行加工，这样在其他数据不改变的前提下
 * memo或者purecomponent 才会识别子组件无需更新，而我们节省的性能就来自于memo 和pureComponent 的正确运行
 * 
 * 而不是来自于函数不刷新
 * 因为使用了useCallback 进行处理的函数虽然本质上没有刷新，但是从空间上来说，仍然是需要在使用的位置创建一个以原函数为蓝本的匿名函数的，空间不会有优化，甚至由于需要保存原函数状态，反而会更消耗性能
 * 而对于时间来说，其实两者差别不大
 * 所以我们才会说前面文件中的使用方式是错误的
 * 
 * **换句话说，useCallback 的使用就是为了解决memo和pureComponent 在子组件接受了来自父组件的函数时无法根据我们的需求正确判断子组件是否需要更新这一问题而产生的hook
 * 本身是对memo 和 pureComponent 的功能优化，而为什么要使用这个方式，而不是更新memo和pureComponent 呢，天每一个属性都深层比较（原本的浅层比较只是对函数的地址的比较，深层比较就要求对函数内容进行比较了），那性能消耗太大了，得不偿失了属于是
 * 
 * 
 */

// ------------------总之useCallback 用于包装那些会被传入子组件中使用的，在父组件中定义的函数，用于确保 memo 和 pureComponent 按照我们的想法运行


export default function UseCallbackDemo01() {
  console.log('UseCallbackDemo01 重新渲染');
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const add = () =>{
    console.log('function01');
    setCount(count+1)
  }

  const add2 = useCallback(
    () => {
      console.log('function02');
      setCount(count+1)
    },
    [count],
  )

  return (
    <div>
      {count}
      <Hybutton title={'add01'} add={add}/>
      <Hybutton title={'add02'} add={add2}/>
      <button onClick={e=>{setShow(!show)}} >切换</button>
    </div>
  )
}
