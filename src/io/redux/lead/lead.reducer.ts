import {
  LeadState,
  LeadTypes,
  GET_LEADS,
  REMOVE_LEAD,
  SET_LEAD_ERROR,
} from './lead.types';

const initialState: LeadState = {
  leads: [],
  error: '',
};

const leadReducer = (state = initialState, action: LeadTypes) => {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case REMOVE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(
          lead => lead.nationalIdNumber !== action.payload.nationalIdNumber
        ),
      };
    case SET_LEAD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default leadReducer;
