import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../loginSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    credentials: loginReducer
  },
});
