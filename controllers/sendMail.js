const nodemailer = require("nodemailer");
const sendMail = async (name,phonNumber,email) => {
//   let testAccount = await nodemailer.createTestAccount();

  //connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "jeevan13798@gmail.com",
      pass: "jzhw nqwn yfxi dgpq",
    },
  });
  let info = await transporter.sendMail({
    from: '"Jeevan" <jeevanbala@cqlsys.co.uk>', 
    to: email,
    subject: "Hello ✔", 
    text: " welcome ", 
    html: `welcome ${name} you are register with us this ${phonNumber} phoneNumber</b>`, 
  });

  console.log("Message sent: %s", info.messageId);
return true
};
module.exports = {sendMail: sendMail};
