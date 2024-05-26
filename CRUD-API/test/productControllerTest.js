let chai = require('chai')
let chaiHttp = require('chai-http')
// let mocha = require('mocha')

let expect = chai.expect;
chai.use(chaiHttp);

describe('Product API', ()=>{

    before(function(){
        console.log("before")
    })
    after(function(){
        console.log("after")
    })

    beforeEach(function(){
        console.log("Before test")
    })

    afterEach(function(){
        console.log("After test")
    })
    it('Get all products', ()=>{
        chai.request('http://localhost:8000/productapi').get('/products').then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
        // return chai.request('http://localhost:8000/productapi').get('/products').then((res)=>{
        //     expect(res).to.have.status(400);
        // }).catch((err)=>{
        //     throw err;
        // })
    })

    it('Create Product', ()=>{
        chai.request('http://localhost:8000/productapi').post('/products')
        .send({"name":"Samsung", "price":1000})
        .then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
    })

    it('Get single product by id', ()=>{
        chai.request('http://localhost:8000/productapi').get('/products/657204474c2df84c33662984')
        .then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
    })

    it('Delete product', ()=>{
        chai.request('http://localhost:8000/productapi').delete('/products/657204474c2df84c33662984')
        .then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
    })

    it('Update Product', ()=>{
        chai.request('http://localhost:8000/productapi').put('/products/65747ea4c19767bf819b38a0')
        .send({"name":"Samsung", "price":1500})
        .then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
    })
})