const {ApolloServer, gql} = require('apollo-server');
const { typeDefs } = require('./schema')
const {products, categories} = require('./db')
const { Query } = require('./resolvers/Query')
const { Product } = require('./resolvers/Product')
const { Category } = require('./resolvers/Category')
// scaler type - String, Int, float, Boolean
// object type - defined in the gql section. 


// tydef and the resolvers to make this running
const server = new ApolloServer({
    typeDefs, 
    resolvers: {
        Query: Query, 
        Product: Product, 
        Category: Category
    }
})

server.listen().then((url) => {
    console.log(`server is ready at ${url}`)
})