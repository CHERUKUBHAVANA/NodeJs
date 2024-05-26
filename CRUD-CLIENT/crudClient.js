const axios = require('axios')

function getProducts(){
    axios.get('http://localhost:8000/productapi/products')
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}

function saveProduct(){
    let product = {
        "name": "samsung",
        "price": 1000
    }
    axios.post('http://localhost:8000/productapi/addProduct', product)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    })
}

function updateProduct(){
    let product = {
        "name": "samsung",
        "price": 1200
    }
    axios.put('http://localhost:8000/productapi/update/657204474c2df84c33662984', product)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}

function getProduct(){
    axios.get('http://localhost:8000/productapi/products/6571f3ea70437b26cd850af6')
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}

function deleteProduct(){
    axios.delete('http://localhost:8000/productapi/delete/6571f3ea70437b26cd850af6')
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}
getProducts()
// saveProduct()
// updateProduct()
// getProduct()
// deleteProduct()