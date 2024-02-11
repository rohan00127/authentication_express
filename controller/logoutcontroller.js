const logout = async (req,res)=>{

    try{
        console.log(req.user)
         res.clearCookie("jwt");
         console.log("logout");
         await req.user.save();
        res.redirect("/")

    }catch(err){
        console.log(err)
    }
}

module.exports = {logout}