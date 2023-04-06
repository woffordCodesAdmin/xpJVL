const mongoose = require('mongoose')

const sneakerSchema = new mongoose.Schema({
    name: {type:String, required: true}
})

const Sneaker = mongoose.model("Sneaker", sneakerSchema)

module.exports = Sneaker