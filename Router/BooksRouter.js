const express = require('express')
const {BooksInsert, BooksDisplay,DeleteBooks,updatebook} = require('../Controlle/BooksController')

const router = express.Router()
router.post("/insertbooks", BooksInsert)
router.get("/displaybooks",BooksDisplay)
router.delete("/deletebooks/:id",DeleteBooks)
router.put("/updatebooks/:id", updatebook)

module.exports = router