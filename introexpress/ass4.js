var ex=require('express');
var app=ex();

app.listen(9000,function(){
	
	console.log("server started");
});

app.get('/login',function(req,res){
	res.send("<h1>Valid</h1>");
});

app.all('/login/*',function(req,res){
	
	res.send("<h1>Not Found</h1>");
});