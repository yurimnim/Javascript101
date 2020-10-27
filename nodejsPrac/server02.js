const http = require('http');
const express = require('express');

const app = express();
app.use(express.static('public'));

http.createServer(app).listen(52273,function(){
    console.log('서버가동 완');
}); 