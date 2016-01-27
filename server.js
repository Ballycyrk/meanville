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

var timer = require('./server/models/timer_m.js');
timer.start()

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
  // return to connected socket the timer state.
  console.log("SERVER:: WE ARE USING SOCKETS!");
  console.log(socket.id);
  var goGo = timer.getSecond();
  socket.emit("giveSecond", goGo);

  socket.on("requestToPress", function(socket) {
    timer.reset();
    var goGo = timer.getSecond();
    io.sockets.emit("giveSecond", goGo);
    // confirm proper broadcast all.
  })
});
