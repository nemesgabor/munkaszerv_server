var express = require('express');
var bodyParser = require('body-parser');  
var cookieParser = require('cookie-parser');
var mongo = require("mongoose");  

var db = mongo.connect("mongodb://localhost:27017/munkaszerv", function(err, response){  
   if(err){ console.log( err); }  
   else{ /*console.log('Connected to ' + db, ' + ', response);*/ }  
});  

var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
  
var app = express()  

app.use(bodyParser.urlencoded({extended:true}));  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(cookieParser());
   
app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');   
    res.setHeader('Access-Control-Allow-Credentials', true);
     next();    
 });  
  
 app.use('/', appRoutes);
 app.use('/users', userRoutes);
 
 app.listen(8080, function () {
  console.log('Munkaszerv server listening on port 8080!')  
 })  