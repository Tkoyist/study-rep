import React, { memo,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTopBannerAction} from './store/actionCreator'

function ZLRecommend(props) {

  // **我们之前使用redux 联系组件的方式也过于繁琐，connect 函数的使用，需要传入的两个参数的构建过于麻烦复杂，而这两个参数出现的目的仅仅是为了获取到redux 的数据接口与操作接口
  // **redux 官方为了解决这个问题，推出了一个新的hook ，useDispatch 该函数可以直接获取到当前组件需要使用的dispatch 
  // **我们前面说过，redux 是单一数据源的，所有的数据都在一个store 内部，所以我们也只需要一个dispatch 就可以直接操作所有的state 状态，所以useDispatch 可以直接将那个dispatch 返回，我们可以在Provider 函数内部的任何位置直接使用

  const dispatch = useDispatch()
  // **直接使用一个变量获取到useDispatch 的返回值，拿到返回值就是我们之前使用connect 希望放到props 当中的dispatch 我们直接使用即可

  // **在useEffect 当中使用通过useDispatch 获取到的dispatch 函数发送请求获数据
  useEffect(() => {
    dispatch(getTopBannerAction(dispatch))
  }, [dispatch])
  // **现在我们获取到处理数据的接口，但是我们还没有获取到store 当中的数据，即state 当中的数据
  // **redux 也为我们提供了另外一个hook 用于获取state 数据
  // **这个接口就是 useSelector 函数
  // **该函数接受一个回调函数作为参数，该回调函数接受一个参数 ，useSelector 会在内部调用该回调函数，并将我们需要使用的state 直接作为参数传入
  // **换句话说，该函数会将state 作为参数传入回调函数
  // **所以我们可以在回调函数中获取到state ，将其中我们需要的部分返回，然后在组件中接受useSelector 的返回值，即我们在回调函数中返回的数据

  const {topBanners} = useSelector(state=>{
    console.log(state);
    return{
      // topBanners:state.recommend.topBanners
      // 返回值是一个对象，所以返回的数据也要使用键值对的方式保存在对象中

      // topBanners:state.recommend.get('topBanners')
      // *** 当我们引入 immutable 之后，当前的获取数据的方式也要进行修改，修改为set 接口 
      
      topBanners:state.get('recommend').get('topBanners')
      // topBanners:state.getIn(['recommend','topBanners'])
      // 由于我们将总的store 也变成了immutable 对象，所以我们需要的数据变成了immutable 对象内部的immutable 对象，那么我们获取数据的方式也需要变成
      // 使用get 获取到分store ，在对分store 使用get 获取到分store 内部的数据局

    }
  })
  // **useSelector 的作用就是接受一个回调函数，然后将state 传入该函数中并调用该回调函数，这种模式我们已经在很多地方见过了

  // **这样，我们就将之前大段的代码通过两个hook 浓缩起来了，hooks 真是好东西
  // **但是这里依然是存在问题的，存在一些性能问题，在connect 内部其实是做了一些性能优化的
  // **体现在，当我们在一个组件中使用store 当中的某些数据的时候，我们是将数据放到一个对象当中的，当store 中的任意数据发生改变，所有的state 都会更新（得益于单一数据源），这可能会导致所有使用了store 的组件都重新渲染，因为他们都依赖于store ，而store发生了改变（虽然我们知道它只是依赖store 的一部分）
  // **connect 的优化体现在，当store 发生改变的时候，它能识别到当前组件中使用了哪些store 当中的数据，即 mapStateToProps 函数返回的对象当中的数据，connect 会将本次 mapStateToProps 返回的对象与之前存在的对象进行浅层比较，如果发现两者相同则不会重新渲染当前组件
  // **而hooks 默认是不具备这个浅层比较的功能的，它只会将两次的对象直接通过 == 的方式比较，而我们知道，同一个函数每次返回的对象，即使内容相同，他们在堆内存中也是不同的，所以不可能相等，所以一定会重新渲染

  // **但是 redux hook 也为我们提供了这种性能优化的解决方案，即 shallowEqual ，我们在使用useSelector 时，为其第二个参数传入 shallowEqual ，就会为redux hook 也添加这种性能优化方案 
  



  // const {getBanners,topBanners} = props
  
  // 现在我们要通过action 发送网络请求并获取数据放入redux，这需要用到thunk thunk 会自动识别类型为函数的action 并直接执行那些action 函数
  // useEffect(() => {
  //   getBanners()
  //   console.log(topBanners);
  // }, [getBanners])
  // 当函数对象发生改变的时候重新发送请求，在正常情况下函数是不会发生改变的，所以是可以不写的，这里写只是保险起见
 

  return (
    <div>
      <h2>asddasd{topBanners.length}</h2>
    </div>
  )
}


export default memo(ZLRecommend)

// const mapStateToProps=state=>{
//   return{
//     topBanners:state.recmmend.topBanners
//     // 这里便将 state 当中的topBanners 作为value topBanners作为key，将这样的键值对传入了props 中，我们可以通过props.topBanners 直接访问到我们定义的redux 数据，当然，由于初始数据为空，所以目前只能访问到一个空数组
//   }
// }


// const mapDispatchToProps=dispatch=>({
//   // 在这里我们可以定义一些函数，在函数中使用dispatch ，再在dispatch 中使用actionCreator 以达到通过props 当中的函数直接操作state 的功能
//   // 我们在这里创建的函数可以直接在组件当中通过props 访问到，而当前的函数中又可以直接使用dispatch
//   getBanners : ()=>{
//     dispatch(getTopBannerAction(dispatch))
//   }
// })

// // 我们需要将当前组件与store 直接联系起来，其实store 对外暴露了两个接口 getState() 和 dispatch 这两个接口都是直接作为store 的属性对外暴露的，分别对应了数据的获取和数据的更新（dispatch 用于接受action）
// // 但是我们直接使用太麻烦，所以就想到将这两个固定的参数直接作为当前组件的props 传入，使当前组件可以直接使用这两个接口
// // 实现这个功能的就是connect 函数，这个函数我们也自己实现过，本质是一个高阶组件，作用就是将上面提到的两个接口直接作为组件的props 的属性传入，便于我们使用
// // 一定要注意，我们之前已经完成了redux 的基本使用，connect 的引入并不是必须的，只是为了提高效率
// export default connect(mapStateToProps,mapDispatchToProps)(memo(ZLRecommend))
// // connect 函数需要两个参数，返回值是一个高阶组件，两个参数也都是函数
// // 这两个函数会在connect 组件内部被调用,并且分别将state 和dispatch 作为这两个函数的参数传入,我们就可以在这两个参数中直接使用state 和dispatch 获取需要的数据,进行想要的操作