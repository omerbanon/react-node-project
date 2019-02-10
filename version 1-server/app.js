var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require('express-session')
var app = express();






var server = require('http').createServer(app); 

var io = require('socket.io')(server);

io.on('connection', function (socket) { 
  console.log('someone connected');
  //here we can send recieve data
  
  socket.on('msgClient',(data)=>{
    var x= Math.random()*1000;
    var y= Math.random()*1000; 
    socket.emit("msg", {x:x, y:y} ); 
  });
}); 
server.listen(8888);










app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
