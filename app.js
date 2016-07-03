/**
 * Created by Corning on 2016/5/15.
 */
var path=require('path');
var express=require('express');
var favicon=require('serve-favicon');

var app=express();
var isDev=process.env.NODE_ENV==='development';
var defaultPort=isDev?3800:8000;
var port=process.env.PORT||defaultPort;

/**
 * Static Path
 */
app.use(express.static(path.join(__dirname,'assets')));

app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

var home = require('./server/routes/home');
app.use('/', home);

app.listen(port,function(err) {
    if (err) {
        console.error(err);
    } else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
});