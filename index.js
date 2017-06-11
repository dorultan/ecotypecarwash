//import module
var express = require('express');
const xoauth2 = require('xoauth2');
//call express
var app = express();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	port: 465,
	secure: false,
	auth: {
		xoauth2: xoauth2.createXOAuth2Generator({
			user: 'robert@ecotypecarwash.co.uk',
			clientId: '437386387737-pa69h1r7m1i6d04o8m4056a68g8s6em7.apps.googleusercontent.com'
			clientSecret: 'vm6Xw-Spw4mIeb3t9HjJFnXI',
			refreshToken: ''
		})
	}
})


let mailOptions = {
	from: '"dorultan <dorultanianosgyorgy@outlook.com>"',
	to: 'robert@ecotypecarwash.co.uk',
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