import { micron, createLambda } from '@yotie/micron';
import { ApolloServer } from 'apollo-server-micro';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers, typeDefs, dataSources } from '../lib';
import { authn, authz } from '../lib/middlewares';


const ApolloLambda = micron(({ req, res }) => {
  const baseSchema = makeExecutableSchema({ typeDefs, resolvers }) //make sure to add Upload Scalar if a  
  const schema = applyMiddleware(baseSchema, authz)

  const server = new ApolloServer({
    playground: true,
    introspection: true,
    dataSources,
    context: async ({ req, connection }: any) => {
      if (connection) return connection.context;
      
      return {
        auth: req.auth     //this is populated by the authn middleware
      };
    },
    schema,
    engine: {
      reportSchema: true,
      reportTiming: true
    }
  });

  const lambda = server.createHandler({ path: '/api' });
  return lambda(req, res);
});

export default createLambda(ApolloLambda, {
  middlewares: [authn],
  cors: {
    origin: 'https://studio.apollographql.com, https://*.vercel.app, http://localhost:3000'
  }
});