
//HTTP Module
const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end("Welcome to home page")        
    }
    if (req.url === '/about') {
        res.end("Welcome to about page")
    }
    res.end(`<h1> Oops! page not found</h1>
    <a href="/"> Back home </a>
    `)
})

server.listen(4000)