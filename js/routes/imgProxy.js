/**
 * Created by zhoucaiguang on 16/8/15.
 */


var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var url = require('url');



function handelReferer(url) {

    if(url.indexOf('girlatlas')>-1){
        return 'http://girlatlas.b0.upaiyun.com/';
    }else{

        return null;
    }


}


router.get('/', function(req, res){

    // console.log(res);
    var path = decodeURIComponent(req.query.path);
    // path ? path : res.end();
    // path ? request(path).pipe(res) : res.end();

    var option ={};
    var queryUrl = url.parse(path);
    if(path=='undefined'){
        res.end();
        return;
    }
    // console.log(path);
    // if(!queryUrl){res.end();}

    option.url= path;
    option.encoding = null;
    option.headers = {Referer:queryUrl.protocol+'//'+queryUrl.host};


    var resUrl = handelReferer(path);

    if(resUrl){
        option.headers = {Referer:'http://girl-atlas.net/'};
    }
    // console.log(option);
    request(option,function(error, response, body){
        // console.log(1);
        console.log('image-proxy');
            if(error){console.log(error);return;}
        // console.log(response.statusCode);
        if (!error && response.statusCode == 200) {

            var   type = response.headers["content-type"];

            res.set('Content-Type',type);
            res.send(body);

        }else{
            res.end();
        }
    });




});

module.exports = router;
