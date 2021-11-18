const mongoose  = require('mongoose')
const Schema = mongoose.Schema;


const NewBankSchema = new Schema({

    state:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    city:{
        type : String,
        required : true
    },
    bloodbankname:{
        type : String,
        required : true
    },
    parenthospitalname:{
        type : String,
        required : true
    },
    shortname:{
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    contactperson:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    shortname:{
        type : String,
        required : true
    },
    contactnumber:{
        type : String,
        required : true 
    },
    faxnumber:{
        type : String,
        required : true
    },
    licensenumber:{
        type : String,
        required : true
    },
    helplinenumber:{
        type : String,
        required : true
    }


});

module.exports = mongoose.model('NewBank', NewBankSchema, 'newbanks')