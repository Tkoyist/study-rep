// race 方法接受多个promise 传入
// 如果当中有一个有结果，就会直接将该promise 的value 作为race 方法的race 返回
// 如果第一个退出等待状态的promise 的状态是rejected 
// 那么rece 方法的返回值的结果就是rejected