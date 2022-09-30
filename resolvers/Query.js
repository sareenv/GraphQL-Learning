
exports.Query =  {
    
    products: (parent, args, context) => {
        return context.products
    },


    reviews: (parent, args, context) => {
        return context.reviews
    },

    categories: (parent, args, context) => {
        return context.categories
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
    },

    review: (_parent, args, context) => {
        const reviews = context.reviews
        const reviewID = args.id
        const review = reviews.filter(reviewID)
        return review        
    }

}