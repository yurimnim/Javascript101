const http = require('http');
const express = require('express');

const app = express();
app.use(express.static('public'));

const items = [
{name:'우유',price:2000},
{name:'홍차',price:5000},
{name:'커피',price:5000}
];

//json
app.all('/data.json',function(req,res){
    res.send(items);
});

//html
app.all('/data.html', function (req, res) {
    let output = "";
    output += '<html>';
    output += '<body>';

    items.forEach(function (item) {
       output += '<div>';  
       output += '<h1>' + item.name + '</h1>';  
       output += '<p>' + item.price + '</p>';  
       output += '</div>';  
    });

    output += '</body>';
    output += '</html>';

    res.send(output);
});

//xml
app.all('/data.xml', function (req, res) {
    res.type('text/xml');
    let output = '';
    output +='<?xml version="1.0" encoding="utf-8"?>';
    output +='<item_list>';
    items.forEach(function (item) {
       output += '<item>';
       output += '<name>' + item.name + '</name>';
       output += '<price>' + item.price + '</price>';
       output += '</item>';  
    });
    output +='</item_list>';
    res.send(output);
});

//요청과 요청 매개변수
app.all('/parameter',function(req,res){
    var name = req.param('name');
    var region = req.param('region');
    res.send('<h1>'+ name + ':' + region +'</h1>')
});

http.createServer(app).listen(52273,function(){
    console.log('서버가동 완');
}); 