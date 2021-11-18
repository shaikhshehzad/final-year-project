const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// odr =  online donation requests 
const NewOdrSchema = new Schema({

// name , gender , age , mobilenumber , address , tentativedate  , category , state , districtorcity , bloodbankname , bloodgroup , identity , identitykey
    name:{
        type : String,
        required : true
    },
    gender:{
        type : String,
        required : true
    },
    age:{
        type : String,
        required : true
    },
    mobilenumber:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    tentativedate:{
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    state:{
        type : String,
        required : true
    },
    districtorcity:{
        type : String,
        required : true
    },
    bloodbankname:{
        type : String,
        required : true
    },
    bloodgroup:{
        type : String,
        required : true
    },
    identity:{
        type : String,
        required : true
    },
    identitykey:{
        type : String,
        required : true
    }
});
module.exports = mongoose.model('Odr', NewOdrSchema, 'odr')
