const mongoose = require('mongoose')
const { Schema } = mongoose

const BooksSchema = new Schema({
    autheor: {
        type: String
    },
    title:{
        type:String
    },
    publisher:{
        type:String
    },
    publish_date:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("Books", BooksSchema)
