// in controllers folder we import the model and export the functionality


const Bloodtype = require('../Models/Bloodtypes')

// now we will write the methods


// export the controller functionality  



exports.getAllBloodTypes = (req , res ) => {
    Bloodtype.find().then(result => {
        res.status(200).json({
        message : "Bloodtype Fetched ",
        Bloodtypes : result
    });
    }).catch(error => {
        res.status(500).json({
            message : "error in Database",
            error : error
        })
    });    
}


