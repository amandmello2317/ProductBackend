const express = require('express')
const ProductInsert = require('../Controlle/ProductController')

const router = express.Router()


router.post("/productinsert", ProductInsert)

module.exports = router;