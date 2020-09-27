import { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  CREATE_PROSPECTOR,
  GET_PROSPECTORS,
  ProspectorState,
  ProspectorTypes /*, REMOVE_PROSPECTOR */,
} from './prospector.types';
import { AppState } from '../root.reducer';
import { ProspectorDto, ProspectorModel } from '@/models/Prospector.model';
import api from '@/io/api';
import { sortBy } from '@/utils';

const useProspector = () => {
  const { prospectors, error } = useSelector<AppState, ProspectorState>(
    ({ prospector }) => prospector
  );

  const dispatch = useDispatch<Dispatch<ProspectorTypes>>();

  const getProspectors = async () => {
    try {
      const { data } = await api.get<{ prospectors: ProspectorModel[] }>(
        '/prospectors'
      );
      dispatch({
        type: GET_PROSPECTORS,
        payload: sortBy<ProspectorModel>(data.prospectors, 'id'),
      });
    } catch (error) {
      throw error; // TODO error feedback
    }
  };

  const createProspector = async (prospector: ProspectorDto) => {
    try {
      // TODO
      const { data } = await api.post<{ prospector: ProspectorModel }>(
        '/prospectors',
        prospector
      );

      dispatch({
        type: CREATE_PROSPECTOR,
        payload: data.prospector,
      });

      return data.prospector;
    } catch (error) {
      throw error; // TODO error feedback
    }
  };

  return {
    prospectors,
    error,

    getProspectors,
    createProspector,
  };
};

export default useProspector;
