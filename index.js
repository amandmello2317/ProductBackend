const express = require('express');
const ConnectDB = require('./db');
const productroute = require('./Router/ProductRoute');
const booksrouter = require('./Router/BooksRouter');

const app = express();
const port = 4000;
app.use(express.json());

ConnectDB();


app.use("/product", productroute)
app.use("/books", booksrouter)

app.get("/", (req,res) => {
    console.log("Hello");
    res.send("Hi I Am Here");
});


app.listen(port,() => {
    console.log(`Server is on port ${port}`);
});