ballyCyrk.controller('timerController', function(timerFactory, $location, $timeout){
  var _this = this;
  // this.tick = function(){
  //   timerFactory.timer(function(data){
  //   _this.second = data;
  //   setTimeout(_this.tick, 1000);
  //  });
  // };

  this.getTimer = function(){
    timerFactory.show(function(data){
      _this.seconds = data;
      _this.tick();
    });
  }

  _this.tick = function() {
    if (_this.seconds == 1) { _this.seconds = 61 };
    _this.seconds--;
    console.log("huh", _this.seconds)
    $timeout(_this.tick, 1000);
  };

  this.getTimer();
});

