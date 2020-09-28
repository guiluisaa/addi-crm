import { Dispatch, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  LeadState,
  LeadTypes,
  REMOVE_LEAD,
  SET_LEAD_JUDICIAL_RECORDS,
  SET_LEAD_REGISTRY,
  SET_LEAD_SCORE,
} from './lead.types';
import { AppState } from '../root.reducer';
import { LeadModel } from '@/models/Lead.model';
import api from '@/io/api';
import useProspector from '../prospector/useProspector';
import { PersonModel } from '@/models/Person.model';
import { RecordModel } from '@/models/Record.model';

const useLead = (id: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingConversion, setIsLoadingConversion] = useState(false);
  const { leads, error } = useSelector<AppState, LeadState>(({ lead }) => lead);
  const { createProspector } = useProspector();

  const dispatch = useDispatch<Dispatch<LeadTypes>>();

  const lead = useMemo(() => leads.find(lead => lead.id === id), [leads]);

  const isRefused = useMemo(
    () =>
      !!lead &&
      ((lead.score > 0 && lead.score < 60) ||
        lead.existsInRegisty === false ||
        lead.matchWithRegisty === false ||
        lead.hasJudicialRecord === true),
    [lead]
  );

  const wasFeched = useMemo(
    () =>
      !!lead &&
      typeof lead.existsInRegisty === 'boolean' &&
      typeof lead.matchWithRegisty === 'boolean' &&
      typeof lead.hasJudicialRecord === 'boolean',
    [lead]
  );

  useEffect(() => {
    if (
      lead &&
      typeof lead.existsInRegisty === 'boolean' &&
      typeof lead.matchWithRegisty === 'boolean' &&
      typeof lead.hasJudicialRecord === 'boolean' &&
      lead.score > 0
    )
      setIsLoading(false);
  }, [isLoading, lead]);

  useEffect(() => {
    if (lead && wasFeched && lead.score === 0) convertIntoProspector(lead);
  }, [lead, wasFeched]);

  const deleteLead = useCallback(async (lead: LeadModel) => {
    try {
      await api.delete(`/leads/${lead.id}`);
      dispatch({
        type: REMOVE_LEAD,
        payload: lead,
      });
    } catch (error) {
      // TODO error feedback
      throw error;
    }
  }, []);

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

      dispatch({
        type: SET_LEAD_REGISTRY,
        payload: {
          id: lead.id,
          existsInRegisty,
          matchWithRegisty,
        },
      });

      return {
        existsInRegisty,
        matchWithRegisty,
      };
    } catch (error) {
      dispatch({
        type: SET_LEAD_REGISTRY,
        payload: {
          id: lead.id,
          existsInRegisty: false,
          matchWithRegisty: false,
        },
      });

      return {
        existsInRegisty: false,
        matchWithRegisty: false,
      };
    }
  };

  const validateJudicialRecord = useCallback(async (lead: LeadModel) => {
    try {
      const {
        data: { records },
      } = await api.get<{ records: RecordModel[] }>(
        `/records/${lead.nationalIdNumber}`
      );

      const { hasJudicialRecord } = records[0];

      dispatch({
        type: SET_LEAD_JUDICIAL_RECORDS,
        payload: {
          id: lead.id,
          hasJudicialRecord,
        },
      });

      return { hasJudicialRecord };
    } catch (error) {
      // TODO improve this logic
      dispatch({
        type: SET_LEAD_JUDICIAL_RECORDS,
        payload: {
          id: lead.id,
          hasJudicialRecord: true,
        },
      });

      return {
        hasJudicialRecord: lead.hasJudicialRecord,
      };
    }
  }, []);

  const validateLead = useCallback(async (lead: LeadModel) => {
    setIsLoading(true);

    try {
      validateRegistry(lead);
      validateJudicialRecord(lead);
    } catch (error) {
      throw error; // TODO error feedback
    }
  }, []);

  const convertIntoProspector = useCallback(async (lead: LeadModel) => {
    try {
      const {
        data: { score },
      } = await api.post<{
        nationalIdNumber: string;
        score: number;
      }>('/score/:nationalIdNumber', {
        existsInRegisty: lead.existsInRegisty,
        matchWithRegisty: lead.matchWithRegisty,
        hasJudicialRecord: lead.hasJudicialRecord,
      });

      dispatch({
        type: SET_LEAD_SCORE,
        payload: {
          id: lead.id,
          score,
        },
      });

      if (
        score > 60 &&
        lead.existsInRegisty &&
        lead.matchWithRegisty &&
        !lead.hasJudicialRecord
      ) {
        setIsLoadingConversion(true);

        await deleteLead(lead);
        await createProspector({ ...lead, score });

        setIsLoadingConversion(false);
      }
    } catch (error) {
      throw error; // TODO error feedback
    }

    // TODO action
  }, []);

  return {
    lead,
    isRefused,
    wasFeched,
    isLoading: isLoading || isLoadingConversion,
    error,

    validateLead,
  };
};

export default useLead;
