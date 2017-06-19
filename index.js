let http = require('http');
let BodyParser = require('./bodyParser');

const port = 3000;

let parser = new BodyParser();
let server = http.createServer((req, res)=>{

    let bodyData = '';

    req.on('data', (data)=>{
        bodyData += data.toString();
    })

    req.on('end', (data)=>{
        req.body = parser.parse(bodyData)
    });

    res.end();
});

server.listen(port, ()=>{
    console.log(`server started on  ${port}`);
});