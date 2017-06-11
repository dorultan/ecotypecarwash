//import module
var express = require('express');
//call express
var app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function(){
	console.log('app is listening on port' + app.get('port'));
})