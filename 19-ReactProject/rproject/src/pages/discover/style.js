import styled from'styled-components'

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #C20C0C;
  }
`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top:-4px;
  .item{
    a{
    font-size:13px;
    display: inline-block;
    line-height: 20px;
    padding: 0px 13px;
    margin: 7px 18px 0px;
    color: #fff;
    &:hover,&.active{
      background-color: #9B0909;
      border-radius: 20px;
    }
    }
  }
`