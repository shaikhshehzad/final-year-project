const mongoose  = require('mongoose')
const Schema = mongoose.Schema;


const ContactSchema = new Schema({
//email , name , reason, state , district , pincode , description 
    email:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    reason:{
        type : String,
        required : true
    },
    state:{
        type : String,
        required : true
    },
    district:{
        type : String ,
        required : true
    },
    pincode:{
        type : String ,
        required : true 
    },
    description:{
        type : String ,
        required : true 
    },
});

module.exports = mongoose.model('Contact', ContactSchema, 'Contact')