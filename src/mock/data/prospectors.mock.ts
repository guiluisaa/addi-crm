import { ProspectorDto } from '@/models/Prospector.model';

export const prospectors: ProspectorDto[] = [
  {
    firstName: 'Elwood',
    lastName: 'Estrada',
    nationalIdNumber: '42132920028',
    birthdate: '1980-07-03',
    email: 'elwoodestrada@gmail.com',

    existsInRegisty: true,
    matchWithRegisty: true,
    hasJudicialRecord: false,
    score: 72,
  },
];
