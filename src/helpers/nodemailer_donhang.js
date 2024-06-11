const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
let mail = (email, price) => {
  var transporter = nodemailer.createTransport({
    // config mail server
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  var mainOptions = {
    // thiết lập đối tượng, nội dung gửi mail
    from: process.env.EMAIL_USER,
    to: `${email}`,
    subject: `Đặt Hàng Thành Công`,
    html: `<p>Bạn đặt thành công đơn hàng tại HUY STORE. Đơn Hàng có tổng giá là ${price} </p>`,
  };
  transporter.sendMail(mainOptions, async function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Message sent: " + info.response);
    }
  });
};

module.exports = {
  mail,
};
