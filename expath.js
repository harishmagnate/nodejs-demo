var path=require('path');

let pathOjb=path.parse(__filename);
console.log(pathOjb);

var os=require('os');

let osMem=os.totalmem();
let freeMem=os.freemem();
console.log(`Total Mem: ${osMem}`);
console.log(`Free Mem: ${freeMem}`);

const fs=require('fs');

const files=fs.readdirSync('./');
console.log('Files',files);

fs.readdir('$',function(err,result){
    if(err) console.log(err);
    else console.log('Files',result);
});