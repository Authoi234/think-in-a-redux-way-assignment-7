import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../features/job/jobSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    job: jobReducer,
    filter: filterReducer,
  },
});
