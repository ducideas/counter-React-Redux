import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/withRedux/singleCounterReduxSlice';
import multipleReducer from '../components/withRedux/multipleCounterReduxSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    multipleCounter: multipleReducer,
  },
});
