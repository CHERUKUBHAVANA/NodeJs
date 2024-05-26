const express = require('express')
const app = express() //object of express
const bodyParser = require('body-parser')

import properties from './config/properties'
import db from './config/database'
import productRoutes from './products/product.routes'

db()
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log("Error connecting to db")
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const productRouter = express.Router()
productRoutes(productRouter)
// const productRouters = require('./productController')
// const customerRouters = require('./customerController')

app.use(express.json())
app.use('/productapi', productRouter)
// app.use('/customerapi',customerRouters)

app.listen(properties.PORT, (err)=>{
    if(err) throw err
    console.log("Server running on port 8000")
})