var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    name: {type: String, required: true, max: 25},
    phone: {type: String, required: true, unique: true},
    email: {type: String},
    role: {type: Number, required}
});

module.exports = mongoose.model('Member', MemberSchema);