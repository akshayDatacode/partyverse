import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountState {
  value: number;
}

const initialState: CountState = {
  value: 1230,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = countSlice.actions;

export default countSlice.reducer;