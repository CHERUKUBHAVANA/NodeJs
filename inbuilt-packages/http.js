var http = require('http')
var fs = require('fs')
var server = http.createServer((request, response)=>{
    fs.readFile('data.json', (err,data)=>{
        if(err) throw err
        response.write(data);
        // response.write("hello")
        response.end();
    })
    // response.write("<b>Node Http in action!</b>"); 
    // response.end(); 
})

server.listen(5000, ()=>{
    console.log("Server running at port 5000")
})