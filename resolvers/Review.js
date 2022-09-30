exports.Review = {
    product: (parent, args, context) => {
        const products = context.products
        const productId = parent.productId
        const product = products.find(product => product.id === productId)
        return product
    }
}