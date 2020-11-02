console.log('File Read')
const fs = require('fs')
// fs.readFile('ex01.js','utf-8',function(err, data){
//     console.log(data)
// })

fs.readFile('ex01.js', 'utf-8',(err, data)=>{
    console.log(data);
})
