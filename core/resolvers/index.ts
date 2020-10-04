import { mergeResolvers } from './util';
import * as User from './user';

const resolvers = mergeResolvers({ User });
export { resolvers }