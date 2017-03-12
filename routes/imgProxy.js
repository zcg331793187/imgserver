/**
 * Created by zhoucaiguang on 16/8/15.
 */


var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var url = require('url');




router.get('/', function(req, res){

    // console.log(res);
    var path = decodeURIComponent(req.query.path);
    // path ? path : res.end();
    // path ? request(path).pipe(res) : res.end();

    var option ={};
    var queryUrl = url.parse(path);
    option.url= path;
    option.encoding = null;
    option.headers = {Referer:queryUrl.protocol+'//'+queryUrl.host};

    request(option,function(error, response, body){
        // console.log(1);
        console.log('image-proxy');

        if (!error && response.statusCode == 200) {
            var   type = response.headers["content-type"];
            var   prefix = "data:" + type + ";base64,";
            var   base64 = new Buffer(body).toString('base64');
            // deferred.resolve(prefix + base64);
            // console.log(prefix + base64);
            res.send({base64:prefix+base64});
        }else{
            res.end();
            // deferred.resolve(false)
        }
    });




});

module.exports = router;
