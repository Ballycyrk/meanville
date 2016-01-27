ballyCyrk.controller('timerController', function(timerFactory, $location, $timeout){
  var _this = this;
  var socket = io.connect();

  this.getTimer = function(){
    timerFactory.show(function(data){
      _this.seconds = data;
    });
  }

  this.tick = function() {
    if (_this.seconds == 1) { _this.seconds = 61 };
    if (_this.seconds == 0) { return }
    _this.seconds--;
    $timeout(_this.tick, 1000);
  };

  this.pressButton = function() {
    socket.emit("requestToPress");
  };



  socket.on('connect', function (data) {
    _this.getTimer();
    _this.tick();
  });

  socket.on("serverApproval", function(socket) {
    _this.getTimer();
  })
});

