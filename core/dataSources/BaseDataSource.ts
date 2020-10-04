import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { ApolloContext } from '.';

export default class BaseDataSource extends DataSource<ApolloContext> {
  context!: ApolloContext;

  constructor() {
    super();
  }

  initialize(_config: DataSourceConfig<ApolloContext>) {
    this.context = _config.context;
  }

  errorHandler(err:  Error | undefined): any {
    console.error('[Datasource Error]: ', err);
    return err;
  }
}
