

    
module.exports={
    devServer:{
      // 对本地服务器监听插件进行一系列的设置
      contentBase:path.join(__dirname, 'dist'),
      // 该属性指定对哪个文件夹进行监听
      inline:true,
    }
  }
  // 目前开发时需要的文件只有这一个
  