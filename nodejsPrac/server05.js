const http = require('http');
const express = require('express');

const app = express();
app.use(express.static('public'));

app.all('/wiki/:name/:age',function(req,res){
    let name = req.param('name');
    let age = req.param('age');
    res.send('<h1>' + name + ' ' + age +'<h1>');
    
});

http.createServer(app).listen(52273,function(){
    console.log('서버가동 완');
}); 