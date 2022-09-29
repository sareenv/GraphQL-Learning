const {ApolloServer, gql} = require('apollo-server');

// scaler type - String, Int, float, Boolean

const typeDefs = gql`
    type Query {
        hello: [String]
        numberOfAnimals: Int
    }
`
const resolvers = {
    Query: {
        hello: () => {
            return [
                "hello world", 
                "hello from this side"
            ]
        },

        numberOfAnimals: () => {
            return 55
        }
    }
}

// tydef and the resolvers to make this running
const server = new ApolloServer({
    typeDefs, 
    resolvers
})

server.listen().then((url) => {
    console.log(`server is ready at ${url}`)
})