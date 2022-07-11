import React, { PureComponent } from 'react'

export default class Number extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      counter:0
    }
  }
  render() {
    return (
      <div>
        当前计数:{this.state.counter}
        <h2></h2>
        <button onClick={e=>{this.inc()}}>+</button>
        <button onClick={e=>{this.dec()}}>-</button>
      </div>
    )
  }
  inc(){
    this.setState({
      counter:this.state.counter+1
    })
  }
  dec(){
    this.setState({
      counter:this.state.counter-1
    })
  }
}
