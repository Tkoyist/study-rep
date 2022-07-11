import React, { PureComponent,createContext } from 'react'
/**
 * context 和高阶组件组合使用，进行属性增强
 */

const AppContext = createContext({
  name:'tkoyist',
  age:'21'
})
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <AppContext.Provider value={{name:'kobe',age:'50'}}>
        <Home/>
        <About/>
        </AppContext.Provider>
      </div>
    )
  }
}




class Home extends PureComponent {
  render() {
    return (
        <AppContext.Consumer>
          {
            app=>{
              return(
                <div>
                  Home
                  {app.name}
                  {app.age}
                  {/* {app.region} */}
                </div>
              )
            }
          }
        </AppContext.Consumer>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {
          (app)=>{
            return(
              <div>
                About
                {app.name}
                {app.age}
              </div>
            )
          }
        }
      </AppContext.Consumer>
    )
  }
}
