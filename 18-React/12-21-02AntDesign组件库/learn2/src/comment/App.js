import React, { Component, PureComponent } from 'react'
import CommenInput from'./components/CommenInput'
import CommentItem from'./components/CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      conmentList:[]
    }
  }
  render() {
    return (
      <div style={{width:'500px',margin:'50px auto'}}>
        {
          this.state.conmentList.map((item,index)=>{
            return <CommentItem info={item} key={item.id} removeItem={(e)=>{this.removeItem(index)}}/>
          })
        }
        <CommenInput submitComment={(info)=>{this.submitComment(info)}}/>
      </div>
    )
  }

  submitComment(info){
    this.setState({
      conmentList:[...this.state.conmentList,info]
    })
    console.log(info);
  }

  removeItem(index){
    console.log(index);
    this.setState({
      conmentList:this.state.conmentList.filter((item,indey)=>{if(index==indey)return;return item})
    })
  }
}
