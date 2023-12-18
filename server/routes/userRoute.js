const express = require('express')
const { registration,login,getUserName, isLoggedIn, forgotPassword, resetPassword } = require ('../controller/userController');
const auth = require('../middleware/auth')
const router = express.Router();

//register
router.post('/registration',registration)

//login route
router.post('/login',login)
//getusername route
router.get('/getusername',auth, getUserName)
//isloggedin
router.get('/isloggedin',isLoggedIn)
//forgotpassword
router.post('/forgotpassword',forgotPassword)
//resetpassword
router.put('/resetpassword/:resetToken',auth,resetPassword)







module.exports = router;