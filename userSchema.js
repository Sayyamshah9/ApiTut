const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name:String,
    phn:Number

})

module.exports = mongoose.model("userdata", userSchema)