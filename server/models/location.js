mongoose    = require('mongoose');
var Schema  = mongoose.Schema;

var LocationSchema =new Schema ({
  name: {type:String, required: true},
  created_at:{type: Date, default: Date()}
});

mongoose.model('Location', LocationSchema);

