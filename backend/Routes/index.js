// need the roter from express library
const express = require('express');
const router = express.Router();
 // import the controllers

 const locationController  = require('../Controllers/Locations')
 const banksController  = require('../Controllers/Banks')
 const bloodtypesController  = require('../Controllers/Bloodtypes')
 const userController  = require('../Controllers/Users')
 const paymentController = require('../Controllers/Payments')
 const newbankController = require('../Controllers/Newbanks')
 const odrController = require('../Controllers/Odr')
 // declare the routes and bind to the controller methodss
 router.get('/getAllBanks', banksController.getAllBanks);
 router.get('/getAllBanksByLocation/:cityName', banksController.getAllBanksByLocation);
 router.get('/getBanksById/:bankId', banksController.getBanksById);
 router.post('/filterBanks', banksController.filterBanks);
 // from the locations controller
 router.get('/getAllLocations', locationController.getAllLocations);
 // from the blodd types controller importing the methods 
 router.get('/getAllBloodTypes', bloodtypesController.getAllBloodTypes);
// login  
router.post('/login',userController.login );
// sign up
router.post('/signup',userController.signup );
//  bank signup routes 
router.post('/banksignup',newbankController.banksignup )
// online donation requests  signup 

router.post('/odr',odrController.odrsignup)

// payments 
router.get('/payments' , paymentController.payments);
// payments Callback
router.get('/paymentCallback' , paymentController.paymentCallback);

 // export the routes




 
 module.exports = router;