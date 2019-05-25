var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var crawlerSchema = new Schema({
    Url :  { type :  String},
    ReferneceCount : String,
    Parameters : String,
});

var CrawlerSchema = mongoose.model('boat', crawlerSchema);

module.exports = CrawlerSchema;