import dao from './product.dao'

exports.getAll = (req, res) => {
    dao.get({})
        .then((docs) => {
            res.send(docs)
        })
        .catch((err) => {
            console.error(err);
        });
}

exports.get = (req, res) => {
    dao.getOne({ _id: req.params.id })
        .then((doc) => {
            res.send(doc)
        })
        .catch((err) => {
            console.error(err);
        });
}
exports.create = (req, res) => {
    const product = req.body
    dao.create(product)
        .then(() => {
            return res.json({
                message: "Product successfully added",
            })
        })
        .catch((err) => {
            return res.status(400).json({
                error: "Error adding new product"
            })
        })
}

exports.update = (req, res) => {
    const product = {
        "name": req.body.name,
        "price": req.body.price
    }
    dao.update({ _id: req.params.id }, product)
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
            error: 'There is no such product'
        })
    })
}

exports.delete = (req, res) => {
    dao.delete({ _id: req.params.id })
    .then(() => {
        return res.json({
            message: "Product successfully deleted",
        })
    })
    .catch((err) => {
        return res.status(400).json({
            error: "Error deleting product"
        })
    })
}