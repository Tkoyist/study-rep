import React, { PureComponent } from 'react'
import {CSSTransition} from'react-transition-group'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
/**
 * 使用过程
 * - 导入
 *  import {CSSTransition} from'react-transition-group'
 * - 将需要动画效果的元素放入 CSSTransition 组件内部
 * - 为CSSTransition组件添加需要的属性
 *  * in 属性，决定是否显示
 *  * classnames 属性，传入一个类关键字字，CSSTransition 会根据关键字自动添加上一些字段，然后在css 库中寻找需要的css 类
 *  * timeout 属性，组件动画的执行时间
 *  * unmountOnExit 属性，当其值为true 时，CSSTransition 组件不显示时会直接从dom 上卸载
 *  * appear 属性，使得我们刷新页面等方式进行的第一次显示也能使用动画效果，而不是只在手动刷新页面时才有，这也要求我们要在css文件中书写对应的appear 类及其属性
 *  * CSSTransition 还提供了各类生命周期函数，供我们进行动画执行过程的拦截
 */



export default class CSST extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow:true
    }
  }
  render() {
    return (
      <div>
        <CSSTransition  in={this.state.isShow} // 第一个参数，用于决定组件的显示状态
                        classNames="card" // 第二个参数，用于决定组件的动画执行前后的样式，我们传入一个card 
                        // 在库的内部，会接受到这个字符串，然后自动为其添加上 '-enter' '-enter-done' 等字符串作为类名去寻找，这也就要求我们需要提前创建好 'card-enter' 等类
                        // 这个属性的方便性就存在于只需要指定一个关键字 key 它就会自动帮我们寻找到我们按照它的格式预创建的类
                        // 一般在css文件中书写相关的类，由于类名的特殊性，很难出现样式污染，所以直接使用css文件的方式
                        timeout={2000}
                        // timeout 属性用于确定更改时间，但并不是指css动画的更改时间，而是指我们预定义的类之间的切换的切换时间
                        // 我们总共预定义了三个css类用于分辨对应动画前动画中动画后的css样式，分别对应了每个类的停留事件，但是这些类之间并不是覆盖关系
                        //  并不是后来的类会覆盖之前的类，而是一种累加性质，使得后来的类的css属性将之前类的属性累加，所以即使我们在动画结束类中不添加
                        //  任何的属性，也不会使得css 类消失，而是保留了动画执行中类的样式（这里就要说道transition 属性的性质，当我们将一个元素的某个
                        //  属性改变，并为其添加了transition属性，指定某个属性的时候，该属性的变化就会以动画的形式变化，而不是直接改变，然后以动画的
                        //  形式变化成为我们改变之后的值,然后保留）所以即使我们没有动画完成之后的css类也不会有什么关系,元素会在执行完动画之后直接停留
                        //  当前的css样式即我们预设的样式,但是如果我们设置timeout 的值过小,在动画执行完成之后就改变为了动画执行完成类,那么就会影响动画
                        //  的展示和运行,它会会在动画执行完毕之前就改变样式(前提是动画执行完成类有自己的样式)

                        // 经过测试：timeout 值过小，而transition值很大的时候，timeout 会提前结束动画的执行，在动画执行到timeout 的设定的时间时直接转到动画执行完成类，结束动画的执行，进入动画完成类的样式
                        //          timeout 值过大，会在动画执行完成之后停留在动画执行完成的样式，直到timeout 时间到达之后才会跳转为动画执行完成类

                        unmountOnExit={true}
                        appear>
                         {/* apper 属性会决定动画是否在刚进入页面的时候就执行一次，默认值为false，添加上该属性即令其值为true了 */}
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
        <button onClick={()=>{this.change()}}>点击</button>
      </div>
    )
  }

  change(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
}
