import { combineReducers } from 'redux';

import leadReducer from './lead/lead.reducer';

const rootReducer = combineReducers({
  lead: leadReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
