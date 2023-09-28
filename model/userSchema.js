const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    pswd: {
        type: String,
        required: true
    },
    uname: {
        type: String,
        required: true
    },
    place: {
        type: String,

    },
    social: {
        type: String,

    },
    paypal: {
        type: String,

    },
})

const users = mongoose.model("users", userSchema);
module.exports = users