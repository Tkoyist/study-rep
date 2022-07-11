import React, { createContext, PureComponent } from 'react'
import Number from'./21-09-01Hooks体验/类组件案例'
import NumberHook from'./21-09-01Hooks体验/hook组件案例 与 笔记'
import NumberHook2 from './21-09-01Hooks体验/hook组件加强版'
import MultiHookState from './21-09-02State Hook/21-09-03多个状态的使用'
import FunctionStateHook from './21-09-02State Hook/21-09-05State Hook中使用函数'
import HookChangeTitle from './21-09-06Effect Hook/21-09-07Effect Hook实现title的修改'
import EffectLife from './21-09-06Effect Hook/21-09-08使用hook模拟订阅与取消订阅'
import MultiEffectHook from './21-09-06Effect Hook/21-09-09多effect hook 同时使用'
import EffectHookSecondParam from './21-09-06Effect Hook/21-09-10第二个参数的作用'
import ContextDemo from './21-09-11useContext/21-09-12context原本使用'
import ContextHookDemo from './21-09-11useContext/21-09-13基本使用'
import UseReducerDemo from './21-10-01useReducer/21-10-02useReducer案例'
import UseCallbackDemo01 from './21-10-03useCallback/21-10-05正确范例'
import UseMemoDemo from './21-10-06useMemo/21-10-07针对复杂计算的性能优化'
import UseRefDemo from './21-11-01useRef/21-11-01引用DOM'
import ForwardRefDemo from './21-11-03useImperativeHandle/21-11-04forwardRef的使用'
import ForwardRefDemo01 from'./21-11-03useImperativeHandle/21-12-01useImperativeHandle的使用'
import HookDemo01 from './21-13-05自定义hook/21-13-06认识自定义hook'
import HookDemoScroll from './21-13-05自定义hook/21-13-08获取滚动位置'
import HookDemoStorage from './21-13-05自定义hook/21-13-09localStorage的存储'



export const userContext = createContext()
export const styleContext = createContext()

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <userContext.Provider value={{name:'tkoyist',age:21}}>
          <styleContext.Provider value={{fontSize:'20px',color:'red'}}>
            <h1>01</h1>
            <Number/>
            <NumberHook/>
            <NumberHook2/>
            <h1>02</h1>
            <MultiHookState/>
            <FunctionStateHook/>
            <h1>03</h1>
            <HookChangeTitle/>
            <EffectLife/>
            <MultiEffectHook/>
            <EffectHookSecondParam/>
            <h1>04</h1>
            <ContextDemo/>
            <ContextHookDemo/>
            <h1>05</h1>
            <UseReducerDemo/>
            <h1>06</h1>
            <UseCallbackDemo01/>
            <h1>07</h1>
            <UseMemoDemo/>
            <h1>08</h1>
            <UseRefDemo/>
            <h1>09</h1>
            <ForwardRefDemo/>
            <ForwardRefDemo01/>
            <h1>10</h1>
            <HookDemo01/>
            <h1>11</h1>
            <HookDemoScroll/>
            <HookDemoStorage/>
          </styleContext.Provider>
        </userContext.Provider>
      </div>
    )
  }
}
