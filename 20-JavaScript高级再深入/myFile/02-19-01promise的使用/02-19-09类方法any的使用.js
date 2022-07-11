// any 与race大致相同
// 不同之处在于 any 方法内部的promise 如果最先退出等待状态的是rejected 状态，那么就会忽视，等待下一个先执行完的promise 
// 直到某个promise 的状态为fulfiled 结果为filfulef，或者所有的promise 均执行完成，结果为rejected