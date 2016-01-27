module.exports = {
  show: function(req, res){
    res.json(seconds); },
  start: function() {
    tick();
  },
  reset: function() {
    seconds = 60
  },

  getSecond: function() {
    return seconds
  }
};

var seconds = 60;

function tick(){
  if (seconds == 1) { seconds = 61 };
  seconds--;
  console.log(seconds);
  setTimeout(tick, 1000);
};

