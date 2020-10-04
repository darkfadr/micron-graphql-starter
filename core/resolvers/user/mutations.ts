import { ApolloContext } from "core/dataSources"

type LoginResolver = 
  (obj: any, args: { email: string }, ctx: ApolloContext, info: any) => any;

export const login: LoginResolver = (_parent, args, _ctx, _info) => 
  `A login email was sent to ${args.email}.`;