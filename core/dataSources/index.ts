import UserDatasource from './user';

export type DataSources = {
  user: UserDatasource
}

export type ApolloContext = {
  dataSources: DataSources
}

export default function(): DataSources {
  console.info('🏃🏿‍♂️ Initializing datasources');
  return {
    user: new UserDatasource()
  };
}