import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const booksObj = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
const typeDefs = `#graphql

    type Book {
    title: String
    author: String
    }

    type Query {
    books: [Book]
    }
`;
const resolvers = {
    Query: {
        books: () => booksObj,
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});
console.log(`🚀  Server dsaready at: ${url}`);
