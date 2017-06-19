let http = require('http');
let BodyParser = require('./bodyParser');

const post = 3000;

let parser = new BodyParser();
let server = http.createServer((req, res)=>{

    let bodyData = '';

    req.on('data', (data)=>{
        bodyData += data.toString();
    })

    req.on('end', (data)=>{
        req.body = parser.parse(bodyData)
        console.log(bodyData);
        console.log(req.body);
    });

    res.end();
});

server.listen(post, ()=>{
    console.log(`server started on  ${post}`);
});