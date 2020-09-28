import { LeadModel } from '@/models/Lead.model';

export type LeadState = {
  leads: LeadModel[];
  error: string;
};

export const GET_LEADS = 'GET_LEADS';
export const REMOVE_LEAD = 'REMOVE_LEAD';
export const SET_LEAD_REGISTRY = 'SET_LEAD_REGISTRY';
export const SET_LEAD_JUDICIAL_RECORDS = 'SET_LEAD_JUDICIAL_RECORDS';
export const SET_LEAD_SCORE = 'SET_LEAD_SCORE';
export const SET_LEAD_ERROR = 'SET_LEAD_ERROR';

type getLeads = {
  type: typeof GET_LEADS;
  payload: LeadModel[];
};

type removeLead = {
  type: typeof REMOVE_LEAD;
  payload: LeadModel;
};

type setLeadRegistry = {
  type: typeof SET_LEAD_REGISTRY;
  payload: {
    id: string;
    existsInRegisty: boolean | null;
    matchWithRegisty: boolean | null;
  };
};

type setLeadJudicialRecord = {
  type: typeof SET_LEAD_JUDICIAL_RECORDS;
  payload: {
    id: string;
    hasJudicialRecord: boolean | null;
  };
};

type setLeadScore = {
  type: typeof SET_LEAD_SCORE;
  payload: {
    id: string;
    score: number;
  };
};

type setError = {
  type: typeof SET_LEAD_ERROR;
  payload: string;
};

export type LeadTypes =
  | getLeads
  | removeLead
  | setLeadRegistry
  | setLeadJudicialRecord
  | setLeadScore
  | setError;
