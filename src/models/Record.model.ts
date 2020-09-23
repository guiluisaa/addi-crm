import { BaseModel } from './BaseModel.model';

export type RecordDto = {
  nationalIdNumber: string;
  hasJudicialRecord: boolean;
};

export type RecordModel = BaseModel & RecordDto;
