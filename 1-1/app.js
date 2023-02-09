const nodemailer = require("nodemailer");

async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: "<foo@example.com>",
    to: "bar@example.com",
    subject: "Maktab HW-12",
    text: "this is an email from node js",
  });
  if (!!info) {
    console.log(info);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } else {
    console.log(erorr);
  }
}
main();
