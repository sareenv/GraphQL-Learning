const {categories, products} = require('../db')
exports.Query =  {
    
    products: () => {
        return products
    },


    categories: () => {
        return categories
    },


    product: (_parent, args, _context) => {
        const productID = args.id
        const product = products.find(product => product.id === productID)
        return product
    },

    category: (_parent, args, _context) => {
        const categoryID = args.id
        const category = categories.find(category => category.id === categoryID)
        return category
    }
}