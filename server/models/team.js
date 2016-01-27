mongoose    = require('mongoose');
var Schema  = mongoose.Schema;

var TeamSchema =new Schema ({
  name: {type:String, required: true},
  score: {type: Number, default: 0},
  created_at:{type: Date, default: Date()}
});

mongoose.model('Team', TeamSchema);

module.exports = {
  signUp: function(number){
    if (number < 11) { return {team: "Fremont", img: 1} }
    if (number < 21) { return {team: "Ballard",  img: 2 } }
    if (number < 31) { return {team: "Queen Anne", img: 3 } }
    if (number < 41) { return {team: "Capitol Hill", img: 4  } }
    if (number < 51) { return {team: "University District", img: 5 } }
    if (number > 50) { return {team: "Downtown", img: 6 } }
  }
};
