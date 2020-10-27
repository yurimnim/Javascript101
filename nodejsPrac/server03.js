const http = require('http');
const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(app.router);

app.all('/list.do',function(req,res){
    res.send('<h1>글목록보기</h1>');
});

app.all('/write.do',function(req,res){
    res.send('<h1>글작성하기</h1>');
});

app.all('/update.do',function(req,res){
    res.send('<h1>글수정하기</h1>');
});

http.createServer(app).listen(52273,function(){
    console.log('서버가동 완');
}); 