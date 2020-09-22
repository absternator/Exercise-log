const mongoose = require('mongoose');

const exersizeSchema = new mongoose.Schema({
    username: String,
    description: String,
    duration: Number,
    date: Date
}, {
    timestamps: true,
});
const Exersize = mongoose.model("Exersize", exersizeSchema);
module.exports = Exersize;