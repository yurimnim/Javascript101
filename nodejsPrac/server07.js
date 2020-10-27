var http = require("http");
var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.bodyParser());


var items = [
    { name: "우유", price: 2000 },
    { name: "홍차", price: 5000 },
    { name: "커피", price: 5000 }
]

app.post("/products", function (req, res) {
    try {
        var name = req.param("name");
        var price = req.param("price");
        var item = { name: name, price: price };
        items.push(item);
        res.send({
            message: "데이터를 추가했습니다.",
            data: items
        });
    } catch (e) {
        console.log(e);
    }
});

app.all("/products", function (req, res) {
    res.send(items);
});

http.createServer(app).listen(52273, function () {
    console.log("서버가동됨");
});
/*
app.all('/products/:id',function(req,res){
    let id = Number(req.param('id'));
    if(isNaN(id)){
        res.send({error: '숫자를 입력하시오'});
    } else if (items[id]){
        res.send(items[id]);
    } else {
        res.send({ error: '존재하지 않는 데이터 입니다.' });
    }
});
*/

http.createServer(app).listen(52273,function(){
    console.log('서버가동 완');
}); 