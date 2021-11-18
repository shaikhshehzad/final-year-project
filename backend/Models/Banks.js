// import the mongoose library 
// create the schema 
//create the model from schema and connect to mongodb collection and export the model to be used in controllers 


const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const BankSchema  = new Schema(
    // we need to declare the feild present in the schema 
    {
        name:{
            type: String,
            required :true
        },
        city:{
            type: String,
            required :true
        },
        location_id:{
            type: Number,
            required :true
        },
        city_id:{
            type: Number,
            required :true
        },
        locality:{
            type: String,
            required :true
        },
        thumb:{
            type: Array,
            required :true
        },
        aggregate_rating:{
            type: Number,
            required :true
        },
        rating_text:{
            type: String,
            required :true
        },
        min_price:{
            type: Number,
            required :true
        },
        contact_number:{
            type: Number,
            required :true
        },
        supplies:{
            type: Array,
            required :true
        },
        image:{
            type: String,
            required :true
        },
        bloodtype_id:{
            type: Number,
            required :true
        }
    }
    );
    
    //create the model from schema and connect to mongodb collection
    // mongoose.model(1,2,3) requires 3 parameters (1 which you want use in whole application so in controller we are using in Locations.js as Location  , 2  is schema as the name LocationSchema , 3  is the name which is given in db )
    module.exports = mongoose.model('Bank',BankSchema, 'Bank' )
    