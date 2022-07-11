import React, { PureComponent } from 'react'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

export default class SWTT extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      isOn:true
    }
  }
  render() {
    return (
      <div>
        <SwitchTransition mode="out-in">
                          {/* mode 属性用于决定元素更改的方式，具体使用可以现用现查 */}
          <CSSTransition  key={this.state.isOn?'on':'off'}
                          // 注意这里是修改了key 属性而非in 属性，因为我们并不是需要一个元素的消失与显示，而是需要一个元素与另外一个元素的交替显示
                          classNames='btn'
                          // classnames照常，我们也需要在对应的css文件中写入对应的css类
                          timeout={300}
                          appear>
            <button onClick={()=>{this.change()}}>{this.state.isOn?'on':'off'}</button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
  change(){
    this.setState({
      isOn:!this.state.isOn
    })
  }
}  
