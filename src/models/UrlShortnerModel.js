const mongoose = require('mongoose');

const urlShortnerSchema = new mongoose.Schema({
    shortUrl : {
        type : String,
    },
    longUrl : {
        type : String,
    }
},{timestamps : true})


module.exports = mongoose.model('shortnerModel', urlShortnerSchema)