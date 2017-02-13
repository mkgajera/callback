var Pool = require("./db.js");

 exports.savedetail = function(req,res){

                       Pool.getConnection(function(err,con){

                            if(!err){
                                   var email = req.body.email;
                                   var password = req.body.password;
                                   var name= req.body.name;
                                   var city = req.body.city;
                                   var phone = req.body.phone;
                                   var gender = req.body.gender;
                                 console.log("success connection");
                                 Pool.query("insert into signup set email=?,password=?,name=?,city=?,phone=?,gender=?",[email,password,name,city,phone,gender],function(err,data){

                                     if(!err){

                                         console.log("recored inserted success fully",data);
                                         res.json({'code':200,'data':data,'message':"Recored saved success"});
                                        
                                     }
                                     else{
                                         console.log("error",err);
                                     }
                                 })

                            }
                            else{
                                console.log("connection error",err);
                            }
                       })
   }