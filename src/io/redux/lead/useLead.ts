import { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  GET_LEADS,
  LeadState,
  LeadTypes /*, REMOVE_LEAD */,
} from './lead.types';
import { AppState } from '../root.reducer';
import { LeadModel } from '@/models/Lead.model';
import api from '@/io/api';

const useLead = () => {
  const { leads, error } = useSelector<AppState, LeadState>(({ lead }) => lead);

  const dispatch = useDispatch<Dispatch<LeadTypes>>();

  const getLeads = async () => {
    try {
      const { data } = await api.get<{ leads: LeadModel[] }>('/leads');
      dispatch({
        type: GET_LEADS,
        payload: data.leads.sort((a, b) => {
          // sort by id
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;

          return 0;
        }),
      });
    } catch (error) {
      throw error; // TODO error feedback
    }
  };

  const validateLead = async (lead: LeadModel) => {
    try {
      // TODO
      console.log(lead);
    } catch (error) {
      throw error; // TODO error feedback
    }
  };

  // const convertIntoProspector = async (lead: LeadModel) => {
  //   try {
  //     await api.delete(`/leads/${lead.id}`);

  //     dispatch({
  //       type: REMOVE_LEAD,
  //       payload: lead,
  //     });
  //   } catch (error) {
  //     throw error; // TODO error feedback
  //   }

  //   // TODO action
  // };

  return {
    leads,
    error,

    getLeads,
    validateLead,
  };
};

export default useLead;
