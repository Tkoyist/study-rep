import React, { memo, Fragment } from 'react';

import { footerLinks, footerImages } from "@/common/local-data";
import {
  AppFooterWrapper,
  FooterLeft,
  FooterRight,
} from './style';

export default memo(function ZLAppFooter() {
  return (
    <AppFooterWrapper>
     <div className="wrap-v2 content">
      <FooterLeft className="left">
        <div className="link">
          {
            footerLinks.map(item => {
              return (
                <Fragment key={item.title}>
                  {/* 
                    Fragment 的作用是使得一个组件可以直接返回多个子元素，我们之前一直说过，组件的返回只能返回一个根元素，我们要将需要的元素放在这个根元素内部作为其子元素
                    这样才能正常的返回，但是如果我们需要特定的层级结构，需要让一些元素必须作为组件的一级子元素返回的情况下，我们就无能为力了
                    Fragment 组件的出现就是为了解决这个问题，我们将其直接作为组件返回值的根元素，它是不会被放入HTML 结构当中的，但是它可以作为组件返回值的根元素返回，即保证了正确的返回，又不会占用html结构，可以达到我们的需求
                  */}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  <span className="line">|</span>
                </Fragment>
              )
            })
            
          }
        </div>
        <div className="copyright">
          <span>网易公司版权所有©1997-2020</span>
          <span>
            杭州乐读科技有限公司运营：
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
          </span>
        </div>
        <div className="report">
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>
            举报邮箱：
            <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
          </span>
        </div>
        <div className="info">
          <span>粤B2-20090191-18</span>
          <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
            工业和信息化部备案管理系统网站
          </a>
        </div>
      </FooterLeft>
      <FooterRight className="right">
        {
          footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                <span className="title">{item.title}</span>
              </li>
            )
          })
        }
      </FooterRight>
    </div> 
    </AppFooterWrapper>
  )
})
