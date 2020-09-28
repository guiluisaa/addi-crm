import { Dispatch, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  EDIT_LEAD,
  GET_LEADS,
  LeadState,
  LeadTypes,
  REMOVE_LEAD,
} from './lead.types';
import { AppState } from '../root.reducer';
import { LeadModel } from '@/models/Lead.model';
import api from '@/io/api';
import { sortBy } from '@/utils';
import useProspector from '../prospector/useProspector';
import { PersonModel } from '@/models/Person.model';

const useLead = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { leads, error } = useSelector<AppState, LeadState>(({ lead }) => lead);
  const { createProspector } = useProspector();

  const dispatch = useDispatch<Dispatch<LeadTypes>>();

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

  const getLead = useCallback(
    (id: string) => leads.find(lead => lead.id === id),
    [leads]
  );

  const editLead = useCallback(
    (lead: LeadModel) => {
      dispatch({
        type: EDIT_LEAD,
        payload: lead,
      });
    },
    [leads]
  );

  const validateRegistry = async (lead: LeadModel) => {
    try {
      const {
        data: { registries },
      } = await api.get<{ registries: PersonModel[] }>(
        `/registries/${lead.nationalIdNumber}`
      );

      const registry = registries[0];

      const existsInRegisty = !!registry;

      const matchWithRegisty =
        registry.firstName === lead.firstName &&
        registry.lastName === lead.lastName &&
        registry.nationalIdNumber === lead.nationalIdNumber;

      editLead({
        ...lead,
        existsInRegisty,
        matchWithRegisty,
      });

      return {
        existsInRegisty,
        matchWithRegisty,
      };
    } catch (error) {
      return {
        existsInRegisty: false,
        matchWithRegisty: false,
      };
    }
  };

  const validateLead = async (lead: LeadModel) => {
    setIsLoading(true);

    try {
      // TODO validation rules
      const { existsInRegisty, matchWithRegisty } = await validateRegistry(
        lead
      );

      convertIntoProspector({
        ...lead,
        existsInRegisty,
        matchWithRegisty,
      });
    } catch (error) {
      throw error; // TODO error feedback
    } finally {
      setIsLoading(false);
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
    isLoading,
    error,

    getLeads,
    getLead,
    validateLead,
  };
};

export default useLead;
