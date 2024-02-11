const mongo = require("mongoose");

mongo.connect(process.env.DBURL)
.then(()=>{
    console.log("Connection Succesfull")
}).catch((err)=>{
    console.log(err)
})