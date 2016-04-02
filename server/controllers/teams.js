var mongoose    = require('mongoose');
var Team        = mongoose.model('Team');

module.exports = {
  //************ VIA IOS *************
  signUp: function(number){
    if (number < 11) { return {team: "Fremont", img: 1} }
    if (number < 21) { return {team: "Ballard",  img: 2 } }
    if (number < 31) { return {team: "Queen Anne", img: 3 } }
    if (number < 41) { return {team: "Capitol Hill", img: 4  } }
    if (number < 51) { return {team: "University District", img: 5 } }
    if (number > 50) { return {team: "Downtown", img: 6 } }
  },
  //************ VIA MEAN *************

  add: function(req, res){
    if (req.body.password != "Sprinkles") {
      res.json( {err: "Incorrect password" });
    } else {
      var newTeam = new Team({name: req.body.name});
      console.log(newTeam);
      newTeam.save(function(err){
        if (err) {
          res.json(err);
        } else {
          res.json(newTeam)
        };
      })
    }
  }
};
