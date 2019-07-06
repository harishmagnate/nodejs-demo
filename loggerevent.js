const EventEmitter=require('events')

class Logger extends EventEmitter{
    
    log(msg){
        console.log(msg);
        let resp={id:1,firstName:'First Name'}
        this.emit('eventWithArg',resp);
    }
}

module.exports=Logger;