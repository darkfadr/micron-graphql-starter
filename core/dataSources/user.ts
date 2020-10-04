import faker from 'faker';
import BaseDataSource from './BaseDataSource';

export default class UserDatasource extends BaseDataSource {
  constructor(){
    super();
  }

  private create(id?: string) {
    return {
      id: id || faker.random.uuid(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email()
    }
  }

  findAll() {
    const data = [];

    for (var i=0; i < faker.random.number(); i++) {
      data.push(this.create());
    }

    return data;
  }

  findById(id: string) {
    return this.create(id);
  }
}