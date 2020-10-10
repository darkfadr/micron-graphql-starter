import { mergeResolvers } from './util';
import * as User from './user';
// import * as ExampleDomain from './example'

export const resolvers = mergeResolvers(
  User,
  //ExampleDomain
);