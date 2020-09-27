import { LeadModel } from '@/models/Lead.model';

export type LeadState = {
  leads: LeadModel[];
  error: string;
};

export const GET_LEADS = 'GET_LEADS';
export const SET_LEAD_ERROR = 'SET_LEAD_ERROR';
export const REMOVE_LEAD = 'REMOVE_LEAD';

type getLeads = {
  type: typeof GET_LEADS;
  payload: LeadModel[];
};

type removeLead = {
  type: typeof REMOVE_LEAD;
  payload: LeadModel;
};

type setError = {
  type: typeof SET_LEAD_ERROR;
  payload: string;
};

export type LeadTypes = getLeads | removeLead | setError;
