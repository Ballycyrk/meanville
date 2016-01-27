var express       = require('express');
var path          = require('path');
var bodyParser    = require('body-parser');
var app           = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


var server = app.listen(1964, function(req,res){
  console.log('********************');
  console.log('********1964********');
  console.log('********************');
});

var timer = require('./server/models/timer_m.js')
timer.tick()

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
  console.log("SERVER:: WE ARE USING SOCKETS!");
  console.log(socket.id)

  socket.on("messageToServer", function(socket) {
    io.sockets.emit("messageFromServer", socket);
  })
});
