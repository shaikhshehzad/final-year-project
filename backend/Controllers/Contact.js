// importing the model here as well  
const Contact =  require('../Models/Contact');

exports.contactrequest  =  (req , res ) => {    
    // wriiting the Contact us  logic here 
//email , name , reason, state , district , pincode , description 
 

    const {
        email,
        name,
        reason,
        state,
        district,
        pincode,
        description
        

    }  = req.body;
    const ContactObj = new Contact ({
        email : email,
        name : name,
        reason : reason,
        state  : state,
        district : district ,
        pincode : pincode ,
        description : description
    });
//were calling a user save object 
ContactObj.save().then(result => {
    res.status(200).json({
        message : "Your Request has been submitted successfully , our team will get back to you shortly  ",
        user : result
    });
}).catch(error => {
    res.status(500).json({
        message : "error in database",
        error : error
    });
});
}
