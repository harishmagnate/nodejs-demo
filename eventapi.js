const EventEmitter = require('events');

const emitter=new EventEmitter();

function callBack(){
    console.log('Listener called');
}

function callBackArg(e){
    console.log('Listener with Arg',e);
}

emitter.on('emitMessage#1',callBack);

emitter.on('emitMsgArg', callBackArg);

emitter.emit('emitMessage#1');

emitter.emit('emitMsgArg',{id:1,firstName:'First Name'});