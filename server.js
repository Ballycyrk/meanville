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
var recruiter = require('./server/models/team.js');
timer.start()

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
  console.log("SERVER:: WE ARE USING SOCKETS!");
  console.log(socket.id);
  var goGo = timer.getSecond();
  io.sockets.emit("giveSecond", goGo);

  socket.on("requestToPress", function(socket) {
    var player = timer.getSecond();
    var placement = recruiter.signUp(player);
    timer.reset();
    var goGo = timer.getSecond();
    console.log("PLACE:", placement.team);
    io.sockets.emit("giveSecond", goGo);
    var team = placement.team;
    var img = placement.img;
    io.emit("giveTeam", team, img);
  })
});
