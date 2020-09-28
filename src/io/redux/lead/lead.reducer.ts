import {
  LeadState,
  LeadTypes,
  GET_LEADS,
  REMOVE_LEAD,
  SET_LEAD_ERROR,
  SET_LEAD_REGISTRY,
  SET_LEAD_JUDICIAL_RECORDS,
  SET_LEAD_SCORE,
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
    case SET_LEAD_REGISTRY:
      return {
        ...state,
        leads: state.leads.map(lead => {
          if (lead.id === action.payload.id)
            return {
              ...lead,
              existsInRegisty: action.payload.existsInRegisty,
              matchWithRegisty: action.payload.matchWithRegisty,
            };
          return lead;
        }),
      };
    case SET_LEAD_JUDICIAL_RECORDS:
      return {
        ...state,
        leads: state.leads.map(lead => {
          if (lead.id === action.payload.id)
            return {
              ...lead,
              hasJudicialRecord: action.payload.hasJudicialRecord,
            };
          return lead;
        }),
      };
    case SET_LEAD_SCORE:
      return {
        ...state,
        leads: state.leads.map(lead => {
          if (lead.id === action.payload.id)
            return {
              ...lead,
              score: action.payload.score,
            };
          return lead;
        }),
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
