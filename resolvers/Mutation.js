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
    }
}