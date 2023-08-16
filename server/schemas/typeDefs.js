const typeDefs = `#graphql
  type User {
    _id: ID
    name: String!
  }

  type Query {
    user(name: String!): User
  }

  type Mutation {
    createUser(name: String!): User
  }
`;

module.exports = typeDefs;
