import { ApolloContext } from "core/dataSources"

type UserResolver = 
  (obj: any, args: any, ctx: ApolloContext, info: any) => any;
export const users: UserResolver = (_parent, _args, ctx, _info) => 
  ctx.dataSources.user.findAll();

type UserByIdResolver = 
  (obj: any, args: { id: any }, ctx: ApolloContext, info: any) => any;
export const user: UserByIdResolver = (_parent, args, ctx, _info) => 
  ctx.dataSources.user.findById(args.id);