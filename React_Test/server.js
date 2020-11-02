const http = require('http')
const svr = http.createServer(handler)
svr.listen(8082)

function handler(req,res) {
    console.log('url:'+ req.url)
    console.log('method:'+ req.method)
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end('<h1>Hello World!</h1>\n')
}

console.log('서버가동')