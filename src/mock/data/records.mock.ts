import { RecordDto } from '@/models/Record.model';
import { persons } from './persons.mock';

export const records: RecordDto[] = persons.map(({ nationalIdNumber }) => ({
  nationalIdNumber,
  hasJudicialRecord: Math.random() >= 0.8,
}));
