const typeDefs = `#graphql
  type Book {
    _id: ID
    name: String!
  }

  type User {
    _id: ID
    username: String!
    savedBooks: [Book]
  }

  type Query {
    user(username: String!): User
  }

  type Mutation {
    saveBook(name: String!): User
  }
`;

module.exports = typeDefs;
