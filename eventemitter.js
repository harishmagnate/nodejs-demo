const Logger=require('./loggerevent');

let logger=new Logger();
logger.on('eventWithArg',callBack);

logger.log('Msg');

function callBack(e){
console.log('Event',e);
}