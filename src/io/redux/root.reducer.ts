import { combineReducers } from 'redux';

import leadReducer from './lead/lead.reducer';
import prospectorReducer from './prospector/prospector.reducer';

const rootReducer = combineReducers({
  lead: leadReducer,
  prospector: prospectorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
