import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    isActivate: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        if (state.value>0){
        state.value -= 1;
        }
      },
      changeActivate: (state, action) => {
        state.isActivate = action.payload === undefined ? !state.isActivate : action.payload;
      },
      changeCount: (state, action) => {
          state.value = action.payload === undefined ?  state.value : action.payload;
      }
    },
  });


export const { increment, decrement, changeActivate,changeCount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectActivate = (state) => state.counter.isActivate;

// export const counterSelector = {
//     selectCount: (state) => state.counter.value,
//     selectActivate: (state) => state.counter.isActivate
// }

export default counterSlice.reducer;