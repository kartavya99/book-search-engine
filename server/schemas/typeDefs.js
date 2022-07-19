const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    savedBooks: [Book]
  }

  type Book {
    authors: String!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String
  }

  input BookData {
    authors: [String]
    description: String
    title: String!
    bookId: ID!
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookData!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
