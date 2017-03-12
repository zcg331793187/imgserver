/**
 * Created by zhoucaiguang on 2017/3/9.
 */
/**
 * Created by zhoucaiguang on 16/8/11.
 */
"use strict";
let express = require('express');
let router = express.Router();
const mysqlBase_1 = require('../dbBase/mysqlBase');
let mysql = new mysqlBase_1.mysqlBase();
router.get('/', function (req, res, next) {
    let limit = Number(req.params.limit) || 0;
    res.json(mysql.select('select id from node_title as t   ORDER BY  t.id desc  limit ?,18', [limit]));
    /*
     mysql.select('select id from node_title as t   ORDER BY  t.id desc  limit ?,18', [limit]).then((response: any) => {


            console.log(response[0]);

         // res.send(response);

         console.log('2');
         res.json(response[0])


    }).catch((error)=>{
         res.json(error);
     })
     */
    console.log('3');
    // res.send(dbRes);
});
router.get('/imgTitle/limit/:limit', function (req, res, next) {
    // res.send(req.params.limit);
    let limit = Number(req.params.limit);
    mysql.select('select id from node_img  limit 0,10', [limit]).spread((response) => {
        res.json(response);
    });
    /*
     mysql.query('select id from node_img  limit ?,10',[limit],function(data){
     // console.log(data);
     console.log(data);
     // console.log(!res.id);
     res.json(data);
     });
     */
});
router.get('/databaseSelect/limit/:limit', function (req, res, next) {
    // res.send(req.params.limit);
    let limit = Number(req.params.limit) || 0;
    mysql.select('select t.imgThums,t.title,t.id from node_title as t   ORDER BY  t.id desc  limit ?,18', [limit]).spread((response) => {
        res.json(response);
    });
});
router.get('/databaseSelect/', function (req, res, next) {
    // res.send(req.params.limit);
    mysql.select('select imgThums,title,id from node_title   ORDER BY id DESC limit ?,18', [0]).spread((response) => {
        res.json(response);
    });
});
router.get('/imgDetail/title/:title', function (req, res, next) {
    addTotal(req.params.title);
    mysql.select('select i.url,t.title  from node_img as i left join node_title as t on t.id=i.titleId  where  i.titleId=?', [req.params.title]).spread((response) => {
        res.json(response);
    });
});
router.get('/imgSearch/title/:title', function (req, res, next) {
    mysql.select("select imgThums,title,id from node_title  where  `title` like '%" + req.params.title + "%'", []).spread((response) => {
        res.json(response);
    });
});
router.get('/imgTotal/', function (req, res, next) {
    mysql.select("select count(*) as count from node_title ", []).spread((response) => {
        res.json(response);
    });
});
router.get('/imgTotal/', function (req, res, next) {
    mysql.select("select count(*) as count from node_title  ", []).spread((response) => {
        res.json(response);
    });
});
function addTotal(titleId) {
    mysql.query("UPDATE `node_title` SET `total`=total+1 WHERE  id=?", [titleId]).spread((response) => {
    });
}
module.exports = router;
