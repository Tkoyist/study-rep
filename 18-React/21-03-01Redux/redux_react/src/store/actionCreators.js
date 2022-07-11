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
  INCREMENT,
  SAGADATA,
  CHANGESTATE
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

// 注意当前的action构造器 和其他的不同，当前的action构造器 并不返回一个action对象，而是直接作为一个普通的函数，这是因为我们需要当前action构造器的不是返回值，而是其内部的逻辑代码
export const getHomeMultidataAction = dispatch => {
  // 我们可以在此处直接发送网络请求
  // redux 会自动调用本函数,并自动将dispatch 作为参数传入,我们就可以利用这一性质在当前位置发送网络请求获取数据
  // 再借由获取的数据，通过dispatch 函数更新state

}

// 我们可以直接使用一个对象作为action 这样在后面就可以直接使用该action
// 该action 主要功能就是被saga 识别然后被saga截取,使saga可以执行预先定义的数据请求代码,所以可以等于一个对象,当然也可以使其等于一个函数,使得函数返回action对象
export const fetcgSagaData = () => ({
  type:SAGADATA
})

// 该action构造器专门用于构造修改state的数据,也需要接受新的数据
export const changestateaction = (data) => ({
  type:CHANGESTATE,
  data
})