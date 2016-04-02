var flagpoles     = require('../controllers/flagpoles.js');
var timer         = require('../models/timer_m.js');
var teams         = require('../controllers/teams.js');

module.exports = function(app){
  app.get('/leader',         function(req, res) { teams.leaders(req, res) })
  app.post('/addTeam',       function(req, res) { teams.add(req, res)     })
  // app.get('/users',         function(req, res) { user.index(req, res) })
  // app.get('/controllers1',  function(req, res) { controller1.index(req, res) })
  // app.get('/controllers2',  function(req, res) { controller2.index(req, res) })

  // app.get('/user/:id',              function(req, res) { user.show(req, res) })
  // app.get('/controller1/:id',       function(req, res) { controller1.show(req, res) })
  // app.get('/controller2/:id',       function(req, res) { controller2.show(req, res) })

  // app.patch('/user/:id',       function(req, res){ user.update(req, res) })
  // app.patch('/controller1/:id',  function(req, res){ controller1.update(req, res) })
  // app.patch('/controller2/:id',  function(req, res){ controller2.update(req, res) })

  // app.delete('/user/:id',         function(req, res){ user.delete(req, res) })
  // app.delete('/controller1/:id',  function(req, res){ controller1.delete(req, res) })
  // app.delete('/controller2/:id',  function(req, res){ controller2.delete(req, res) })
}

