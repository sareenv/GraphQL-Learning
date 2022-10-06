const { randomUUID } = require("crypto")

exports.Mutation = {
    addCategory: (_parent, args, context) => {
        const categories = context.categories
        const input = args.input
        const newCategory = {
            id: randomUUID(),
            name: input.name
        }
        categories.push(newCategory)
        return newCategory
    },

    addProduct: (_parent, args, context) => {
        const products = context.products
        const input = args.input
        const newProduct = {
            id: randomUUID(), 
            "name": input.name, 
            "description": input.description, 
            "quantity": input.quantity, 
            "image": input.image,
            "price": input.price, 
            "onSale": input.onSale,
            "categoryID": input.categoryID
        }
        products.push(newProduct)
        return newProduct
    }


}