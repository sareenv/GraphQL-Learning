const {ApolloServer, gql} = require('apollo-server');
const { typeDefs } = require('./schema')
const {products, categories} = require('./db')
const { Query } = require('./resolvers/Query')
const { Product } = require('./resolvers/Product')
const { Category } = require('./resolvers/Category')

// tydef and the resolvers to make this running
const server = new ApolloServer({
    typeDefs, 
    resolvers: {
        Query: Query, 
        Product: Product, 
        Category: Category
    }, 
    context: {
        products, 
        categories
    }
})

server.listen().then((url) => {
    console.log(`server is ready at ${url}`)
})