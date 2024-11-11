const express = require('express')
const axios = require('axios')
const cors = require('cors'); // Import the cors middleware
const shortnerRouter = require('./Routes/shortnerRoute');
const {connectDB } = require('./db');

const app = express()

app.use(cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  }));

app.use(express.json())


connectDB()
.then(() => {
    app.listen(8000 , () => {
        console.log(`server is running on https://localhost:8000`);
    })
}).catch((err) => {
    console.log("Mongo DB connection failed :",err);
})


app.use('/url',shortnerRouter)
