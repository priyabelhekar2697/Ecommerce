//modified first time by priyanka
var exp=require('express');
var app=exp();

app.listen(9000,function(){
	
	console.log("server started");
});

app.get('/*',function(req,res){
	
	res.send("Welcome to Web Page");
});