const http =require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
res.end('welcome abcdefgh')
})

server.listen(4000);