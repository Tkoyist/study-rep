import * as bbb from"./src/js/bbb"
// 我们对js文件的数据导入的时候，也会将里面的js代码导入运行


// 本文件是模块文件的入口，即我们目前需要的所有模块都会被导入到当前文件中，我们在使用webpack打包文件的时候也是以该文件为入口进行打包
// 作为打包的源头，我们对css的打包也应当在当前文件集合进行
// 对css文件的导入更加简单，直接将文件导入即可
import "./src/css/stylef.css"

// 我们导入css文件之后直接打包会发现无法打包，这是因为我们目前的webpack缺少css文件处理loader 
// 我们需要引入相应的loader才可以使用，loader的使用与配置在webpack的官方文档中有详细描述
//  - 首先安装相应loader,使用指令：
//      npm install --save-dev css-loader
//      目前最好加上 @3.0.0 使用这个版本不会报错
//  - 再进行配置
//      对webpack.config.js文件进行配置
//      在里面加入
// module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },

//  *安装好之后发现，虽然打包不再报错，但样式仍然未生效，这是因为我们上面安装的 css-loader 只负责css文件的加载，而不进行其解析和加载 
//  *我们还需要一个用于css文件解析的 style-loader

// 仍然先安装
// npm install --save-dev style-loader
// 最好使用 @0.23.1 版本


console.log(bbb.msg);
console.log(bbb.msg1);