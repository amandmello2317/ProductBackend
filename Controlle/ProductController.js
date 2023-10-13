const { model } = require("mongoose");
const ProductSchema = require("../Module/ProductSchema");
const a=1;
const ProductInsert = async (req,res) => {
    try {
        const {name,description,price,quantity} = req.body
        const product = await new ProductSchema({
            name:name,
            description:description,
            price:price,
            quantity:quantity,
            total: price * quantity
        });
            const productsave = await product.save();
            console.log("Product Inserted");
            res.json({Product:productsave});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Innternal error")
    }
}

module.exports = ProductInsert;