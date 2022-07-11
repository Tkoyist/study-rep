/**
 * express 本质上是一系列中间件函数的调用
 * 
 * 中间件的本质是传递给express 的一个回调函数
 * 这个函数接受三个参数（或者说要成为中间件函数必需要能接受这三个参数）
 * -请求对象
 * -响应对象
 * -next函数（在express当中用于执行下一个中间件的函数）
 * 
 * 中间件的功能
 * - 执行任何代码
 * - 修改请求与响应的数据
 * - 结束请求-响应周期
 * - 调用下一个中间件
 * ---如果当前中间件没有结束请求响应周期，那么就一定要调用下一个中间件，否则就会不断重发请求
 *    当客户端发送一个http请求之后，接收到来自服务端的数据，但是客户端是无法自行判断数据是否接受完毕了（一个请求可能有多个响应）
 *    因此需要服务端告诉客户端当前的情况，即通过调用end 方法，响应给客服端告诉客户端响应结束
 *    否则理所当然客户端会一直等待响应完毕（当然，没有end就永远不会完毕）
 * 
 *    需要注意的是，我们调用end 之后，依然可以调用next执行其他的中间件
 *    因为end 只是针对客户端，高数客户端无需等待，已经完成，但是服务端依然可以进行自己的操作，继续执行代码
 * 
 */