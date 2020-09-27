import {
  ProspectorState,
  ProspectorTypes,
  GET_PROSPECTORS,
  CREATE_PROSPECTOR,
  SET_PROSPECTOR_ERROR,
} from './prospector.types';

const initialState: ProspectorState = {
  prospectors: [],
  error: '',
};

const prospectorReducer = (state = initialState, action: ProspectorTypes) => {
  switch (action.type) {
    case GET_PROSPECTORS:
      return {
        ...state,
        prospectors: action.payload,
      };
    case CREATE_PROSPECTOR:
      return {
        ...state,
        prospectors: [...state.prospectors, action.payload],
      };
    case SET_PROSPECTOR_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default prospectorReducer;
