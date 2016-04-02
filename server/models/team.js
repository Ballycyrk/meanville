mongoose    = require('mongoose');
var Schema  = mongoose.Schema;

var TeamSchema =new Schema ({
  name: {type:String, required: true},
  score: {type: Number, default: 0},
  pats: {type: Number, default: 0 },
  created_at:{type: Date, default: Date()}
});

mongoose.model('Team', TeamSchema);
