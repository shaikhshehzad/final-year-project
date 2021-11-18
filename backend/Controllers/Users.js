
// importing the model here as well  

// const Users = require('../Models/Users');
const User =  require('../Models/Users');


// writing the methods for users functionality as well and exporting them

exports.login  =  (req , res ) => {


    const {


        username,
        password
    } =  req.body;

    User.find({
        email: username ,
        password : password
    }).then(result => {

        if(result.length > 0){
            res.status(200).json({
                message : "logged In",
                isLoggedIn : true,
                user : result[0]
            });

        }else {
            res.status(400).json({
                message : "Username or pass word is wrong",
                isLoggedIn : false
            })
        }
    }).catch(error => {
        res.status(500).json({
            message : "error in database",
            error : error
        })
    });
}
exports.signup  =  (req , res ) => {    
    // wriiting the signup logic here 
// email , firstname , lastname , gender , dob , state , district , pincode , password ,confirmpassword 

    const {
        email,
        firstname,
        lastname,
        gender,
        dob,
        state,
        district,
        pincode,
        password,
        confirmpassword

    }  = req.body;
    const userObj = new User ({
        email: email,
        firstname : firstname,
        lastname : lastname ,
        gender : gender ,
        dob : dob ,
        state : state ,
        district : district ,
        pincode : pincode ,
        password : password ,
        confirmpassword : confirmpassword
    });
//were calling a user save object 
userObj.save().then(result => {
    res.status(200).json({
        message : "User Registered successfully as a user  ",
        user : result
    });
}).catch(error => {
    res.status(500).json({
        message : "error in database",
        error : error
    });
});
}