ballyCyrk.controller('timerController', function(timerFactory, $location, $timeout){
  var _this = this;
  var socket = io.connect();

  this.tick = function() {
    _this.seconds--;
    if (_this.seconds == 1) { _this.seconds = 60 };
    $timeout(_this.tick, 1000);
  };

  this.pressButton = function() {
    socket.emit("requestToPress");
  };

  socket.on('giveSecond', function (data) {
    console.log("Sockets::", data);
    _this.seconds = data;
  });

  _this.tick();
});

