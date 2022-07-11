// 创建 action 我们之前创建action是通过直接创建对象的方式，那样复用性低，使用麻烦，所以我们使用函数式方式，创建一个函数，由该函数接受数据并返回相应的action
// export default function addAction(num){
//   return{
//     type:'ADD_NUMBER',
//     num
//   }
// }

import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT
}from './constants.js'

// 使用箭头函数简化写法
export const addAction = num => ({
  type:ADD_NUMBER,
  num
})
export const subAction = num => ({
  type:SUB_NUMBER ,
  num
})
export const inAction = () => ({
  type:INCREMENT
})