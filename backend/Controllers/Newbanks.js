// importing the model here as well  

const NewBank  =  require('../Models/newbanks');


// writing the methods for New banks functionality as well and exporting them .



exports.banksignup  =  (req , res ) => {    
    // wriiting the signup logic here 
    const {
        // email,
        // password,
        // firstname,
        // lastname
        state ,
        address , 
        city ,
        bloodbankname , 
        parenthospitalname , 
        shortname ,
        contactnumber, 
        category , 
        contactperson , 
        email , 
        contactname , 
        faxnumber , 
        licensenumber , 
        helplinenumber  
    }  = req.body;
    const newbankObj = new NewBank ({
        // email: email,
        // password : password ,
        // firstname : firstname,
        // lastname : lastname 
        state : state ,
        address : address ,
        city : city ,
        bloodbankname : bloodbankname ,
        parenthospitalname : parenthospitalname  ,
        shortname : shortname ,
        contactnumber : contactnumber,
        category : category ,
        contactperson : contactperson ,
        email : email ,
        contactname : contactname ,
        faxnumber : faxnumber ,
        licensenumber : licensenumber ,
        helplinenumber : helplinenumber

    });
//were calling a newbank save object 
newbankObj.save().then(result => {
    res.status(200).json({
        message : "newbank Registered successfully ",
        newbank : result
    });
}).catch(error => {
    res.status(500).json({
        message : "error in database",
        error : error
    });
});
}