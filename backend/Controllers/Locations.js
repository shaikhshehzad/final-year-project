// in controllers folder we import the model and export the functionality


// const Locations = require('../Models/Locations');
const Location  =  require('../Models/Locations');


// export the below controller functionality

// get all the locations 


exports.getAllLocations = (req , res ) => {
    Location.find().then(result => {
        res.status(200).json({
        message : "Locations Fetched ",
        locations : result
    });
    }).catch(error => {
        res.status(500).json({
            message : "error in Database",
            error : error
        })
    });
}