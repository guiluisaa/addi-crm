import { Dispatch, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GET_LEADS, LeadState, LeadTypes } from './lead.types';
import { AppState } from '../root.reducer';
import { LeadModel } from '@/models/Lead.model';
import api from '@/io/api';
import { sortBy } from '@/utils';

const useLeads = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { leads, error } = useSelector<AppState, LeadState>(({ lead }) => lead);

  const dispatch = useDispatch<Dispatch<LeadTypes>>();

  useEffect(() => {}, [leads]);

  const getLeads = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get<{ leads: LeadModel[] }>('/leads');
      dispatch({
        type: GET_LEADS,
        payload: sortBy<LeadModel>(data.leads, 'id'),
      });
    } catch (error) {
      throw error; // TODO error feedback
    } finally {
      setIsLoading(false);
    }
  };

  return {
    leads,
    isLoading,
    error,

    getLeads,
  };
};

export default useLeads;
