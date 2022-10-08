require('dotenv').config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const app = express();
const path = require('path')

const connectDb = require('./database/db');
const usersRoute = require('./routes/usersRoute')
// const scoresRoute = require('./routes/scoresRoute')
const { appOrigin } = require('./config');


connectDb()
app.use(compression())
app.use(cors({ credentials: true, origin: appOrigin }))
app.use(express.static(path.join(__dirname + "/public")))
app.use('/api/users', usersRoute)
// app.use('/api/scores', scoresRoute)


const PORT = process.env.PORT || 5000;




app.listen(PORT, () => console.log('Node server started using nodemon'));