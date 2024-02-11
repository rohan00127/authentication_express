const express = require("express")
const router = express.Router();
const logincontroller = require("../controller/logincontroller")
const ragistercontroller = require("../controller/ragistercontroller")
const homecontroller = require("../controller/homecontroller");
const auth = require("../middleware/auth");
const logoutcontroller = require("../controller/logoutcontroller")




router.get("/" , logincontroller.login);
router.get("/home" , auth ,  homecontroller.home );
router.get("/ragister" , ragistercontroller.ragister);
router.post("/addusers" , ragistercontroller.addusers);
router.post("/loginusers" , logincontroller.userlogin);
router.get("/logout" , auth , logoutcontroller.logout);







module.exports = router ;
