let http = require("http");
let express = require("express");
let app = express();

app.use(function(request, response){
    response.send('<h1>HELLO!!</h1>');
});

http.createServer(app).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52773');
});