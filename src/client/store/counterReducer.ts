import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { sleep } from '../utils/common';
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export const incrementBy = createAction<number>('counter/incrementBy');
export const decrementBy = createAction<number>('counter/decrementBy');

export const fetchCount = createAsyncThunk('counter/fetchCount', async (time: number, thunkApi) => {
  await sleep(1000);
  return Math.random() * 10000;
});
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      console.log('increment');
      state.value += 1;
    },
    decrement: (state) => {
      console.log('decrement');
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(incrementBy, (state, action) => {
      state.value += action.payload;
    });
    builder.addCase(decrementBy, (state, action) => {
      state.value -= action.payload;
    });
    builder.addCase(fetchCount.fulfilled, (state, action) => {
      console.log(222);
      state.value = action.payload;
    });
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice;
