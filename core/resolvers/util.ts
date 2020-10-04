import { IResolvers } from 'apollo-server-micro';
export type Domain = {
  type: IResolvers,
  queries: IResolvers,
  mutations: IResolvers
}

export type ApolloResolvers = IResolvers & {
  [key:string]: IResolvers,
  Query: IResolvers,
  Mutation: IResolvers
};

export const mergeResolvers = (domains: { [key:string]: Domain }): ApolloResolvers => {
  const resolvers =  Object.keys(domains)
    .map(key => ({ key, domain: domains[key] }) )
    .reduce((map, schema) => {
      const { key, domain } = schema;

      map[key] = domain.type;
      map.Query = { ...map.Query, ...domain.queries };
      map.Mutation = { ...map.Mutation, ...domain.mutations};

      return map;
    }, {} as ApolloResolvers);
  
  //maybe delete resolvers[Query | Mutation] if they are empty after merge
  return resolvers;
}