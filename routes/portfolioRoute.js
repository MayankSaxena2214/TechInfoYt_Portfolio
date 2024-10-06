const express=require("express");
const portfolioController=require("../controllers/portfolioController");
const sendEmailController = require("../controllers/portfolioController");

//router object
const router=express.Router();



//routes
router.post('/sendEmail',sendEmailController);


//export
module.exports=router;