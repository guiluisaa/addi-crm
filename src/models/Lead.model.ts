import { BaseModel } from './BaseModel.model';
import { PersonDto } from './Person.model';

export type LeadDto = PersonDto & {
  existsInRegisty: boolean | null;
  matchWithRegisty: boolean | null;
  hasJudicialRecord: boolean | null;
  score: number;
};

export type LeadModel = BaseModel & LeadDto;
