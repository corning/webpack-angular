/**
 * Created by Corning on 2016/5/18.
 */
var express = require('express');
var router = express.Router();

//首页
router.get('/', function (req, res, next) {
    res.render('home', {});
});

module.exports=router;