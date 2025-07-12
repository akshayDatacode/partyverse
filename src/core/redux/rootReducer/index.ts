import { combineReducers } from '@reduxjs/toolkit';

import countSlice from '@/pages/LandingPage/reducer/countSlice';

const rootReducer = combineReducers({
  count: countSlice,
});

export default rootReducer;