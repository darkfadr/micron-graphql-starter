import { micron } from '@yotie/micron';

export const authn = (fn: Function) => micron(({req, res, unauthorized }) => {
  const role = 'basic';
  if (!role) 
    return unauthorized();
  
  //@ts-ignore
  req.auth = { role, timestamp: Date.now() };
  return fn(req, res);
});