const path = require("path")
// 这里我们用到了一个数据 path ，且是导入进来的，但这个数据是默认不存在的
// 我们需要创建一个模块，用于获取当前的文件位置，方便后面动态的读取文件
// 创建的模块就是通过 npm init 指令创建的 package.json 文件
module.exports = {
    entry:'./main.js',
    output:{
        // 路径：应当是一个动态数据
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            // rules这个数组用于存储需要对哪些文件进行哪些loader操作，test用于绑定文件，use 用于决定操作 ，test和use放到一个对象中传入rules 

          {
            //   这里test是一个正则表达式！！！！！！，用于发现css文件
            test: /\.css$/i,

            // use里面是对上面test获取到的文件的应用的loader
            use: ["style-loader","css-loader"],
            //  css 负责加载Css文件，style 负责解析渲染，将样式加入DOM

            //  *use中的loader是存在顺序的，是从右到左进行应用，所以我们要将先进行的处理放到右边，后进行的处理放到左边
          },
        ],
      },
}
// 这里是将webpack和创建bundle的一系列操作联系起来了，使得我们可以通过webpack这一个指令
// 然后自动将我们指定的代码文件打包到我们指定的文件中，当前页面就是对打包哪些文件，和打包到哪里等一系列操作进行了说明

// 现在，我们只要在该文件所在的目录下，直接输入终端指令 webpack 即可直接完成需要的操作


// 本文件的创建是纯手打的，不是终端生成的，在任何地方使用都要是一样的名字，不能有所改变，包括内部的模板，也必须保持一致