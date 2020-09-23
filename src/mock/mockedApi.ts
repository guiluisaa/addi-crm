import { Model, Server } from 'miragejs';
import { registries } from './registries.mock';

const mockedApi = () => {
  const api = new Server({
    namespace: 'api',

    models: {
      registry: Model,
    },

    seeds(server: any) {
      registries.forEach((registry) => server.create('registry', registry));
    },

    routes() {
      this.timing = 1000;

      this.get('/registries', (schema: any) => {
        return schema.registries.all();
      });
    },
  });

  return api;
};

export default mockedApi;
