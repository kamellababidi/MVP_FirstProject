var mongoose=require('mongoose');
mongoose.connect('mongodb://kameldata:12345@ds151544.mlab.com:51544/kameldata');
mongoose.Promise = Promise;  
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connnnnected')

});
var news = mongoose.Schema({
  // TODO: your schema here!
  author:String,
  description:String,
  image:String
});

var table = mongoose.model('table', news);

module.exports = table;