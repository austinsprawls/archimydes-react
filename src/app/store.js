import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../scenes/login/loginSlice';
import createStoryReducer from '../scenes/createStory/createStorySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    createStory: createStoryReducer
  },
});
