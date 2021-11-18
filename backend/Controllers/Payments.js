// importing all the rewquired packages that are needed 

require('dotenv').config();
const { json } = require('express');
const formidable  = require('formidable');
const  https  = require('https');
const { v4 : uuidv4 } =  require('uuid');

// import the paytm checksum file 
const PaytmChecksum  = require('./PaytmChecksum')
exports.payments  = ( req , res ) =>{

    const {

        amount , 
        email,
        mobileno
    } = req.body;

    // prepare the request object 


    let params =   { 
        MID : process.env.PAYTM_MERCHANT_ID,
        WEBSITE : process.env.PAYTM_WEBSITE,
        CHANNEL_ID : process.env.PAYTM_CHANNEL_ID,
        INDUSTRY_TYPE_ID : process.env.PAYTM_INDUSTRY_TYPE,
        ORDER_ID : uuidv4(),
        CUST_ID : email,
        TXN_AMOUNT : amount.toString(),
        EMAIL :email ,
        MOBILE_NO : mobileno.toString(),
        CALLBACK_URL : 'https://localhost:5454/paymentcallback',

    };
    // use paytm checksum to generate a signature 
    PaytmChecksum.generateSignature(params , process.env.PAYTM_MERCHANT_KEY)
    

    paytmChecksum.then(response => {
        let paytmChecksumResp = {
            ...params,
            "CHECKSUMHASH" : response
        };
        res.json(paytmChecksumResp);
    }).catch(error => {
        res.status(500).json({
            message : 'Error in payment',
            error : error
        })
    });
}

exports.paymentCallback  = ( req , res ) =>{
    // it is called by paytm system , paytm server will send the transaction here 

    const form  = new formidable.IncomingForm();

    form.parse(req, (error , fields , file ) =>{
        // check if error 
        if(error){
            console.log(error);
            res.status(500).json({error});
        }
// verify the signature 

const checksumHash = fields.CHECKSUMHASH;
const isVerified = PaytmChecksum.verifySignature(fields, process.env.PAYTM_MERCHANT_KEY, checksumHash);

if(isVerified){
    // response from the payytm server is  valid 
    // make an api call to the paytm server to get the transaction status 
 let params = {
     MID : fields.MID,
     ORDER_ID : fields.ORDER_ID
 };
 PaytmChecksum.generateSignature(params , process.env.PAYTM_MERCHANT_KEY).
 then(checksum => {
     params["CHECKSUMHASH"] = checksum ;
     const data = JSON.stringify(params);
     const reqObject = {
         hostname : 'securegw-stage.paytm.in',
         port : '443',
         path : '/order/status',
         method : 'POST',
         header : {

            'Content-Type' : 'application/json',
            'Content-Length' : data.length
         },
         data : data 
     }
     let response = "";
     let request = https.request(reqObject, (responseFromPaytm) => {
         responseFromPaytm.on('data', (chunk) => {
            response += chunk;
         });
         responseFromPaytm.on('end', (chunk) => {
             if (JSON.parse(response).STATUS === 'TXN_SUCCESS'){
//txn succes
             }
             else {
// txn filure
             }
         });
     });
     request.write(data);
     request.end()
 }).catch(error => {
     res.status(500).json({
         message : "error in  payment",
         error: error 
     });
 })
}else {
    // response is in valid 
    console.log("Checksum Mismatch");
    res.status(500).json({ error : "it's a hacker "});
    }
});
}
