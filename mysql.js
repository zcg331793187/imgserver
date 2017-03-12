/**
 * Created by zhoucaiguang on 16/8/9.
 */


var mysql = require('./base/mysql');
"use strict";

// console.log(sql);


mysql.query('UPDATE `node_title` SET `total`=total+1 WHERE  id=?',[224],function(data){
    // console.log(res[0].id+'save done %s',href);
    console.log(data);
});

return;


mysql.query('select id from node_img ',[],function(res){
    console.log(res);

    // console.log(!res.id);

});

return;
mysql.insert('node_img',{path:'http://www.baidu.com'},function(res){
    console.log(res);


});