const usermodel = require("../model/usermodel");
const nodemailer = require("nodemailer")

const ragister = async (req, res) => {
  res.render("ragister");
};

const addusers = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const inserted = usermodel({
        name : name ,
        email : email ,
        password : password
    });

    const token = await inserted.generatetoken();
    console.log("the ragister token is " + token);
    res.cookie("jwt" , token);
    await inserted.save();
    res.send({result : true })


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rohanmakvana90@gmail.com',
          pass: 'kilh xjtl rirf uruv'
        }
      });
      
      var mailOptions = {
        from: 'rohanmakvana90@gmail.com',
        to: email,
        subject: 'Welcome To Our Team',
        text: "Welcome To Our Team"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


  } catch (err) {
    console.log(err);
  }
};
module.exports = { ragister, addusers };
