var express = require('express');
var db=require('./database')
var request = require('request')
var app = express();
 var bodyparser=require('body-parser')
 var urlencodedParser = bodyparser.urlencoded({ extended: false })
 app.use(express.static(__dirname));
 app.use(bodyparser.json())
 app.use(bodyparser.urlencoded())

//res.sendFile(__dirname+'/repos.html')
// app.get('/',function(req,res){
//   res.sendFile(__dirname+'/kamel.html')
// })
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
  console.log(entry)
   // var record = new db({ user_name: entry[i][0], repos:entry.articles[]});
   //      record.save(function (err, result) {
   //      if (err) return console.error(err);
   //      console.log('here inside save :' +result)
   //      }); 
  for(var i=0;i<entry.articles.length;i++){
    console.log('hi')
    var record = new db({ author: entry.articles[i].author,description:entry.articles[i].description,image:entry.articles[i].urlToImage});
     record.save(function (err, result) {
        if (err) return console.error(err);
        res.sendFile(__dirname+'/middle.html')
        }); 
     // console.log(entry.articles[i].description)
  }
 //res.send(JSON.stringify(entry.articles[0]))
})
});
app.get('/show',function(req,res){
  console.log('here is your news')
})


var port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
