const express = require('express');
const ConnectDB = require('./db');
const route = require('./Router/ProductRoute');


const app = express();
const port = 4000;
app.use(express.json());

ConnectDB();


app.use("/product", route)

app.get("/", (req,res) => {
    console.log("Hello");
    res.send("Hi I Am Here");
});


app.listen(port,() => {
    console.log(`Server is on port ${port}`);
});