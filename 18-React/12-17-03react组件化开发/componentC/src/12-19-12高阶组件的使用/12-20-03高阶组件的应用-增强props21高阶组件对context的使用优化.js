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
        <DataHome/>
        <DataAbout/>
        </AppContext.Provider>
      </div>
    )
  }
}


function withData(Com){
  return class C extends PureComponent{
    render(){
      return(
        <AppContext.Consumer>
          {
            app=>{
              return <Com {...app} {...this.props}/>
            }
          }
        </AppContext.Consumer>
      )
    }
  }
}


class Home extends PureComponent {
  render() {
    return (
     <div>
       Home
       <div>{this.props.name}</div>
       <div>{this.props.age}</div>
     </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
     <div>
       About
       <div>{this.props.name}</div>
       <div>{this.props.age}</div>
     </div>
    )
  }
}

const DataHome = withData(Home)
const DataAbout = withData(About)