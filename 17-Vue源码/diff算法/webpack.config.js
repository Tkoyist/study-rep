const path = require('path');

module.exports = {
  // 配置文件入口
  entry: './src/index.js',
  // 配置文件出口
  output: {
    // 虚拟打包路径，文件夹不会真正的生成，而是在8080端口虚拟生成
    publicPath: 'xuni',
    // 打包完成之后的文件名,并不会真正的物理生成，只在特定的时候储存在缓存中，而不会真正的放到内存当中，这样我们作为开发者不仅更新更加快速，还节约了内存
    // 当真正需要提交文件的时候，再将其真正生成
    filename: 'bundle.js',
  },
// 对webpack-dev-Server 进行配置  
  devServer:{
    // 端口号
    port:8080,
    // 静态资源文件夹
    contentBase:'www'
  }
};