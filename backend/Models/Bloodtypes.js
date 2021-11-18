// import the mongoose library 
const mongoose = require('mongoose')
// create the schema 
const Schema = mongoose.Schema;
//create the model from schema and connect to mongodb collection
const BloodtypeSchema  = new Schema(
// we need to declare the feild present in the schema 
{
    name:{
        type: String,
        required :true
    },
    content:{
        type: String,
        required :true
    },
    image:{
        type: String,
        required :true
    },
    blood_type:{
        type: String,
        required :true
    },
}
);

//create the model from schema and connect to mongodb collection
// mongoose.model(1,2,3) requires 3 parameters (1 which you want use in whole application so in controller we are using in Locations.js as Location  , 2  is schema as the name LocationSchema , 3  is the name which is given in db )
module.exports = mongoose.model('Bloodtype',BloodtypeSchema, 'BloodType' )
