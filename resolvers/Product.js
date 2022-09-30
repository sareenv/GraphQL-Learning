const {categories, products} = require('../db')

exports.Product = {
    category: (parent, args, context) => {
        const productCategory = parent.categoryID
        const category = categories.find(category => category.id === productCategory)
        return category
    }
}
