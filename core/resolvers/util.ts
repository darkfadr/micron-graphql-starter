import { mergeResolvers as merge, IResolvers } from 'graphql-tools';

interface Resolver {
  [index:string]: IResolvers
}

type MergedResolvers<T> = T & Resolver;

interface MergeResolvers {
  (...resolvers: Resolver[]): MergedResolvers<IResolvers>
}

export const mergeResolvers: MergeResolvers = (...resolvers: Resolver[]) => 
  merge(resolvers);