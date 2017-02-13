 
  var mysql = require('mysql');


   var Pool = mysql.createPool({

       host:"localhost",
       user:"root",
       password:"",
       database:"book"
   })


     module.exports = Pool;
     