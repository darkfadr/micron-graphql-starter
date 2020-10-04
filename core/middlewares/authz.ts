import { shield, rule } from 'graphql-shield';

const isBasic = rule({ cache: 'contextual' })(
  async (_parent, _args, ctx, _info) => {
    return ctx.auth.role === 'basic';
  }
);

export const authz = shield(
  {
    Query: {
      user: isBasic
    }
  }, 
  { debug: true }
);