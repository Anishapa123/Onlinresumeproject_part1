var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'anishapa712@gmail.com',
           pass: 'ivnchfjcldziydti'
       }
   });

   const mailOptions = {
    from: 'anishapa712@gmail.com', 
    to: 'anu8626@gmail.com', 
    subject: 'sending mail', 
    text: 'confirmation mail sent'
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });