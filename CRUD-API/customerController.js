const express = require('express')
const router = express.Router()
const customers = [
    {
        "id":1,
        "name": "Bhavana",
        "email": "bhavs@gmail.com"
    },
    {
        "id":2,
        "name": "Chandana",
        "email": "chandu@gmail.com"
    }
]

router.get('/', (req, res)=>{
    res.send("<b>Customers API</b>") //sending response back using send() => sends the response and closes the connection with the web-browser automatically.
}) // when we enter localhost:8000, what has to be done is mentioned within this function.

router.get('/customers', (req, res)=>{
    res.send(customers)
})

router.post('/addCustomer', (req, res)=>{
    res.send({
        "id":3,
        "name":"Akhil",
        "email": "akhil@gmail.com"
    })
})

module.exports = router;