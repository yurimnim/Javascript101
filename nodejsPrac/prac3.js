let request = require('request');
request('http://google.com',function(error,response,body){
    if(!error && response.statusCode == 200) {
        console.log(body) //show the HTML for the Google homepage
    }
});