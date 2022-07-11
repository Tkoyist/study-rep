import React, { PureComponent } from 'react'

export default class index extends PureComponent {
  constructor(props){
    super(props)
    this.content = props.content
    this.state = props.state
    this.callback01 = props.callback01
    this.callback02 = props.callback02
  }

  contentFun(content) {
    if(typeof content  == 'string'){
      return (
        <div>
          {content}
        </div>
      )
    }
    return content()
  }
  render() {
    return (
      <div>
        <div>{this.state.tittle}</div>
        {this.contentFun(this.content)}
        <button className='btn01' onClick={(e)=>{this.callback01(e)}}>确定</button>
        <button className='btn02' onClick={(e)=>{this.callback02(e)}}>取消</button>
      </div>
    )
  }
}
