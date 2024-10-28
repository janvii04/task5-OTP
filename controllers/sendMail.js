const nodemailer = require("nodemailer");
const sendMail = async (req, res) => {
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
    to: "mitaligoura2004@gmail.com",
    subject: "Hello ✔", 
    text: "Welcome welcome", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};
module.exports = {sendMail: sendMail};
