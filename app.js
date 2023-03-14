const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");

//for public file to use cs
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));


var items =[];
var workItems = [];

/////////////////////////////////

app.get("/",function(req,res){

    let day = date();
    res.render("list",{
        kindofDay :day,
        newListItem : items

    });


});
/////////////////////////////


app.post("/" ,function(req , res){
  var item = req.body.newItem;
  if(req.body.list === "work"){

  workItems.push(item);
  res.redirect("/work")
}else{

    items.push(item);
    res.redirect("/");
}

res.redirect("/");


})


///////////////////////////////////////// /


app.get("/work", function(req,res){

    res.render("list" , {kindofDay : "Work List" , newListItem :workItems});

});


app.post("/work" ,function(req,res){
let item = req.body.newItem;
workItems.push(items);
res.redirect("/work");


});



/////////////////////////////////////////////

app.listen(3000,function(){
    console.log("stareted");
})




//  writing here first footer header make different file to make 
// code easy and us it with ading this line   <%- include("footer") -%>

// now to make this js file more clean make different module for 
// different thind like for date we made

// to get in app.js const date = require(__dirname + "/date.js");
// let day = date()
// to export data from function we need 
//module.exports = getDate;

////////////////////////////////
// to use multiple function in one 
//module.exports.getDate = getDate;
//module.exports.getDate = getDate;

// in app.js
// let day = date.gettDate();
//or

// in app.js
// let day = date.gettDay();

// to more short this you can use 
//module.exports.getDate = getDate;
//exports.getDate = getDate;


