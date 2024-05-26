const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bhavana:bhavana@cluster0.yzmrtmn.mongodb.net/',{})
.then(()=>{
    console.log('db connected');
})
.catch(err => console.log('DB CONNECTION ERROR:', err));

const productsSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number
})
const Product = mongoose.model("products", productsSchema)

router.get('/', (req, res)=>{
    res.send("<b>Express is easy to develop</b>") //sending response back using send() => sends the response and closes the connection with the web-browser automatically.
}) // when we enter localhost:8000, what has to be done is mentioned within this function.

router.get('/products', (req, res)=>{
   Product.find({}).exec()
  .then((docs)=>{
    // console.log(docs)
    res.send(docs)
  })
  .catch((err) => {
    console.error(err);
  });
})

router.get('/products/:id',(req,res)=>{
    Product.findOne({_id: req.params.id}).exec()
    .then((doc)=>{
        // console.log(docs)
        res.send(doc)
      })
      .catch((err) => {
        console.error(err);
      });
})

router.post('/products', (req, res)=>{
    const {id, name, price} = req.body;
    const newProduct = new Product({id, name, price})
    newProduct.save()
    .then(()=>{
        return res.json({
            message:"Product successfully added",
        })
    })
    .catch((err)=>{
        return res.status(400).json({
            error: "Error adding new product"
        })
    })
})

router.put('/products/:id', (req, res)=>{
    const id = req.params.id;
    Product.findOne({_id: id}).exec()
    .then((product)=>{
        const updatedProduct = req.body;
        const {name, price} = updatedProduct
        if(name) product.name = name;
        if(price) product.price = price;
        product.save()
        .then(()=>{
            return res.json(product)
        })
        .catch(()=>{
            return res.status(400).json({
                error: 'Error updating the product'
            })
        })
    })
    .catch(()=>{
        return res.status(400).json({
            error: 'There is no suc product'
        })
    })
})

router.delete('/products/:id', (req, res)=>{
    const id = req.params.id;
    Product.findOne({_id: id}).exec()
    .then((product)=>{
        Product.deleteOne({_id: id}).exec()
        .then(()=>{
            console.log("Deleted")
            res.send("deleted")
        })
    })
    .catch(()=>{
        return res.status(400).json({
            error: 'There is no suc product'
        })
    })
})
module.exports = router;