var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/newspaper');
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