import React, { Component } from 'react'
// import './main.css'
import TabBar from './TabBar'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      content:'hello Tkoyist!'
    }
  }
  render() {
    return (
      <div className='box'>
        <TabBar changeShow={(text)=>{this.show(text)}}/>
        <div className='content'>{this.state.content}</div>
      </div>
    )
  }

  show(text){
    this.setState({
      content:text
    })
  }
}
