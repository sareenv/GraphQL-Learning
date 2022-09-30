const {gql} = require('apollo-server')
const typeDefs = gql`
    type Query {
        products: [Product]!
        product(id: ID!): Product
        categories: [Category]
        category(id: ID!): Category
    }

    type Category {
        id: ID!
        name: String!,
        products: [Product!]
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
        category: Category
    }
`

exports.typeDefs = typeDefs