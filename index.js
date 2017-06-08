//import module
var express = require('express');
//call express
var app = express();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	host: 'ecotypecarwash.herokuapp.com',
	port: 465,
	secure: true,
	auth: {
		user: 'robert@ecotypecarwash.com',
		pass: 'robertloza93'
	}
})


let mailOptions = {
	from: '"dorultan <dorultanianosgyorgy.com"',
	to: 'robert@ecotypecarwash.com',
	subject: 'hello world ? ',
	html: '<b>Hello cool world</b>'
}

transporter.sendMail(mailOptions, (error, info) => {
	if(error) {
		return console.log(error);
	}

	console.log('Message is sent successful', info.messageId, info.response);
})

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function(){
	console.log('app is listening on port' + app.get('port'));
})