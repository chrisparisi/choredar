import { configureStore } from '@reduxjs/toolkit';

import choresReducer from '../features/chores/choreSlice';

export const store = configureStore({
  reducer: {
    chores: choresReducer,
  },
});
