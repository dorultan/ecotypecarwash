//import module
var express = require('express');
var dotenv = require('dotenv');
dotenv.load();
//call express
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);


app.post('/sendEmail', function(req, res){

	var fromEmail = new helper.Email(req.body.email);
	var toEmail = new helper.Email('admin@ecotypecarwash.co.uk');
	var subject = req.body.subject;
	var content = new helper.Content('text/plain', req.body.message);
	var mail = new helper.Mail(fromEmail, subject, toEmail, content);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function (error, response) {
	  if (error) {
	    console.log('Error response received');
	  }
	});

	res.status(200).end();
})

app.post('/appComplete', function(req, res){

	var fromEmail = new helper.Email(req.body.email);
	var toEmail = new helper.Email('admin@ecotypecarwash.co.uk');
	var subject = req.body.subject;
	console.log(subject)
	var content = new helper.Content('text/plain', 'Client name: ' + req.body.content.name + ' Client phone number: '
																   + req.body.content.mobile + ', Client address: ' 
																   + req.body.content.address + ', Postcode: ' 
																   + req.body.content.postcode + ', Client packet: '
																   + req.body.content.title);
	console.log(req.subject);
	var mail = new helper.Mail(fromEmail, subject, toEmail, content);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function (error, response) {
	  if (error) {
	    console.log('Error response received');
	  }

  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
	});

	res.status(200).end();
})

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res){
	res.sendFile(__dirname + '/public/index.html');
})

app.listen(app.get('port'), function(){
	console.log('app is listening on port' + app.get('port'));
})