// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
// host: 'smtp.gmail.com',
// port: 587,
// secure: false,
// requireTLS: true,
// auth: {
// user: 'sandip.g.addweb@gmail.com',
// pass: 'Addweb$2121'
// }
// });

// let mailOptions = {
// from: 'sandip.g.addweb@gmail.com',
// to: 'aakash.j.addweb@gmail.com',
// subject: 'Test',
// text: 'Hello aakash'
// };

// transporter.sendMail(mailOptions, (error, info) => {
// if (error) {
// return console.log(error.message);
// }
// console.log('success');
// });


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sandip.g.addweb@gmail.com',
    pass: 'Addweb$2121'
  }
});

var mailOptions = {
  from: 'sandip.g.addweb@gmail.com',
  to: 'aakash.J.addweb@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!..........'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});