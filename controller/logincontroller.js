const usermodel = require("../model/usermodel");
const bcrypt = require("bcryptjs")
const login = async (req,res)=>{
    res.render("login")
}

const userlogin =  async (req,res)=>{
    try{

        const email = req.body.email;
        const password = req.body.password;


    
        const useremail = await usermodel.findOne({email : email});
        const ismatch = bcrypt.compare(password , useremail.password);
        const token =  await useremail.generatetoken();
        console.log("the login token is " + token)
        res.cookie("jwt" , token);

        
  
        if(ismatch){

           res.json({result : true})
        }
        else{
        
            res.status(400).send("Invalid login details");
        }

    }catch(err){
        
    }
}
module.exports = {login , userlogin}