const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, resp) => {
    //GET http://localhost:3000/
    if (req.url == '/') {
        resp.write('Hello World');
        resp.end();
    }
    //GET http://localhost:3000/api/v1/books
    if (req.url == '/api/v1/books' && req.method === 'GET') {
        let response = [{ id: 1, title: 'Immortals of Meluha' }, { id: 2, title: 'Hunger Games MockingJay' }, { id: 3, title: 'History of WWII' }];
        resp.statusCode = 200;
        resp.setHeader('ContentType', 'application/json');
        resp.write(JSON.stringify(response));
        resp.end();
    }
    if (req.method === 'POST') {
        //POST http://localhost:3000/api/v1/books
        if (req.url == '/api/v1/books') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                console.log(body);
                let response = [{ id: 1, title: 'Immortals of Meluha' }, { id: 2, title: 'Hunger Games MockingJay' }, { id: 3, title: 'History of WWII' }];
                resp.statusCode = 200;
                resp.setHeader('ContentType', 'application/json');
                resp.write(JSON.stringify(response));
                resp.end();
            });
        }
    }
});

server.listen(3000);

console.log("Running Server....");