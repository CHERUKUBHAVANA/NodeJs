import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number
})
module.exports = productSchema