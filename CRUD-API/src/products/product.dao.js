//dao = document access object
import mongoose from 'mongoose'
import productSchema from './product.model'

productSchema.statics={
    get: function(query){
        return this.find(query).exec()
    },
    getOne: function(query){
        return this.findOne(query).exec()
    },
    create: function(data){
        const product = this(data)
        return product.save()
    },
    update: function(query, updateData){
        return this.findOneAndUpdate(query, {$set: updateData}).exec()
    },
    delete: function(query){
        return this.findOneAndDelete(query).exec()
    }
}

const productModel = mongoose.model("products", productSchema)
module.exports = productModel