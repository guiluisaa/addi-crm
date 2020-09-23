import { Model, Server } from 'miragejs';

import { records } from './data/records.mock';
import { registries } from './data/registries.mock';

const mockedApi = () => {
  const api = new Server({
    namespace: 'api',

    models: {
      registry: Model,
      record: Model,
    },

    seeds(server: any) {
      registries.forEach((registry) => server.create('registry', registry));
      records.forEach((record) => server.create('record', record));
    },

    routes() {
      this.timing = 1000;

      this.get('/registries', (schema: any) => schema.registries.all());

      this.get('/records', (schema: any) => schema.records.all());

      this.get('/score/:nationalIdNumber', (_, request: any) => ({
        nationalIdNumber: request.params.nationalIdNumber,
        score: Math.floor(Math.random() * 101),
      }));
    },
  });

  return api;
};

export default mockedApi;
