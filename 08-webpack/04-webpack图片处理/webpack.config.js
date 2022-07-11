const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UlifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports={
    entry:'./main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },  
    // 写到这里，就已经可以通过webpack指令快速生成打包文件了，但是目前还不能直接使用 npm 快捷指令
    // 需要我们去为需要的操作指定一个快捷指令，需要在package.json 中定义
    module: {
    rules: [
      // rules 用于指定文件和操作，是一个数组，该数组中会存储需要处理的文件格式，和需要用哪些loader对其进行处理
      // 由于一个文件可以进行多个处理，所以一个对象中可能只有一个被选中的文件格式，但是use数组存在多个loader可对其进行处理
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader:'url-loader',
            // options:{
            //   limit:900000
            // }
          }
        ],
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      
    ],
  },
    plugins:[
    new webpack.BannerPlugin('最终版权归Tkoyist所有'),
    // 这是一个webpack自带的插件，可以直接定义
    new HtmlWebpackPlugin(
      {
        template:'index.html'
      }
    ),
    // 该插件会将html页面打包
    // 在bundle 所在的文件夹中自动生成一个html 文件，并自动通过标签引入bundle.js 
    // 但目前还是存在一个问题，我们自动生成的html 文件没有自动引入我们为其准备的组件
    // 我们可以在该插件方法中插入一个template 参数，将我们自定义的一个html文件传入，作为我们自动生成的html文件的模板
    new UlifyjsWebpackPlugin()
    // 该插件可以将我们的数据压缩
  ],
    resolve:{
    // alias 别名，给一串代码起别名，可以使用别名调用整个代码
    alias:{
      "vue$":'vue/dist/vue.esm.js'
      // 这里意思我们在webpack中使用vue的时候，webpack就会在使用到‘vue’的地方将 vue 视为别名，将其替换为我们为其定义的数据
      // vue是存在两个版本的，其中一个版本只有运行可使用，不能存在任何组件，，所以会报错，为了避免报错，我们要指定vue版本，即指定vue文件夹中的正确版本的文件
    }
  },
  devServer:{
    // 对本地服务器监听插件进行一系列的设置
    contentBase:path.join(__dirname, 'dist'),
    // 该属性指定对哪个文件夹进行监听
    inline:true,
    // 指定页面是否实时刷新
    // port:8080,
    // 指定端口号

  }
}