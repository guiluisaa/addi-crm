import { BaseModel } from './BaseModel.model';

export type PersonDto = {
  nationalIdNumber: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  email: string;
};

export type PersonModel = BaseModel & PersonDto;
