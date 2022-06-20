const Products = require('../models/products');

class ProductsController{

    static async addProduct(){
        /**
         *   "name": "Premium Roast Coffee",
         *         "price": 1.19,
         *         "mrp": 1.19,
         *         "stock": 1
         * @type {{price: string, isPublished: boolean, name: string, mrp: string, stock: string}}
         */
        let obj= {
            name: "Premium Roast Coffee",
            price: 1.19,
            mrp: 1.19,
            stock: 1,
            isPublished: false
        }
        let newProduct = Products.create(obj)
        console.log(newProduct)
        return newProduct
    }

}

module.exports = ProductsController

