import {takeEvery,put, takeLatest} from 'redux-saga/effects'
import { SAGADATA ,ADD_NUMBER} from './constants'
import'axios'
import axios from 'axios'
import { changestateaction}from'./actionCreators'


// ***为什么非要使用生成器进行action的监听
  //    因为我们需要监听的action 很可能不止一个，而且我们也不知道到底需要监听多少，固然我们可以使用不定参数的函数，可能作者更喜欢生成器的方式吧
function *getsagadata(){
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  console.log('执行saga中的生成器代码获取网络数据');
  // 现在我们获取到了数据，但是还没有放到state中，我们还需要将其放入state
  console.log(res.data.data.banner.list);
  // 这里我们是处于SAGADATA action 和 reducer 处理之间，我们可以在这里直接调用其他的action 进行数据修改
  yield put(changestateaction(res.data.data.banner.list))
  // put 函数是对dispatch 的一个封装，我们只需要将修改数据的action传入put 函数，就会产生和disptach 一样的效果，即接受action 跳转到reducer ，处理数据
  yield put(changestateaction(res.data.data.recommend.list))
  // 可以同时请求多个数据，库内部是一个循环会循环执行生成器函数直到done
}

function* logNumber(){
  yield 1
  console.log('log number 1');
}


export default function* maSaga(){
  // takeEvery 表示监听每一个action
  // 然后将我们需要监听的action 放入该函数，该action就会被监听，当该action启动被dispatch 的时候，就会被拦截然后执行我们传入takeEvery 中的生成器函数
  // 第二个参数就是我们需要使用的生成器函数，因为我们截取到一个action 之后可能需要进行多次不同的操作，作者在底层使用循环将生成器中的操作都一一进行了，其实使用生成器也不错，逻辑代码这么多，使用普通循环光是传入都麻烦
  yield takeEvery(SAGADATA,getsagadata)

  yield takeLatest(ADD_NUMBER,logNumber)
  // ***为什么非要使用生成器进行action的监听
  //    因为我们需要监听的action 很可能不止一个，而且我们也不知道到底需要监听多少，固然我们可以使用不定参数的函数，可能作者更喜欢生成器的方式吧
}

// saga 的优势，代码分离，基本代码都是在saga文件中使用
// 请求数据的dispatch 也无需特殊处理(变成一个函数),直接正常使用即可
// saga 不止能监听请求网络数据的action 它可以对几乎所有的action都进行监听，并且拦截之后进行我们想要的操作

// 总之使用复杂带来的是灵活性高，可以适用于更多的特殊场景，也方便根据我们的需求进行特殊化处理，good
// 但是需要较高的熟练度