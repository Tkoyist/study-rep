import React, { PureComponent } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import moment from'moment'

const { TextArea } = Input;

export default class CommenInput extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      text:'输入评论....'
    }
  }
  render() {
    return (
      <div>
        <TextArea rows={4} onChange={(e)=>{this.textChange(e)}} value={this.state.text}/>
        <div style={{margin:'20px'}}></div>
        <Button type="primary" onClick={()=>{this.add()}}>添加评论</Button>
      </div>
    )
  }

  textChange(e){
    this.setState({
      text:e.target.value
    })
  }

  add(){
    const info = {
      id:moment().valueOf(),
      avator:"https://joeschmoe.io/api/v1/random",
      nickname:'Tkoyist',
      datetime:moment(),
      content:this.state.text
    }
    this.props.submitComment(info)
    this.setState({
      text:''
    })
  }
}
