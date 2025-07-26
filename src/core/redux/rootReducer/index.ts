import { combineReducers } from '@reduxjs/toolkit';

import countSlice from '@/pages/LandingPage/reducer/countSlice';
import filterSlice from '@/pages/LandingPage/reducer/filterSlice'

const rootReducer = combineReducers({
  count: countSlice,
  filter: filterSlice
});

export default rootReducer;