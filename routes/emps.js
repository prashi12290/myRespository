var express=require("express");
var router=express();
var mysql = require("mysql");
var config = require("config")

var connection = mysql.createConnection({
host:config.get("host"),
database:config.get("database"),
user:config.get("user"),
password:config.get("password")
    // host:"localhost",
    // database:"Emp",
    // user:"dac",
    // password:"dac"

})

connection.connect();
router.use(express.json());

router.get("/",(Request,Response)=>{
    var querytext="select * from employee";
    connection.query(querytext,(Error,Result)=>{
         if(Error == null){
             Response.send(JSON.stringify(Result));
         }
         else{
             Response.send(JSON.stringify(Error));
         }
    });
 });
 
 router.get("/:No",(Request,Response)=>{
      var querytext=`select * from employee where No=${Request.params.No}`;
      connection.query(querytext,(Error,Result)=>{
          if(Error == null){
              Response.send(JSON.stringify(Result));
          }
          else{
              Response.send(JSON.stringify(Error));
          }
      })
 
 });
 
 
 router.post("/",(Request,Response)=>{
     var no=Request.body.no;
     var name=Request.body.name;
     var city=Request.body.city;
     var querytext=`insert into employee values (${no},'${name}','${city}')`;
     connection.query(querytext,(Error,Result)=>{
         if(Error == null){
             Response.send(JSON.stringify(Result));
         }
         else{
             Response.send(JSON.stringify(Error));
         }
     })
 })
 
 
 router.put("/:No",(Request,Response)=>{
     var no=Request.params.No;
     var name=Request.body.name;
     var city=Request.body.city;
     var querytext=`update employee set empcity='${city}',empname='${name}' where no=${no}`;
     connection.query(querytext,(Error,Result)=>{
         if(Error == null){
             Response.send(JSON.stringify(Result));
         }
         else{
             Response.send(JSON.stringify(Error));
         }
 
     })

   
 
 
 })
 
 router.delete("/:No",(Request,Response)=>{
     var querytext=`delete from employee where No=${Request.params.No}`;
      connection.query(querytext,(Error,Result)=>{
          if(Error == null){
              Response.send(JSON.stringify(Result));
          }
          else{
              Response.send(JSON.stringify(Error));
          }
      })
 
 })
 module.exports=router;
 