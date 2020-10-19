var exp=require('express');
var ex=exp();
//var router = ex.Router();
ex.listen(9000,function(){
	console.log("server started");
});
ex.get('/login.html',function(req,res)
{
	res.sendFile(__dirname+'/login.html');

});
ex.get('/login',function(req,res)
{
	var uid=req.query.Id;
	var pwd=req.query.pass;
	if( uid == 'Object' &&  pwd== 'KnowIt')
		res.send("<h1>Succsessfully Enter to web page</h1>");
	else
		res.send("<h1>Login failed</h1>");
});