const {gql} = require('apollo-server')

const typeDefs = gql`
    type Query {
        products: [Product]!
        product(id: ID!): Product
        categories: [Category]
        category(id: ID!): Category
        reviews: [Review]
        review(id: ID!): Review
    }

    type Review {
        id: ID!
        date: String
        title: String
        productId: ID
        product: Product
        comment: String
        rating: Int
    }

    type Category {
        id: ID!
        name: String!,
        products: [Product!]
    }

    type Mutation {
        addCategory(input: AddCategoryInput): Category
        addProduct(input: AddProductInput): Product
    }

    type Product {
        id: ID!,
        name: String!, 
        description: String!, 
        quantity: Int!, 
        image: String!
        price: Float!, 
        onSale: Boolean,
        categoryID: ID, 
        category: Category, 
        reviews: [Review]
    }

    input AddCategoryInput {
        name: String!
    }

    input AddProductInput {
        id: ID!,
        name: String!, 
        description: String!, 
        quantity: Int!, 
        image: String!
        price: Float!, 
        onSale: Boolean,
        categoryID: String!
    }

`

exports.typeDefs = typeDefs