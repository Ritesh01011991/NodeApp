var express = require('express');
var app = express();
var fs = require("fs");

app.set('port', (process.env.PORT || 5000 ));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  
      res.end( "Hey Ritesh this is your First Heroku Project ! Good Luck" );
  
})

app.listen(app.get('port'), function (){
	console.log('Node App running fine' , app.get('port'))
});


