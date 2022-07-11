import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';


export default class CommentItem extends React.PureComponent {
  constructor(props) {
    super(props)

  }
  render() {
    
    return (
      <div>
        <Comment
      actions={
        [<button>actions属性 </button>,<button onClick={()=>{this.remove()}}>删除</button>]
      }
      // actions 接受一个数组，我们可以在数组中添加元素，元素会被添加到评论后方，我们可以在其中实现点赞，删除，回复等功能
      author={<a>{this.props.info.nickname}</a>}
      avatar={<Avatar src={this.props.info.avator} alt="Han Solo" />}
      content={
        <p>
          {this.props.info.content}
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          {/* tooltip 组件，当鼠标悬停到tooltip 组件上的时候，就会浮现我们在tooltip 中的title 属性的属性值 */}
          {/* 我们可以将需要悬停显示的元素放到tooltip 组件内部 */}
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
      </div>
    )
  }

  remove(){
    this.props.removeItem()
  }
}
