
exports.Category =  {
    products: (parent, args, context) => {
        const products = context.products
        const categoryId = parent.id
        const categoryProducts = products.filter(product => product.categoryID === categoryId)
        return categoryProducts
    }
}