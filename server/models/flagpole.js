mongoose    = require('mongoose');
var Schema  = mongoose.Schema;

var FlagpoleSchema = new Schema ({
  name: {type:String, required: true},
  created_at:{type: Date, default: Date()}
});

mongoose.model('Flagpole', FlagpoleSchema);

