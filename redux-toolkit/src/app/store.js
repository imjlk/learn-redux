import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testerReducer from '../features/tester/testerSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tester: testerReducer,
  },
});
