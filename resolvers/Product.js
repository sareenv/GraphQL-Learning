
exports.Product = {
    category: (parent, _args, context) => {
        const categories = context.categories
        const productCategory = parent.categoryID
        const category = categories.find(category => category.id === productCategory)
        return category
    },

    reviews: (parent, _args, context) => {
        const reviews = context.reviews
        const productId = parent.id
        const productReview = reviews.filter(review => review.productId = productId)
        return productReview
    }
}
