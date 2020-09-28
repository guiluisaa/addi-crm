import { Model, Server, Response } from 'miragejs';

import { registries } from './data/registries.mock';
import { records } from './data/records.mock';
import { leads } from './data/leads.mock';
import { prospectors } from './data/prospectors.mock';

const mockedApi = () => {
  const api = new Server({
    namespace: 'api',

    models: {
      registry: Model,
      record: Model,
      lead: Model,
      prospector: Model,
    },

    seeds(server: any) {
      registries.forEach(registry => server.create('registry', registry));
      records.forEach(record => server.create('record', record));
      leads.forEach(lead => server.create('lead', lead));
      prospectors.forEach(prospector =>
        server.create('prospector', prospector)
      );
    },

    routes() {
      this.timing = 100;

      this.get(
        '/registries/:nationalIdNumber',
        (schema: any, request: any) => {
          const registries = schema.registries.where({
            nationalIdNumber: request.params.nationalIdNumber,
          });

          if (registries.length) return registries;

          return new Response(
            404,
            {},
            { status: 404, error: 'Registry not found' }
          );
        },
        { timing: 1000 }
      );

      this.get(
        '/records/:nationalIdNumber',
        (schema: any, request: any) => {
          const records = schema.records.where({
            nationalIdNumber: request.params.nationalIdNumber,
          });

          if (records.length) return records;

          return new Response(
            404,
            {},
            { status: 404, error: 'Registry not found' }
          );
        },
        { timing: 2500 }
      );

      this.get('/leads', (schema: any) => schema.leads.all());

      this.delete('/leads/:leadId', (schema: any, request) =>
        schema.leads.find(request.params.leadId).destroy()
      );

      this.get('/prospectors', (schema: any) => schema.prospectors.all());

      this.post('/prospectors', (schema: any, request: any) => {
        const attrs = JSON.parse(request.requestBody);
        delete attrs.id;

        return schema.prospectors.create(attrs);
      });

      this.post('/score/:nationalIdNumber', (_, request: any) => {
        let score = Math.floor(Math.random() * 101);

        const {
          existsInRegisty,
          matchWithRegisty,
          hasJudicialRecord,
        } = JSON.parse(request.requestBody);

        if (existsInRegisty) score = score + 5;
        if (matchWithRegisty) score = score + 5;
        if (!hasJudicialRecord) score = score + 5;

        if (score >= 100) score = 100;

        return {
          nationalIdNumber: request.params.nationalIdNumber,
          score,
        };
      });
    },
  });

  return api;
};

export default mockedApi;
