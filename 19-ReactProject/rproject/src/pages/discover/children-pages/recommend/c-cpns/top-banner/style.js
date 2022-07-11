import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  /* 在这里为整个轮播图的背景设置了一个背景图片，然后使用箭头函数对其进行处理，获取到了一个经过修改的图片地址，而经过这种修改也就使其有了高斯模糊的特效 */
  /* 然后后面设置其位置居中 设置其大小变大 */
  /* 唯一需要注意的地方在于我们如何获取到轮播图当中当前展示的图片的url 即如何使得css 获取到js 当中的数据 */
  /* styled-components 早就提供了方案，在当前的函数 div 当中存在一个变量 props ，我们可以在使用组件的时候将需要使用的数据作为组件的属性传入styled组件，然后在当前文件当中就可以直接通过props.属性名 的方式获取到数据 */
  /* 为什么总是可以在css 当中获取到最新数据？拜托，当前是js 文件，只是我们在js 文件当中写了css 代码然后交由styled 处理罢了 */
  /* 现在唯一的问题就是 js 代码怎么将最新的图片url 传入styled 组件 */

  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
