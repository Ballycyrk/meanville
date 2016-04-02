var mongoose    = require('mongoose');
var User        = mongoose.model('Flagpole');

module.exports = {
  create: function(req, res){
    User.findOne({name: req.body.name}, function (err, user){
      if (err) {
        res.json(err);
      } else if (!user) {
        var newUser = new User(req.body);
        newUser.save(function(err){
          if (err) {
            res.json(err);
          } else {
            res.json(newUser);
          }
        });
      } else {
        res.json(user);
      };
    });
  },
  index: function(req,res){
    User.find({}, function (err, users){
      if (err) {
        res.json(err);
      } else {
        res.json(users);
      }
    });
  },
  show: function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      res.json(user);
    });
  },
  update: function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      console.log('user', user);
        name.UPDATE = WITH_THIS; //*************************UPDATE*********
        user.save(function(err,data){res.json({success: true});
        });
    })
  },
  delete: function(req, res){
    User.remove({_id: req.params.id}, function(err) {
      if (err) {
        res.json(err);
      } else {
        res.json({success: true});
      }
    })
  }
};

