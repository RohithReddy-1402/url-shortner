const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://rohith:Rohith1418@url-short.44wem.mongodb.net/short-url")
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGO DB connection error", error);
        process.exit(1)
    }
}

module.exports = {connectDB}