import { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GET_LEADS, LeadState, LeadTypes, REMOVE_LEAD } from './lead.types';
import { AppState } from '../root.reducer';
import { LeadModel } from '@/models/Lead.model';
import api from '@/io/api';
import { sortBy } from '@/utils';
import useProspector from '../prospector/useProspector';

const useLead = () => {
  const { leads, error } = useSelector<AppState, LeadState>(({ lead }) => lead);
  const { createProspector } = useProspector();

  const dispatch = useDispatch<Dispatch<LeadTypes>>();

  const getLeads = async () => {
    try {
      const { data } = await api.get<{ leads: LeadModel[] }>('/leads');
      dispatch({
        type: GET_LEADS,
        payload: sortBy<LeadModel>(data.leads, 'id'),
      });
    } catch (error) {
      throw error; // TODO error feedback
    }
  };

  const validateLead = async (lead: LeadModel) => {
    try {
      // TODO validation rules
      convertIntoProspector(lead);
    } catch (error) {
      throw error; // TODO error feedback
    }
  };

  const convertIntoProspector = async (lead: LeadModel) => {
    try {
      await api.delete(`/leads/${lead.id}`);

      dispatch({
        type: REMOVE_LEAD,
        payload: lead,
      });

      await createProspector(lead);
    } catch (error) {
      throw error; // TODO error feedback
    }

    // TODO action
  };

  return {
    leads,
    error,

    getLeads,
    validateLead,
  };
};

export default useLead;
