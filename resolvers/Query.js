
exports.Query =  {
    
    products: () => {
        return products
    },


    categories: () => {
        return categories
    },


    product: (_parent, args, context) => {
        const products = context.products
        const productID = args.id
        const product = products.find(product => product.id === productID)
        return product
    },

    category: (_parent, args, context) => {
        const categoryID = args.id
        const categories = context.categories
        const category = categories.find(category => category.id === categoryID)
        return category
    }
}