var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post("/saveUser",function(req,res, next){   
    var mod = new User(req.body);
    if(req.body.mode =="Save")  
    {  
        mod.save(function(err,data){  
            if(err){  
            res.send(err);                
            }  
            else{        
                res.send({data:"Record has been Inserted..!!"});  
            }  
    });  
    }  
    else   
    {  
        User.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
            function(err,data) {  
            if (err) {  
                res.send(err);         
            }  
            else{        
                res.send({data:"Record has been Updated..!!"});  
            }  
        });
    }     
})  

router.post("/getUser", function(req,res, next){
    console.info(req.body);
    User.find({"FelhGoogleID":req.body.FelhGoogleID}, function(err, user){
        console.info(user);        
        if (err) {  
            res.send(err);         
        }  
        else{        
            res.send(user);
        }
    })
    
})
router.get("/getUser", function(req,res, next){
    User.find({"FelhGoogleID":"101909721108916387554"}, function(err, user){
        console.info(user);        
        res.send(user);
    })
})
    
router.post("/deleteUser",function(req,res, next){      
    User.remove({ _id: req.body.id }, function(err) {    
        if(err){    
            res.send(err);    
        }    
        else{      
                res.send({data:"Record has been Deleted..!!"});               
            }    
    });
})  
    
    
    
router.get("/",function(req,res, next){  
    User.find({},function(err,data){  
                if(err){  
                    res.send(err);  
                }  
                else{                
                    res.send(data);  
                    }  
            });  
})

module.exports = router;