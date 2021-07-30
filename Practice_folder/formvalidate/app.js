const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get("/", function (request, response){
    response.sendFile(__dirname+"/register.html");
    });

app.get("/data", function (request, response){
        //response.sendFile(__dirname+"/register.html");
        var name = request.query.FullName;
        var dob = request.query.dob;
        var mail = request.query.emailID;
        var pass = request.query.password;
        var rpass = request.query.reTypePassword;

        
        response.send(name+" "+dob+" "+mail+" "+pass+" "+rpass);
        //var num2 = parseInt(request.query.Num2);
        ///console.log(name);
        //console.log(mail);
        //console.log(pass);
        });
        

app.listen(5013);
console.log("Something awesome to happen at http://localhost:5013");