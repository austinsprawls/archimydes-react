import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../scenes/login/loginSlice';
import createStoryReducer from '../scenes/createStory/createStorySlice';
import listStoryReducer from '../scenes/listStories/listStoriesSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    createStory: createStoryReducer,
    listStories: listStoryReducer
  },
});
