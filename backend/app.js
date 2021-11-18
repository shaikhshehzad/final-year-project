// import the required packages
const express  = require('express');
const mongoose =  require('mongoose');
const bodyparser = require('body-parser');
// importing the routes 
const routes = require('./Routes/index')
// initialise the libraries 
// const app = express () < = to start the server
const app = express();
app.use(bodyparser.json()); // to read the data passed in the body
const Port = 5454 ;
// handling the cors 
app.use((req , res , next ) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, PUT , POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});
// Start using the routes 
app.use('/',routes)
// connecting to mongodb
mongoose.connect(
    'mongodb+srv://newuser:7798193956@cluster0.tgpe1.mongodb.net/eraktkosh?retryWrites=true&w=majority',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
    ).then(success => {
        console.log('connected to mongodb');
        app.listen(Port,()=>{
            console.log('Server Listening at : ' + Port);

        });
    }).catch(error => {
        console.log('Error in Db Connection' + error)
    });




