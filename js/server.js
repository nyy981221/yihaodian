var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.writeHead(200,{"Content-Type":"text/html;charset-utf-8"})
	fs.readFile("index.json","utf-8",function(err,data){
		if(err){
			throw err
		}
		res.end(data)
	})
}).listen(1234,function(){
	console.log("ok")
})
