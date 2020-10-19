var ex=require('express');
var app=ex();

app.listen(9000,function(){
	console.log("Server Started");
});

app.get('/login/:Id/:pass',function(req,res){
	
	var uid=req.params.Id;
	var pwd=req.params.pass;
	
	if(uid == 'Object' && pwd == 'KnowIt')
		res.send("<h1>Succsessfully Enter to web page</h1>");
	else
		res.send("<h1>Login failed</h1>");
});