const { gql } = require("apollo-server");
const typeDefs = gql`
  type users {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }
  type Query {
    users: [users]!
  }
`;
