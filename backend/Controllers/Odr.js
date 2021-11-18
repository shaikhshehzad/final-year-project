
const Odr =  require('../Models/Odr')

// writing the methods for Online donation request  functionality as well and exporting them .
//writing the methods for Online donation requests  functionality as well and exporting them .

exports.odrsignup  =  (req , res ) => {    
    // wriiting the signup logic here 
    const {
        name ,
        gender ,
        age ,
        mobilenumber ,
        address ,
        tentativedate  ,
        category ,
        state ,
        districtorcity ,
        bloodbankname ,
        bloodgroup ,
        identity ,
        identitykey


    }  = req.body;
    const newodrObj = new Odr ({
        name : name ,
        gender : gender , 
        age : age ,
        mobilenumber : mobilenumber ,
        address : address ,
        tentativedate :  tentativedate  ,
        category : category ,
        state  : state,
        districtorcity : districtorcity ,
        bloodbankname : bloodbankname ,
        bloodgroup : bloodgroup ,
        identity : identity ,
        identitykey : identitykey
    });
//were calling a newodr save object 
newodrObj.save().then(result => {
    res.status(200).json({
        message : "Your Online donation Request has been  Registered successfully ",
        newbank : result
    });
}).catch(error => {
    res.status(500).json({
        message : "error in database",
        error : error
    });
});
}