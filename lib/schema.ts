import { gql } from 'apollo-server-micro';

const schema = gql`
  type User {
    id: Int!
    firstname: String
    lastname: String
    email: String
  }

  type Query {
    user: User
    users: [User]
  }
`;

export default schema