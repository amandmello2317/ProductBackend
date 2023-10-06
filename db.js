const  mongoose = require("mongoose");

const MongoURI = "mongodb://127.0.0.1/newproduct"

const ConnectDB = async () => {
    try {
        await mongoose.connect(MongoURI);
        console.log("Connected to DataBase");
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB;