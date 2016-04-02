ballyCyrk.controller('leaderController', function(timerFactory, teamFactory, $timeout){
  var _this = this;
  var socket = io.connect();

  this.tick = function() {
    _this.seconds--;
    if (_this.seconds == 1) { _this.seconds = 60 };
    $timeout(_this.tick, 1000);
  };

  _this.tick();
});

