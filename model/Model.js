var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:{
        type:String,
    },
    lastname:{
        type:String,
    },
    contact:{
        type:String,        
    },
    email:{
        type:String,
    },
    nikename:{
        type:String,
    }
})

module.exports = mongoose.model('model',schema)