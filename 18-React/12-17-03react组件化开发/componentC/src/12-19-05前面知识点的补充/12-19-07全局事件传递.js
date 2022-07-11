import React, { PureComponent } from 'react'
/**
 * 之前一直是进行数据的传递，但是有时候我们也需要进行事件的传递，父子组件的事件传递
 * 
 * 但是在跨多层的传递中，我们就需要一个类似于vuex 的插件进行事件传递
 * events 插件就实现了这个事件总线的功能
 * 
 * - 导入events 
 * - 创建events 对象
 *  创建一个EventEmitter 类的实例，该实例即可作为事件总线进行使用，通常我们对其创建是在一个单独的文件中，创建之后导出，让需要使用事件总线的组件导入该对象
 * - 标识何处发送事件
 *  通过events 对象的emit 方法发射事件，该方法的第一个参数是发送的事件名，其余参数则是需要传送的参数，我们在某个地方监听事件时，对应的时间响应函数就会接受到这些参数
 * - 标识何处监听事件
 *  我们一般在componentDidMount 中创建对事件的监听，在componentWillMount 中取消对事件的监听
 *  - 使用我们创建的eventsEmitter 对象的addListener 方法为当前组件添加监听，使用removeListener 方法取消监听
 *    不论是添加事件监听，还是取消事件监听，都需要传入两个参数，第一个参数是进行添加或取消监听的事件，第二个参数是添加和取消事件监听函数
 * 
 * eventsEmitter 对象就像一个公交车bus 会将接受到的所有事件在导入了它的文件中进行运输，如果某个组件想要监听某个事件，就在组件中挂载该事件的监听
 * 事件总线在事件触发时就将该事件运送到订阅（监听）了该事件的位置，并将参数也一并运输
 */

// 导入events 
import {EventEmitter} from'events'

// 创建event实例
const fatherEvents = new EventEmitter()

export default class App extends PureComponent {
  componentWillMount(){
    // 取消事件监听
    // 在挂载之前取消监听，防止之前的监听没有处理
    fatherEvents.removeListener('GsonSend',this.logGSon)
  }
  componentDidMount(){
    // 添加事件监听
    // 在挂载完成之后添加事件监听
    fatherEvents.addListener('GsonSend',this.logGSon)
  }
  logGSon(args,text){
    console.log(args,text);

  }
  render() {
    return (
      <div>
        父组件
        <Son/>
      </div>
    )
  }
}



class Son extends PureComponent {
  render() {
    return (
      <div>
        子组件
        <GSon/>
      </div>
    )
  }
}
class GSon extends PureComponent {
  render() {
    return (
      <div>
        孙子组件
        <button onClick={()=>{this.send()}}>send</button>
      </div>
    )
  }
  send(){
    // console.log('1');
    // 发送事件
    fatherEvents.emit('GsonSend','123','nihao')
  }
}