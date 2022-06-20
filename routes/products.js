const router = require('express').Router();
const controller = require('../controllers/products');

router.post("/products", async function (req, res) {
    let np = await controller.addProduct(

    )
    console.log(np)
    console.log(res.statusCode)
    res.status(201)
    res.send(np)


})
module.exports = router;
