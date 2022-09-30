const {categories, products} = require('../db')
exports.Category =  {
    products: (parent, args, context) => {
        const categoryId = parent.id
        const categoryProducts = products.filter(product => product.categoryID === categoryId)
        return categoryProducts
    }
}