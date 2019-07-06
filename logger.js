let url = "http://sampleurl.com/sample";

console.log(__filename);
console.log(__dirname);

function log(msg) {
    console.log(msg);
}

module.exports.log = log;