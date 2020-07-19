import { createSlice } from '@reduxjs/toolkit';
import fetch from 'node-fetch';

export const listStoriesSlice = createSlice({
    name: 'listStories',
    initialState: {
        errorMessage: '',
        stories: [],
        isLoaded: false
    },
    reducers: {
        setStories: (state, action) => {
            state.isLoaded = true;
            if (!action.payload || action.payload.error) {
                state.errorMessage = action.payload.error;
            }
            else {
                state.stories = action.payload;
            }
        }
    }
});

export const {setStories} = listStoriesSlice.actions;

export const getStories = () => async dispatch => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('authToken')}`
    };
    const response = await fetch('http://localhost:3000/api/v1/stories', {
        headers
    });

    let result;
    try {
        result = await response.json();
    }
    catch (error) {
        result = false;
    }

    dispatch(setStories(result));

};

export const selectStories = state => state.listStories.stories;
export const selectIsLoaded = state => state.listStories.isLoaded;

export default listStoriesSlice.reducer; 