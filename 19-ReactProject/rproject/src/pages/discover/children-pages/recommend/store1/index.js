/**
 * 为什么要有当前的文件专门进行导入和导出？
 * 因为我们知道es6 中，我们直接导入一个文件夹，底层会自动寻找该文件夹当中的index.js 文件，并获取到该文件的导出，这就为我们提供了便利，当我们需要一个文件夹当中的多个导出的时候，直接使用index.js 文件
 * 将文件夹中需要的导出集中进行处理并导出，这样，我们只需要导入文件夹，便可轻松获取到文件夹当中的所有的导出，很多第三方包都是这样来处理的
 */

import reducer from'./reducer'

export {
  reducer
  }