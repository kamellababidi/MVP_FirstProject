var express = require('express');
//var db=require('../database')
var request = require('request')
var app = express();
 var bodyparser=require('body-parser')
 var urlencodedParser = bodyparser.urlencoded({ extended: false })
 app.use(express.static(__dirname + '/../public'));
 app.use(bodyparser.json())
 app.use(bodyparser.urlencoded())

//res.sendFile(__dirname+'/repos.html')

app.post('/add',function(req,res){
  console.log(req.body)
  var options = {
  url:'https://newsapi.org/v1/articles?source='+req.body.website+'&apiKey=d1bc01c3d233451fb6fe9f36038ada1e',
  method:'GET',
  headers: {
    'User-Agent': 'sdfsdfsd',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
  }
}
console.log(req.body.website)

request(options,function(err,result,body){
  if(err){
    res.send('404')
  }
  var entry=JSON.parse(body)
  console.log("here is result:"+entry.articles)
})
});
app.get('/show',function(req,res){
  console.log('here is your news')
})


var port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

