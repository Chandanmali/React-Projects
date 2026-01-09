const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    password: Number,
    email: String
})

const userModel = mongoose.model("user", userSchema)

module.exports = {
    userModel
}