import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    
    this.state={
      fruit:'apple'
    }
  }
  render() {
    return (
      <div>
        <select
          onChange={(e)=>{this.selectChange(e)}}
          value={this.state.fruit}>
          <option value="apple">苹果</option>
          <option value="banana">香蕉</option>
          <option value="orange">橘子</option>
        </select>
      </div>
    )
  }
  selectChange(e){
    console.log(e.target.value);
    this.setState({
      fruit:e.target.value
    })
  }
}
