const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const connection = require("./config/db");
const { AuthUserModel } = require("./model/Auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotenv.config();
const saltRounds = 4;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const GMAIL_EMAIL = process.env.GMAIL_EMAIL;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await AuthUserModel.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "user already exists" });
  }
  const hash = bcrypt.hashSync(password, saltRounds);
  const user = new AuthUserModel({ name, email, password: hash });
  user.save();
  if (user) {
    return res.status(200).json({ message: "user registered successfully." });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const authenticatedUser = await AuthUserModel.findOne({ email });
  if (authenticatedUser) {
    const match = await bcrypt.compare(password, authenticatedUser.password);
    if (match) {
      const token = jwt.sign({ userId: authenticatedUser._id }, JWT_SECRET_KEY);
      return res.status(200).json({ message: "login successful", token });
    } else {
      res.status(400).json({ message: "wrong password" });
    }
  } else {
    res.status(400).json({ message: "wrong email" });
  }
});

app.post("/forgotpassword", async (req, res) => {
  const { email } = req.body;
  const foundEmail = await AuthUserModel.findOne({ email });
  if (!foundEmail) {
    return res.status(400).json({ message: "user not exists" });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_EMAIL, pass: GMAIL_APP_PASSWORD },
  });
  const OTP = Math.floor(1000 + Math.random() * 9999);
  const html = `
  <html>
  <head>
      <title>Forget Password OTP</title>
  </head>
  <body>
      <div style="background-color: #f2f2f2; padding: 20px;">
          <h2>Forget Password OTP</h2>
          <p>Your OTP for password reset is: <strong>${OTP}</strong></p>
          <p>Please use this OTP to reset your password. This OTP is valid for a single use and will expire after use.</p>
          <p>If you did not request a password reset, please ignore this email.</p>
      </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: GMAIL_EMAIL,
    to: email,
    subject: "Forget password OTP",
    text: `Your OTP for reset password is: ${OTP}`,
    html,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(400).json({ message: "something went wrong" });
    } else {
      res.status(200).json({ OTP });
      console.log(info.response);
    }
  });
});

app.post("/confirmpassword", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  await AuthUserModel.findOneAndUpdate({ email }, { password: hashedPassword });
  res.status(200).json({ message: "password updated successfully" });
});

app.post("/checkout", (req, res) => {
  const { token } = req.body;
  jwt.verify(token, JWT_SECRET_KEY, async (err, decoded) => {
    //decoded = {userId: authenticatedUser._id}
    if (err) {
      res.status(400).json({ message: "Invalid token" });
    } else {
      const { userId } = decoded;
      const user = await AuthUserModel.findOne({ _id: userId });
      const { email } = user;
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: GMAIL_EMAIL, pass: GMAIL_APP_PASSWORD },
      });
      const orderNum = Math.floor(100000 + Math.random() * 999999);
      const html = `
     <html>
     <head>
         <title>Order Confirmation</title>
     </head>
     <body>
         <div style="background-color: #f2f2f2; padding: 20px;">
             <h2>Order Confirmation</h2>
             <p>Thank you for your order! Your order number is: <strong>${orderNum}</strong></p>
             <p>We will process your order shortly. You will receive an email with the shipping details once your order is shipped.</p>
             <p>If you have any questions or concerns, please contact our customer support.</p>
         </div>
     </body>
     </html>
   `;

      const mailOptions = {
        from: GMAIL_EMAIL,
        to: email,
        subject: "Your checkout receipt",
        text: `Your order number is ${orderNum}`,
        html,
      };

      transporter.sendMail(mailOptions,(err, info)=>{
      if(err){
        return res.status(400).json({message:"something went wrong"})
      }
      res.status(200).json({message:"order has been successfully placed"})
      }); 
    }
  });
});
app.listen(8000, () => {
  connection;
  console.log("connected to mongodb successfully");
  console.log("listening on port 8000");
});
