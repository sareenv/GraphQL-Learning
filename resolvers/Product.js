
exports.Product = {
    category: (parent, args, context) => {
        const categories = context.categories
        const productCategory = parent.categoryID
        const category = categories.find(category => category.id === productCategory)
        return category
    }
}
