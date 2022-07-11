class bus{
  constructor(){
    this.map={}
  }
   on(str,callback){
    if(this.map[str]){
      this.map[str].push(callback)
    }else{
      this.map[str] = []
      this.map[str].push(callback)
    }
    
  }
   emit(str,...data){
    if(this.map[str]){
      this.map[str].forEach(item=>{
        if(typeof item === 'function'){
          item(...data)
        }
      })
    }else{
      console.log('emit 不存在该事件');
    }
  }

  off(str,callback){
    if(this.map[str]){
      this.map[str].splice(this.map[str].indexOf(callback),1)
    }else{
      console.log('off 不存在该事件');
    }
  } 
}


function test () {
  const eventBus = new bus();
  eventBus.on('hello', (msg1, msg2) => {
      console.log(`ok, ${msg1} ${msg2}`);
  })

  const needOffFn = (msg1, msg2) => {
      console.log(`ok2, ${msg1} ${msg2}`);
  }

  eventBus.on('hello', needOffFn)

  eventBus.on('hello2', (msg1, msg2) => {
      console.log(`hello2, ${msg1} ${msg2}`);
  })
  eventBus.map = null
  eventBus.emit('hello1', 'one', 'two')
  eventBus.emit('hello2', 'one', 'two')
  eventBus.off('hello', needOffFn)

  eventBus.emit('hello', 'one', 'two')

}

test() 
