import { mergeResolvers as merge, IResolvers } from 'graphql-tools';

interface IndexSignatureInterface {
  [index: string]: any
}

type StringIndexed<T> = T & IndexSignatureInterface;

export type Domains = {
  [key:string]: IResolvers
}

export const mergeResolvers = (domains: Domains): StringIndexed<IResolvers> => {
  const resolvers = Object.keys(domains)
    .map(key => {
      const schema = domains[key];
      //@ts-ignore | need a better way of setting the type level resolvers
      schema[key] = schema.type;
      delete schema.type;

      return schema;
    });

  return merge(resolvers);
};