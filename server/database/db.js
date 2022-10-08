const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const mongoURL = 'mongodb+srv://visitdominicazuka:Azuka007@cluster0.duu286p.mongodb.net/afaraInitiativeTest';

        await mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

        console.log('Mongo DB Connection Successful')
    } catch (error) {
        console.log('Mongo DB Connection Failed')
    }
}

module.exports = connectDb