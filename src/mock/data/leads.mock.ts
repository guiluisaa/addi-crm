import { LeadDto } from '@/models/Lead.model';
import { persons } from './persons.mock';

const validLeads: LeadDto[] = persons.map(person => {
  const leadparams = {
    existsInRegisty: null,
    matchWithRegisty: null,
    hasJudicialRecord: null,
    score: 0,
  };

  if (person.firstName === 'Daniel')
    return {
      firstName: 'Daniela',
      lastName: 'Smith',
      nationalIdNumber: '19399063003',
      birthdate: '1972-01-15',
      email: 'danielsmith@gmail.com',

      ...leadparams,
    };

  return {
    ...person,
    ...leadparams,
  };
});

const invalidLeads: LeadDto[] = [
  {
    firstName: 'Ashlyn',
    lastName: 'Reeve',
    nationalIdNumber: '70143939017',
    birthdate: '1990-07-03',
    email: 'ashlynreeve@gmail.com',

    existsInRegisty: null,
    matchWithRegisty: null,
    hasJudicialRecord: null,
    score: 0,
  },
  {
    firstName: 'Valentino',
    lastName: 'Legge',
    nationalIdNumber: '89896287090',
    birthdate: '1977-12-14',
    email: 'valentinolegge@gmail.com',

    existsInRegisty: null,
    matchWithRegisty: null,
    hasJudicialRecord: null,
    score: 0,
  },
];

export const leads: LeadDto[] = [...validLeads, ...invalidLeads];
