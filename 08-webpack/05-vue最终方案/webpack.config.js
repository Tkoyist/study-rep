const path = require("path")


module.exports={
    entry:'./main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },  
    module: {
    rules: [
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ],
  },
  resolve:{
    // alias 别名，给一串代码起别名，可以使用别名调用整个代码
    alias:{
      "vue$":'vue/dist/vue.esm.js'
      // 这里意思我们在webpack中使用vue的时候，webpack就会在使用到‘vue’的地方将 vue 视为别名，将其替换为我们为其定义的数据
      // vue是存在两个版本的，其中一个版本只有运行可使用，不能存在任何组件，，所以会报错，为了避免报错，我们要指定vue版本，即指定vue文件夹中的正确版本的文件
    }
  }
}