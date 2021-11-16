import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    counters: [
        {
            id: 1,
            counterValue: 0,
            isActivate: false
        }
    ],
}
export const multipleCounterSlice = createSlice({
    name: 'multipleCounter',
    initialState,
    reducers: {
        addCounter: (state, action) => {
            state.counters = state.counters.concat(action.payload);

        },
        deleteCounter: (state, action) => {
            state.counters = action.payload || [];
        },
        incrementByID: (state, action) => {
            var val = state.counters.find(it => it.id === action.payload);
            if (val) {
                val.counterValue += 1;
            }
        },
        decrementByID : (state, action) => {
            var val = state.counters.find(it => it.id === action.payload);
            if (val) {
                val.counterValue -= 1;
            }
        },
        changeCountByID : (state, action) => {
            var val = state.counters.find(it => it.id === action.payload.id);
            if (val) {
                val.counterValue = action.payload.value;
            }
        },
        changeActivateByID: (state, action) => {
            var val = state.counters.find(it => it.id === action.payload.id);
            if (val) {
                val.isActivate=action.payload.isActivate;
            }
        }
    }
});
export const {addCounter, deleteCounter, incrementByID, decrementByID, changeCountByID,changeActivateByID} = multipleCounterSlice.actions;
export const selectCounters = (state) => state.multipleCounter.counters;
export const selectCounter = (state) => state.multipleCounter.count;

export default multipleCounterSlice.reducer;