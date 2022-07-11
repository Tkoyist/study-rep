import React, { PureComponent } from 'react'
/**
 * 增强props
 * 通过高阶组件，在中间截取传递给被修改组件的props 数据，并对截取到的数据进行增强或者修改
 */
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <RegHome name='home' age='21'/>
        <RegAbout name='about' age='2222'/>
      </div>
    )
  }
}

function addReg(Com){
  return class extends PureComponent{
    render(){
      return(
        <Com {...this.props} region='china'/>
      )
    }
  }
}


class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
        {this.props.name}
        {this.props.age}
        {this.props.region}
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        About
        {this.props.name}
        {this.props.age}
        {this.props.region}
      </div>
    )
  }
}
const RegHome = addReg(Home)
const RegAbout = addReg(About)