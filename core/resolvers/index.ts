import { mergeResolvers } from './util';
import * as User from './user';

export const resolvers = mergeResolvers({ User });