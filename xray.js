var app = require('express')();
var x = require('x-ray')();

app.get('/', function(req, res) {
  var stream = x('http://google.com', 'title').stream();
  stream.pipe(res);
})

 var server = app.listen(3000, function() {  
  console.log('Listening on port 3000');  
 });   
