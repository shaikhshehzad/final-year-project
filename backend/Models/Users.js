const mongoose  = require('mongoose')
const Schema = mongoose.Schema;


const UserSchema = new Schema({
// email , firstname , lastname , gender , dob , state , district , pincode , password ,confirmpassword 
    email:{
        type : String,
        required : true
    },
    firstname:{
        type : String,
        required : true
    },
    lastname:{
        type : String,
        required : true
    },
    gender:{
        type : String,
        required : true
    },
    dob:{
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
    password:{
        type : String,
        required : true
    },
    confirmpassword:{
        type : String,
        required : true
    },
});

module.exports = mongoose.model('User', UserSchema, 'User')