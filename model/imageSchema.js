const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true
    },
    iname:{
        type:String,
        required:true
    }
})

const images = mongoose.model("images",imageSchema)

module.exports = images