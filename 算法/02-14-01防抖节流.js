function debounce(fnc,delay){
  let timer = null
  return function(...args){
    let context = this
    if(timer)clearTimeout(timer)
    timer = setTimeout(() => {
      fnc.apply(context,args)
    }, delay);
  }
}

function throttle(fn,interval){
  let flag = true
  return function(...args){
    let context = this
    if(!flag)return
    flag = false
    setTimeout(() => {
      fn.apply(context,args)
      flag = true
    }, interval);
  }
}

function throttle1(fn,interval){
  let flag = true
  return function(...args){
    let context = this
    if(!flag)return
    flag = false
    setTimeout(() => {
      fn.apply(context,args)
      flag = true
    }, interval);
  }
}

function throttle02(fn,interval){
  let last = 0
  return function(...args){
    let context = null
    let now = +new Date()
    if(now - last < interval)return
    last = +new Date()
    fn.apply(context,args)
  }
}

function fun(fn,interval){
  let last = 0,timer = null 
  return function(...args){
    let context = null
    let now = +new Date()
    if(now - last < interval){
      if(timer)clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context,args)
      }, delay);
      last = +new Date()
      fn.apply(context,args)
    }
  }
}