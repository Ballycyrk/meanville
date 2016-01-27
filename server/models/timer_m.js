module.exports = {
  show: function(req, res){
    console.log(seconds);
    res.json(seconds); },
  tick: function() {
  if (seconds == 1) { seconds = 61 };
  seconds--;
  setTimeout(tick, 1000);
  }
};

var seconds = 60;

function tick(){
  if (seconds == 1) { seconds = 61 };
  seconds--;
  setTimeout(tick, 1000);
};

