import UserDatasource from './user';

export type DataSource = {
  user: UserDatasource
}

export type ApolloContext = {
  dataSources: DataSource
}

export default function(): DataSource {
  console.info('🏃🏿‍♂️ Initializing datasources');
  return {
    user: new UserDatasource()
  };
}