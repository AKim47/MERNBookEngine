const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId:
        authors:
        description: String
        title: String
        image:
        link:
    }
    
    type Auth {
        token:
        user:
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook():
        removeBook(bookId: ID!): User
    }

`;

module.exports = typeDefs;