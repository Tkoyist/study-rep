import React, { memo,Fragment } from 'react'
import {footerLinks,footerImages} from"@/common/local-data"
import {
  BottomWrapper,
  BottomLeft,
  BottomRight
} from'./style'

export default memo(function ZLAppBottom() {
  return (
    <BottomWrapper>
      <div className="wrap-v2 content">
        <BottomLeft>
          <div className="link">
            {
              footerLinks.map((item,index)=>{
                if(index!==footerLinks.length-1){
                  return(
                    <Fragment key={item.title}>
                      <a href={item.link} >{item.title}</a>
                      <span className="separator" >|</span>
                    </Fragment>
                  )
                }
                else{
                  return(
                    <a href={item.link} key={item.title}>{item.title}</a>
                  )
                }
              })
            }
          </div>
          <div className="copyright">
            <div>
              <span>
              网易公司版权所有©1997-2020 
              </span>
              <span>
              杭州乐读科技有限公司运营: 
              <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
              </span>
            
            </div>
            <div>
              <span>
              违法和不良信息举报电话：0571-89853516
              </span>
              <span>
              举报邮箱：
              <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
              </span>
            </div>
            <div>
              <span>
              粤B2-20090191-18
              </span>
              <span>
              <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
                工业和信息化部备案管理系统网站
              </a>
              </span>
            </div>
          </div>
        </BottomLeft>
        <BottomRight>
          <div className="img-wrapper">
            {
              footerImages.map(item=>{
                return (
                  <span key={item.link} className="item">
                    <a href={item.link} className="link"> </a>
                    <span className="title"></span>
                  </span>
                )
              })
            }
          </div>
        </BottomRight>
      </div>
    </BottomWrapper>
  )
})
