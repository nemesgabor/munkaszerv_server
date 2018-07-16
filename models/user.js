var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


var schema = new Schema({      
    name: { type: String   },       
    googleID: { type: String   },
},{ versionKey: false });  

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('user', schema);