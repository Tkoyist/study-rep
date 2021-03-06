const weakset = new WeakSet()

// - 只能存放对象类型数据
weakset.add(10)

// - 内部存放的对象是通过弱引用进行连接
// 什么是弱引用
// 弱引用是针对垃圾回收器GC 而言的
// 垃圾回收器回收垃圾对象时会检测当前对象是否存在引用，即是否有别的地方的引用指向它
// 如果有，那么就会将其当做非垃圾对象，否则就会将其作为垃圾对象，而这种指向就是我们所说的强引用
// 与之相对的弱引用，如果某个对象被弱引用指向，它依然会被垃圾回收器当做垃圾对象进行处理
// 如果一个对象没有被弱引用以外的其他引用指向，那么它就会被垃圾回收器回收

// 也就是说 WeakSet 当中的对象如果没有被其他的强引用指向，那么就会被垃圾回收器回收