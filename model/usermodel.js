const mongo = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


const userSchema = new mongo.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    tokens:[{
        token :{
            type : String,
            required:true
        }
    }]

});


userSchema.pre("save" , async function(next){

    if(this.isModified("password"))
    {
        this.password = await bcrypt.hash(this.password , 10);
        console.log(this.password);
    }
    next(); 
});

//generate token 
userSchema.methods.generatetoken = async function(){

     try{
        const token = jwt.sign({_id : this._id.toString()}, "hellomynameisrohanmakvanaiamdevlopercsdzxcz");
        this.tokens =  this.tokens.concat({token : token});
        await this.save();
        return token;

     }catch(err)
     {
        console.log(err)
     }
}

const usermodel = new mongo.model("rgisteruserlist" , userSchema);

module.exports = usermodel;
