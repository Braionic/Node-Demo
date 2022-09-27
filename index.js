const http = require('http');
http.createServer(function(req, res){
    if(req.url === '/'){
        res.end('you are in the index page');
    }else if(req.url === '/about'){
        res.end('<h1>Hey</h1> <p>This is the about page</p>')
    }else{
    res.end('<h1>404</h1>');
    }
}).listen(5000);