module.exports = {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
          viewportWidth:375, // 视窗的宽度，对应我们设计稿的宽度
          viewportHeught:812,  // 视窗的高度，对应我设计稿的高度
          unitPrecision:5,// 指定'px' 转换为视窗单位值的小数位数，px 转化为 vw 的时候肯定会出现无法整除的情况，需要小数，我们就是确定该小数的位数
          viewportUnit:'vw',// 指定需要转换为的视窗单位
          selecttorBlackList:['ignore',' tab-bar'],// 指定不需要转化的类，注意这里指定的是类！！！！！！，是css 中的类！
          minPixelValue:1,// 小于或等于 1px 不转化为视窗单位,如果小于1px 的情况，就直接视为1px 不进行转换
          mediaQuery:false// 允许在媒体查询中转换 px 
      }
    }
  }
  