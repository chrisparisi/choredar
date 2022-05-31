import { configureStore } from '@reduxjs/toolkit';

import choresReducer from '../features/chores/choreSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chores: choresReducer,
  },
});
