import React, { PureComponent } from 'react'
/**
 * 基于webpack 的特性，我们在导入一个文件夹时，会自动去寻找该文件夹中的index.js文件，所以建议将一个组件的css 文件和js文件放到一个文件夹中，然后在其他页面通过导入文件夹的方式访问组件
 * 
 * 我们使用css 文件的方式为一个组件设置css 样式，会出现css 样式的覆盖，前面的同类名的属性会被后来的同类名属性覆盖
 * 我们可以为每个组件的css 类都创建有标识性的类名，但是有点麻烦
 */
export default class App extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
