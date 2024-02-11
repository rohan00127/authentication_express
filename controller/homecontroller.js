const home = async (req,res)=>{
  console.log(`the cookies is ${req.cookies.jwt}`);
    res.render("home")
}

module.exports = {home}