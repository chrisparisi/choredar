import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  chores: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const choreSlice = createSlice({
  name: 'chore',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {},
});

export const { reset } = choreSlice.actions;
export default choreSlice.reducer;
