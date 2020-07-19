import { createSlice } from '@reduxjs/toolkit';
import fetch from 'node-fetch';

export const createStorySlice = createSlice({
    name: 'createStory',
    initialState: {
        isSuccess: false,
        error: ''
    },
    reducers: {
        setResponseResult: (state, action) => {
            if (action.payload.error || !action.payload) {
                state.isSuccess = false;
                state.error = action.payload.error;
            }
            else {
                state.isSuccess = true;
            }
        }
    }
});

export const { setResponseResult } = createStorySlice.actions;

export const submitStory = data => async dispatch => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('authToken')}`
    };
    const response = await fetch('http://localhost:3000/api/v1/stories', {
        method: 'post',
        body: JSON.stringify(data),
        headers
    });
    let result;
    try {
        result = await response.json();
    }
    catch {
        result = false;
    }
   
    dispatch(setResponseResult(result));

};

export const selectResponseResult = state => state.createStory.isSuccess;
export const selectError = state => state.createStory.error;

export default createStorySlice.reducer;