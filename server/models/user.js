const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String
    },
    date: {
        type: String
    },
    marital: {
        type: String
    },
    gender: {
        type: String
    },
    nin: {
        type: String
    },
    telephone: {
        type: String
    },
    nationality: {
        type: String
    },
    university: {
        type: String
    },
    score: {
        type: Number
    }

}, {
    timestamps: true,
})
 
// userSchema.pre("save", async () => {

// })

const userModel = mongoose.model('user', userSchema)
module.exports = userModel