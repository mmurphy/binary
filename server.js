var express = require('express');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var app = express();

app.get('/', function (req,res){
    console.log('received GET /');
    res.send("hello");
});

app.listen(port,ip,function(){
    console.log('listening on %s:%d', ip, port);
})
