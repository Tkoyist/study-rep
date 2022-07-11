import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import'./TG.css'

export default class TG extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      names:['jkl','asd','qwe']
    }
  }
  render() {
    return (
      <TransitionGroup>
        {/* 
          我们直接在一个使用循环生成的列表中对每一个元素都使用csstransition 进行包裹，动画是无法生效的
          我们需要使用 TransitionGroup 直接包裹多个 CSSTransition ，这些被包裹的CSSTransition 才能同时生效
          注意是直接包裹，中间不能有其他的元素出现
        */}
      

      {/* 
        - 我们在创建一个transitiongroup 的时候，需要对内部的CSSTransition 组件设置key 否则当我们删除掉一个动画元素的时候
          由于没有index 所有的CSSTransition 组件都会被视为相同的组件，并且会被认为没有发生改变，进行diff算法直到进行最后一个比较的时候，发现产生了变化，才修改其css
          因此不论修改了哪一个数据都只有最后一个组件会产生动画效果，所以需要添加key，且需要是不重复的key
          如果是重复的key是没有意义的，仍然会被当做相同的组件，不要使用index 作为key的值，因为index 和组件并不是唯一绑定的，当数据发生变化的时候，index便会指向不同的值
      */}

        {/* <div> */}
          {
            this.state.names.map((item,index)=>{
              return(
                <CSSTransition key={index}
                              //  in={true}
                               timeout={500}
                               classNames='item'
                               appear>
                  <div>
                    {item}
                  </div>
                </CSSTransition>
              )
            })
          }
          <button onClick={()=>{this.add()}}>+</button>
        {/* </div>  */}
       </TransitionGroup>
    )
  }
  add(){
    
    this.setState({
      names:[...this.state.names,'tkoyist']
    })
  }
}
