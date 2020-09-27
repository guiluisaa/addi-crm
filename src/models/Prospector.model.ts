import { BaseModel } from './BaseModel.model';
import { LeadDto } from './Lead.model';

export type ProspectorDto = LeadDto;

export type ProspectorModel = BaseModel & ProspectorDto;
