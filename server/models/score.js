const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.Mixed, required: true
    },
    points: {
        type: Number
    }
}, {
    timestamps: true,
})


const scoreModel = mongoose.model('score', scoreSchema)
module.exports = scoreModel