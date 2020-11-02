const http = require('http')
const ctype = {'Content-Type': 'text/html;charset=utf-8'}
const svr = http.createServer(handler)
svr.listen(8082)

function handler(req,res) {
    console.log('url:'+ req.url)
    if(req.url==='/list'){
        showList(req,res)
        return
    }

    if (req.url === '/write') {
      showWrite(req, res);
      return
    }
      res.writeHead(404, ctype);   
      res.end('404 NOT FOUND')
}

function showList(req, res){
    res.writeHead(200,ctype)
    res.end('<h2>List</h2>')
}

function showWrite(req, res) {
  res.writeHead(200, ctype);
  res.end('<h2>Write</h2>');
}

console.log('서버가동')