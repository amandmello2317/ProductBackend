const BooksSchema = require("../Module/BooksSchema");

const BooksInsert = async (req, res) => {
    try {
        const {autheor,title,publisher} = req.body
        const books = await new BooksSchema({
            autheor,
            title,
            publisher
        })
        const savebooks = await books.save()
        res.send(savebooks)
    } catch (error) {
        console.log(error);
        res.status(500).send("internal error")
    }
}


const BooksDisplay = async (req, res) => {
    try {
        const books = await BooksSchema.find()
        res.json(books)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal error")
    }
}

const DeleteBooks = async (req, res) => {
    try {
        let books = await BooksSchema.findById(req.params.id)
        if(!books){
            return res.status(404).send("not Found")
        }
        books = await BooksSchema.findByIdAndDelete(req.params.id)
        res.json({success:"deleted", books:books})
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal error")
    }
}

const updatebook = async (req, res) => {
    const {autheor,title,publisher} = req.body
    try {
        const newBooks = {}
        if(autheor) {newBooks.autheor = autheor} 
        if(title) {newBooks.title = title}
        if(publisher) {newBooks.publisher = publisher}

        let books = await BooksSchema.findById(req.params.id)
        if(!books){
            return res.status(404).send("Not found")
        }
        books = await BooksSchema.findByIdAndUpdate(req.params.id, {$set: newBooks}, {new:true})
        res.json(books)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal error")
    }
}


module.exports = {BooksInsert, BooksDisplay, DeleteBooks, updatebook};
