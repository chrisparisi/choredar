import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  chores: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new chore
export const createChore = createAsyncThunk();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createChore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chores.push(action.payload);
      })
      .addCase(createChore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
