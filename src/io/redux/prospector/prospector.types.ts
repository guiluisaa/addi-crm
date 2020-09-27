import { LeadModel } from '@/models/Lead.model';

export type ProspectorState = {
  prospectors: LeadModel[];
  error: string;
};

export const GET_PROSPECTORS = 'GET_PROSPECTORS';
export const SET_PROSPECTOR_ERROR = 'SET_PROSPECTOR_ERROR';
export const CREATE_PROSPECTOR = 'CREATE_PROSPECTOR';

type getProspectors = {
  type: typeof GET_PROSPECTORS;
  payload: LeadModel[];
};

type createProspector = {
  type: typeof CREATE_PROSPECTOR;
  payload: LeadModel;
};

type setError = {
  type: typeof SET_PROSPECTOR_ERROR;
  payload: string;
};

export type ProspectorTypes = getProspectors | createProspector | setError;
